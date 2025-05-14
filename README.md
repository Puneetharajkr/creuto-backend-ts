# 🧠 AI Python Tutor for Kids

An interactive, child-friendly **AI-powered Python tutor** web app designed to make learning Python fun, engaging, and accessible for children. This app provides intelligent answers to Python-related questions using the OpenAI API, all within a visually engaging and playful interface.

## 🚀 Features

- 🎨 **Kid-friendly UI** with colorful styling, emojis, and responsive layout.
- 🤖 **AI-powered tutor** that answers Python programming questions.
- 🔉 **Fun sound effects** on asking questions and receiving answers.
- 🎞️ **Animations and playful interactions** to keep children engaged.
- 🔐 **Secure API integration** (key is kept hidden using backend proxy or `env` file for development).
- 🧩 **Easy to use** input interface for kids with supportive messages and hover animations.
- 🌐 **Fully responsive** and can be used on tablets, desktops, and mobile phones.

## 🖼️ Demo Screenshot

![Screenshot](./public/demo.png)

## 🏗️ Tech Stack

| Tech         | Usage                                   |
| ------------ | --------------------------------------- |
| React.js     | Frontend framework                      |
| OpenAI API   | AI backend for answering Python queries |
| HTML/CSS     | Basic structure and styling             |
| Tailwind CSS | Utility-first styling framework         |
| JavaScript   | Dynamic behavior                        |
| Vite / CRA   | React app scaffolding (whichever used)  |
| Sound Files  | For engaging audio feedback             |

## 📁 Folder Structure

python_projects/
└── python-tutor/
├── public/
│ ├── ding.mp3
│ ├── whoosh.mp3
│ └── demo.png
├── src/
│ ├── components/
│ │ └── ChatBox.jsx
│ ├── App.js
│ ├── index.js
│ ├── styles.css
│ └── assets/
│ └── sounds/
│ ├── ding.mp3
│ └── whoosh.mp3
├── .env
└── README.md

markdown
Copy
Edit

## ✨ Core Functionality

### 1. Ask a Python Question

- Users type a Python-related question into a text box.
- On submit, the question is sent to OpenAI's API (via secure `.env` key or backend).
- Response is shown in a styled message box.

### 2. Fun Animations

- Submit button has a **bounce animation** on hover.
- Emojis or cartoon illustrations near input to make it more engaging for kids.

### 3. Sound Effects

- 🔔 `ding.mp3`: Plays when a child submits a question.
- 💨 `whoosh.mp3`: Plays when the AI sends a response.

### 4. Responsive & Accessible

- Works on all device sizes.
- Font sizes and color schemes are chosen for readability and friendliness.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and npm installed
- OpenAI API Key (from https://platform.openai.com)

### Clone the Repository

git clone https://github.com/your-username/python-tutor.git
cd python-tutor
Install Dependencies
bash
Copy
Edit
npm install
Add Your OpenAI API Key
Create a .env file in the root of your project and add:

env
Copy
Edit
VITE_OPENAI_API_KEY=your_openai_api_key_here
⚠️ Important: Never share your API key publicly. Make sure it's hidden using .env or a backend proxy.

Run the App
bash
Copy
Edit
npm run dev
The app will start on http://localhost:5173 or the port specified.

🌟 Additional Notes
All prompts sent to OpenAI use a child-safe tone and are focused on Python education.

Designed specifically for children aged 8+ with basic computer knowledge.

Includes fun feedback mechanisms to help children feel encouraged when learning.

Codebase is modular and easy to extend with new features (e.g., hint generator, coding challenges, badges system).

📦 Deployment
This app can be deployed on:

Netlify

Firebase Hosting

Vercel

Make sure to protect the API key during deployment using a backend server or environment variables configured on the hosting platform.

🔮 Future Scope
Add voice recognition for kids to speak questions.

Introduce coding quizzes and badges.

Add theme switcher (light/dark mode).

Multi-language support for internationalization.

👨‍💻 Author
Puneeth Raj K R
Frontend Developer | React Enthusiast
📧 puneetha@gmail.com

📃 License
This project is licensed under the MIT License.
