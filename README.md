# 🚀 GitReflect

**Live Demo:** [https://git-reflect.vercel.app/](https://git-reflect.vercel.app/)

**GitReflect** is a high-performance, responsive web application that provides a visual "reflection" of your GitHub journey. Designed with a focus on clean UI/UX and data-driven insights, it transforms raw repository metadata into an interactive analytics dashboard.

## ✨ Features

*   **📊 Dual-View Analytics**: A custom toggle allows users to switch between:

    *   **Active Days**: A line chart visualizing unique days of development activity per month.
    *   **Commit Volume**: A bar chart showing the total frequency of repository updates.
      
*   **🎨 Premium Glassmorphism UI**: A modern "frosted glass" aesthetic with full **Light/Dark mode** support.
  
*   **🧩 Language Analytics**: Automatically calculates and displays your technology stack distribution (e.g., HTML, JS, C++, Dart).
  
*   **📂 Project Showcase**: Dynamic rendering of the latest public repositories with descriptions and language tags.
  
*   **📱 Optimized for macOS**: Specifically refined for a seamless experience on high-resolution displays like the MacBook Air.

## 🛠️ Tech Stack

*   **Core**: React.js & Vite
*   **Styling**: Tailwind CSS (with custom glassmorphism components)
*   **Charts**: Recharts
*   **Icons**: Lucide React
*   **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm or yarn

### Installation & Setup

1. **Clone the repo**
   ```
   git clone [https://github.com/bhumikagupta17/GitReflect.git](https://github.com/bhumikagupta17/GitReflect.git)
   cd GitReflect
   ```
2. **Install dependencies**
   ```
   npm install
   ```
3. **Start the development server**
   ```
   npm run dev
   ```
4. **Build for production**
   ```
   npm run build
   ```
## 📈 Technical Implementation Notes

This project demonstrates several advanced frontend concepts:

*   **State Management**: Utilizing React `useState` to drive theme toggling and chart views.
*   **Data Aggregation**: Custom logic using JavaScript `Set` to filter unique "Active Days" from GitHub's timestamps.
*   **Responsive Design**: Mobile-first approach using Tailwind's grid and flexbox systems.

## 📄 License

This project is open-source and available under the MIT License.

---

**Developed by Bhumika Gupta**
*   B.Tech IT '28 @ NIT Jalandhar
