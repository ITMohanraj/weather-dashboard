<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f4c81,100:1a9fd4&height=150&section=header&text=Weather%20Dashboard&fontSize=36&fontColor=ffffff&fontAlignY=40"/>

# 🌦️ Weather Dashboard
### Real-Time Climate & Forecast Web Application

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap_API-EB6E4B?style=for-the-badge&logo=cloud&logoColor=white)](https://openweathermap.org/api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **A modern, responsive weather dashboard that fetches live data from OpenWeatherMap API — showing current conditions, hourly trends, and a 5-day forecast for any city worldwide.**

🌐 **[Live Demo](#)** &nbsp;|&nbsp; 📸 **[Screenshots](#screenshots)**

</div>

---

## 📌 Project Overview

Built with **vanilla JavaScript** and the **OpenWeatherMap REST API**, this weather dashboard provides a clean, intuitive interface for real-time weather data. Demonstrates strong API integration skills, asynchronous JavaScript, and responsive CSS design — without any framework dependencies.

---

## ✨ Features

| Feature | Description |
|---------|------------|
| 🌍 Global Search | Fetch weather for any city worldwide |
| 🌡️ Current Conditions | Temperature, humidity, wind speed, UV index |
| 📅 5-Day Forecast | Daily weather forecast with icons |
| ⏰ Hourly Breakdown | Hour-by-hour temperature trends |
| 🎨 Dynamic UI | Background changes based on weather condition |
| 📱 Responsive Design | Mobile, tablet, and desktop optimized |
| ⚡ Fast Loading | Optimized API calls with error handling |

---

## 🏗️ Architecture

```
User Input (City Name)
        │
        ▼
┌───────────────────┐
│  JavaScript       │ ← Async fetch + DOM manipulation
│  ES6+ (Vanilla)   │
└─────────┬─────────┘
          │  REST API Call
          ▼
┌───────────────────┐
│  OpenWeatherMap   │ ← Real-time weather data
│  Current Weather  │    5-day/3-hour forecast
│  Geocoding API    │    City coordinates
└─────────┬─────────┘
          │  JSON Response
          ▼
┌───────────────────┐
│  UI Rendering     │ ← Dynamic HTML/CSS updates
│  Weather Cards    │    Temperature charts
│  Forecast Grid    │    Animated icons
└───────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure |
| CSS3 (Flexbox/Grid) | Responsive layout & animations |
| JavaScript ES6+ | API calls, async/await, DOM manipulation |
| OpenWeatherMap API | Live weather data source |
| Font Awesome | Weather & UI icons |

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/ITMohanraj/weather-dashboard.git
cd weather-dashboard

# 2. Get a FREE API key
#    Visit: https://openweathermap.org/api
#    Sign up → API Keys → Copy your key

# 3. Add your API key
#    Open config.js and replace:
const API_KEY = "YOUR_API_KEY_HERE";

# 4. Open in browser
open index.html
# OR use Live Server in VS Code
```

---

## 📁 Project Structure

```
weather-dashboard/
├── index.html          # Main application page
├── style.css           # Responsive styles & animations
├── script.js           # API integration & DOM logic
├── config.js           # API key configuration
├── assets/
│   ├── icons/          # Custom weather icons
│   └── backgrounds/    # Dynamic weather backgrounds
└── README.md
```

---

## 🔮 Future Enhancements

- [ ] 📊 Historical weather charts (Chart.js)
- [ ] 🔔 Weather alerts & push notifications
- [ ] 🌫️ Air Quality Index (AQI) integration
- [ ] 🌙 Dark / Light mode toggle
- [ ] 📍 Auto-detect user location (Geolocation API)
- [ ] 💾 Favourite cities with localStorage

---

## 👨‍💻 Author

**Mohanraj Kulanthaivel**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohanraj-kulanthaivel)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/ITMohanraj)

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

<div align="center">
⭐ <b>Star this repository if it helped you!</b>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a9fd4,100:0f4c81&height=100&section=footer"/>
</div>