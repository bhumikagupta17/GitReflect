# 🪞 GitReflect

**Live Demo:** [git-reflect.vercel.app](https://git-reflect.vercel.app/)

GitReflect transforms your GitHub profile into a beautiful, AI-powered analytics dashboard. Paste your username and get instant insights into your coding activity, tech stack, and personalized career advice — all wrapped in a stunning glassmorphism UI.

---

## ✨ Features

- **🤖 AI-Powered Insights** — Gemini AI analyzes your GitHub data and delivers personalized career coaching and profile improvement tips
- **📊 Activity Analytics** — Line chart visualizing your repository activity over time
- **🎨 Glassmorphism UI** — Modern frosted glass aesthetic with full Light/Dark mode support
- **🧩 Language Breakdown** — Automatically calculates your tech stack distribution across all public repos
- **📂 Project Showcase** — Dynamic rendering of your latest repositories with descriptions and language tags

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js + Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| AI | Google Gemini API |
| Backend | Node.js + Express |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- Gemini API Key → [Get one here](https://aistudio.google.com/)

### Installation

1. **Clone the repo**
```bash
   git clone https://github.com/bhumikagupta17/GitReflect.git
   cd GitReflect
```

2. **Install frontend dependencies**
```bash
   npm install
```

3. **Install backend dependencies**
```bash
   cd server
   npm install
```

4. **Set up environment variables**
```bash
   # inside /server
   cp .env.example .env
   # Add your Gemini API key to .env
   GEMINI_API_KEY=your_key_here
```

5. **Run the backend**
```bash
   cd server
   node server.js
```

6. **Run the frontend**
```bash
   # in root folder
   npm run dev
```

---

## 📄 License

MIT License — open source and free to use.

---

**Developed with ❤️ by Bhumika Gupta**
B.Tech IT '28 @ NIT Jalandhar
