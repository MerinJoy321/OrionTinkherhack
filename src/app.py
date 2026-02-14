import os
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer

app = Flask(__name__)
CORS(app) 

# Load models globally on startup
MODEL_NAME = 'all-MiniLM-L6-v2'
CLASSIFIER_PATH = 'classifier.pkl'

print("Loading models...")
try:
    model = SentenceTransformer(MODEL_NAME)
    print(f"Model {MODEL_NAME} loaded.")
except Exception as e:
    print(f"Error loading SentenceTransformer: {e}")
    model = None

try:
    if os.path.exists(CLASSIFIER_PATH):
        classifier = joblib.load(CLASSIFIER_PATH)
        print(f"Classifier {CLASSIFIER_PATH} loaded.")
    else:
        print(f"Classifier {CLASSIFIER_PATH} not found. Please run setup_model.py first.")
        classifier = None
except Exception as e:
    print(f"Error loading classifier: {e}")
    classifier = None

@app.route('/predict', methods=['POST'])
def predict():
    if not model or not classifier:
        return jsonify({"error": "Models not loaded correctly on server."}), 500

    data = request.get_json()
    if not data or 'issue_description' not in data:
        return jsonify({"error": "Missing 'issue_description' in request body."}), 400

    issue_description = data['issue_description']
    
    try:
        # Generate embedding
        embedding = model.encode([issue_description], convert_to_numpy=True).reshape(1, -1)
        
        # Predict category
        predicted_category = classifier.predict(embedding)[0]
        
        return jsonify({
            "issue_description": issue_description,
            "predicted_category": predicted_category
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy", "model_loaded": model is not None, "classifier_loaded": classifier is not None})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
