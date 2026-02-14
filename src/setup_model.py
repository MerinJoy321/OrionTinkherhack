import joblib
from sentence_transformers import SentenceTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Consolidated mock data from Untitled3.ipynb
mock_data = [
    {"issue_description": "Kitchen faucet is constantly dripping, wasting water.", "labor_category": "Plumber"},
    {"issue_description": "Bathroom sink drain is completely blocked, water isn't going down.", "labor_category": "Plumber"},
    {"issue_description": "Toilet is running continuously, needs flapper valve replacement.", "labor_category": "Plumber"},
    {"issue_description": "A pipe burst in the wall, causing significant water damage.", "labor_category": "Plumber"},
    {"issue_description": "Water heater is not producing hot water.", "labor_category": "Plumber"},
    {"issue_description": "Shower head has very low water pressure.", "labor_category": "Plumber"},
    {"issue_description": "Dishwasher is leaking water onto the kitchen floor.", "labor_category": "Plumber"},
    {"issue_description": "Garbage disposal is slammed and not working.", "labor_category": "Plumber"},
    {"issue_description": "Sink is clogged and overflowing.", "labor_category": "Plumber"},
    {"issue_description": "Bathtub drain is slow and backing up.", "labor_category": "Plumber"},
    {"issue_description": "Leaky pipes under the kitchen sink.", "labor_category": "Plumber"},
    {"issue_description": "Outdoor spigot is dripping.", "labor_category": "Plumber"},
    {"issue_description": "Pressure relief valve on water heater is leaking.", "labor_category": "Plumber"},
    {"issue_description": "Sump pump not activating.", "labor_category": "Plumber"},
    {"issue_description": "Broken toilet handle.", "labor_category": "Plumber"},
    {"issue_description": "Bidet installation needed.", "labor_category": "Plumber"},
    {"issue_description": "Septic tank overflow.", "labor_category": "Plumber"},
    {"issue_description": "Commercial toilet maintenance.", "labor_category": "Plumber"},
    {"issue_description": "Water main break repair.", "labor_category": "Plumber"},
    {"issue_description": "Boiler not heating water.", "labor_category": "Plumber"},

    {"issue_description": "No power to several outlets in the living room.", "labor_category": "Electrician"},
    {"issue_description": "Light switch in the bedroom is faulty and sparks when operated.", "labor_category": "Electrician"},
    {"issue_description": "The main circuit breaker keeps tripping, cutting power to the house.", "labor_category": "Electrician"},
    {"issue_description": "Need to install new ceiling fans in two rooms.", "labor_category": "Electrician"},
    {"issue_description": "Oven is not heating up properly.", "labor_category": "Electrician"},
    {"issue_description": "Ceiling fan is making a strange grinding noise.", "labor_category": "Electrician"},
    {"issue_description": "Outdoor security light is not turning on.", "labor_category": "Electrician"},
    {"issue_description": "Bedroom outlet stopped working after a power surge.", "labor_category": "Electrician"},
    {"issue_description": "Flickering lights throughout the house.", "labor_category": "Electrician"},
    {"issue_description": "Wiring needs to be updated in an old house.", "labor_category": "Electrician"},
    {"issue_description": "New outdoor lighting installation.", "labor_category": "Electrician"},
    {"issue_description": "Smoke detector battery replacement and testing.", "labor_category": "Electrician"},
    {"issue_description": "Electric car charger installation.", "labor_category": "Electrician"},
    {"issue_description": "Faulty dimmer switch replacement.", "labor_category": "Electrician"},
    {"issue_description": "Attic fan not working.", "labor_category": "Electrician"},
    {"issue_description": "New electrical panel upgrade.", "labor_category": "Electrician"},
    {"issue_description": "Security camera system wiring.", "labor_category": "Electrician"},
    {"issue_description": "Appliance outlet installation.", "labor_category": "Electrician"},
    {"issue_description": "Hot tub electrical connection.", "labor_category": "Electrician"},
    {"issue_description": "Generator transfer switch installation.", "labor_category": "Electrician"},

    {"issue_description": "Front door frame is cracked and doesn't close properly.", "labor_category": "Carpenter"},
    {"issue_description": "Loose floorboards in the hallway are creaking loudly.", "labor_category": "Carpenter"},
    {"issue_description": "Custom shelving unit needs to be built for the study.", "labor_category": "Carpenter"},
    {"issue_description": "Cabinet door in the kitchen has fallen off its hinges.", "labor_category": "Carpenter"},
    {"issue_description": "Door jamb is damaged and needs to be replaced.", "labor_category": "Carpenter"},
    {"issue_description": "Deck railing is loose and wobbly.", "labor_category": "Carpenter"},
    {"issue_description": "Broken window pane needs to be replaced.", "labor_category": "Carpenter"},
    {"issue_description": "Custom cabinet installation for the laundry room.", "labor_category": "Carpenter"},
    {"issue_description": "Repairing a squeaky staircase.", "labor_category": "Carpenter"},
    {"issue_description": "Installing new baseboards and crown molding.", "labor_category": "Carpenter"},
    {"issue_description": "Building a custom desk for a home office.", "labor_category": "Carpenter"},
    {"issue_description": "Framing for a new interior wall.", "labor_category": "Carpenter"},
    {"issue_description": "Repairing rotten deck planks.", "labor_category": "Carpenter"},
    {"issue_description": "Installing new kitchen cabinets.", "labor_category": "Carpenter"},
    {"issue_description": "Building a wooden fence.", "labor_category": "Carpenter"},
    {"issue_description": "Repairing a broken dresser drawer.", "labor_category": "Carpenter"},
    {"issue_description": "Custom closet shelving installation.", "labor_category": "Carpenter"},
    {"issue_description": "Hardwood floor repair.", "labor_category": "Carpenter"},
    {"issue_description": "Installing new interior doors.", "labor_category": "Carpenter"},
    {"issue_description": "Gazebo construction.", "labor_category": "Carpenter"}
]

def train_and_save_model():
    print("Extracting features and labels...")
    issue_descriptions = [item['issue_description'] for item in mock_data]
    labor_categories = [item['labor_category'] for item in mock_data]

    print("Loading SentenceTransformer model...")
    model = SentenceTransformer('all-MiniLM-L6-v2')

    print("Generating embeddings...")
    embeddings = model.encode(issue_descriptions, convert_to_numpy=True)

    print("Splitting data...")
    X_train, X_test, y_train, y_test = train_test_split(
        embeddings, labor_categories, test_size=0.2, random_state=42
    )

    print("Training Logistic Regression classifier...")
    classifier = LogisticRegression(max_iter=200, random_state=42)
    classifier.fit(X_train, y_train)

    print("Saving classifier to classifier.pkl...")
    joblib.dump(classifier, 'classifier.pkl')
    print("Model setup complete.")

if __name__ == "__main__":
    train_and_save_model()
