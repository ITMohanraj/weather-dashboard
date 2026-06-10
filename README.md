<div align="center">

# 🌤️ Climate Weather Prediction Web App

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Weather%20API-0096FF?style=for-the-badge&logo=cloud&logoColor=white"/>

> **A modern, responsive weather prediction web application providing real-time climate data, forecasts, and ML-based predictions.**

</div>

---

## 📌 Project Overview

This full-stack web application fetches **real-time weather data** from weather APIs and displays temperature, humidity, wind speed, UV index, and **7-day forecasts** with a beautiful, responsive UI. Integrated with **machine learning predictions** for climate trend analysis.

---

## ✨ Features

- 🌍 **Real-time Weather Data** for any city worldwide
- 📅 **7-Day Forecast** with hourly breakdown
- 🌡️ **Temperature, Humidity, Wind Speed** metrics
- 🔍 **City Search** with auto-suggestions
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🎨 **Dynamic Backgrounds** that change with weather
- ⚡ **Fast Loading** with optimized API calls

---

## 🏗️ System Architecture

```
User Input (City Name)
        │
        ▼
┌───────────────┐
│  Frontend JS  │ ← API calls & UI rendering
│  HTML/CSS     │
└───────────────┘
        │
        ▼
┌───────────────┐
│  Weather API  │ ← OpenWeatherMap / WeatherAPI
│  (REST)       │
└───────────────┘
        │
        ▼
┌───────────────┐
│  Data Display │ ← Charts, Cards, Forecast
└───────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure & Semantic Markup |
| CSS3 | Styling & Animations |
| JavaScript (ES6+) | Logic & API Integration |
| OpenWeatherMap API | Weather Data Source |
| Chart.js | Data Visualization |

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ITMohanraj/Weather-Application.git
cd Weather-Application

# Get free API key from OpenWeatherMap
# https://openweathermap.org/api

# Add your API key in config.js
const API_KEY = "your_api_key_here";

# Open in browser
open index.html
```

---

## 📁 Project Structure

```
Weather-Application/
├── index.html             # Main HTML file
├── style.css              # Stylesheet
├── script.js              # Main JavaScript logic
├── config.js              # API configuration
├── assets/
│   ├── icons/             # Weather icons
│   └── images/            # Background images
└── README.md
```

---

## 🔮 Future Enhancements

- [ ] Machine Learning weather prediction model
- [ ] Air quality index (AQI) integration
- [ ] Weather alerts & push notifications
- [ ] Historical weather data charts
- [ ] Dark/Light mode toggle

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ by [Mohanraj Kulanthaivel](https://github.com/ITMohanraj)**

⭐ Star this repo if you find it helpful!

</div>