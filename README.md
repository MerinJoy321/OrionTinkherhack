<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# Karigar 🎯

## Basic Details

### Team Name: Orion

### Team Members
- Member 1: Ziya Nazneen - Christ College of Engineering
- Member 2: Merin Joy - Christ College of Engineering

### Hosted Project Link
[mention your project hosted link here]
orion-tinkherhack-k4hmdg4e4-merin-joys-projects.vercel.app

### Project Description
Karigar is an AI-powered labour matching platform designed for Kerala. It allows users to describe their need in natural language (e.g., “Need plumber in Aluva today”), automatically categorizes the request, and displays available nearby workers instantly.

### The Problem statement
In Kerala, finding verified and available daily-wage workers like plumbers, electricians, and masons is inefficient and informal.
People rely on word-of-mouth or outdated contacts.
Workers struggle with inconsistent job flow.
There is no frictionless, AI-driven, local-first platform built specifically for Kerala’s workforce ecosystem.

### The Solution
Karigar uses AI-based intent classification to:
Understand natural language job requests
Categorize skill type automatically
Filter workers by location and availability
Instantly display relevant matches
For hackathon demo, we simulated WhatsApp-style onboarding for workers to demonstrate how frictionless registration would work in real deployment.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used:  Python , Javascript , html , css.
- Frameworks used: Next.js , Ant Design 
- Libraries used: React
- Tools used: Antigravity, GitHub , vercel , Sentence Transformer , Google Colab , scikit-learn.

---

## Features

List the key features of your project:
- Feature 1: AI Intent Recognition - Extracts skill, location, and urgency from natural language prompts.
- Feature 2: Smart Matching Engine - Filters workers based on skill + location + availability.
- Feature 3: Real-Time Availability Toggle - Workers marked available/unavailable for clean matching.
- Feature 4: Kerala-Focused Localization - Designed specifically for Kerala districts and towns.

---

## Implementation

### For Software:

#### Installation
```bash
# Backend
pip install -r requirements.txt

# Frontend
npm install

```

#### Run
```bash
# Backend
uvicorn main:app --reload

# Frontend
npm start

```

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

Customer App (Web)
        ↓
AI Intent Processing Layer
        ↓
Backend API (FastAPI)
        ↓
Database (PostgreSQL / Supabase)
        ↓
Matching & Ranking Engine
        ↓
Booking & Payment Module
        ↓
Worker Dashboard


**Application Workflow:**
Client/User Flow:
START
   ↓
Open Website / App
   ↓
Register / Login
   ↓
Home Screen
   ↓
Enter Problem in AI Chat
("My door is broken")
   ↓
AI Analyzes Request
   ↓
Identifies Required Skill (Carpenter)
   ↓
Fetch Nearby Workers
   ↓
Sort by Distance, Rating, Price, Availability
   ↓
Display Worker List
   ↓
User Selects Worker
   ↓
View Worker Profile
   ↓
Confirm Booking
   ↓
Select Payment (Online / Cash)
   ↓
Booking Confirmed
   ↓
Worker Completes Job
   ↓
User Rates & Reviews
   ↓
END

Worker Flow:
START
   ↓
Register / Login as Worker
   ↓
Create Profile
(Add Skills, Rate, Location, Availability)
   ↓
Wait for Job Request
   ↓
Receive Notification
   ↓
Accept / Reject Job
   ↓
Travel to Location
   ↓
Complete Job
   ↓
Receive Payment
   ↓
View Rating
   ↓
END


---


#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]
https://drive.google.com/file/d/1caNoY03kakLfKwYy4Jd8E2H7Gc-Vzi8A/view?usp=sharing
*Explain what the video demonstrates - key features, user flow, technical highlights*


---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:**  GitHub Copilot,ChatGPT , Gemini.

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- Ziya Nazneen:  Frontend development , Product concept design.
- Merin Joy : AI model training , Backend development.
  

---

## License

- MIT License

Made with ❤️ at TinkerHub
