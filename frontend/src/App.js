import React, { useState, useEffect } from 'react';
import './App.css';  // Import CSS file for styling

const App = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (Object.keys(weatherData).length > 0) {
            const firstDate = Object.keys(weatherData)[0];
            setSelectedDate(firstDate);
        }
    }, [weatherData]);

    const API_KEY = '7ab913b9dd0a1ad7ceffa0e402f0e81b';

    const getWindDirection = (deg) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const idx = Math.floor((deg + 22.5) / 45) % 8;
        return directions[idx];
    };

    const preprocessData = (forecast) => {
        const data = forecast.list || [];
        if (!data.length) return {};
        const dailyData = {};
        for (const entry of data) {
            const [date, time] = entry.dt_txt.split(' ');
            const weatherData = {
                time,
                weather: entry.weather[0].main,
                temp: entry.main.temp,
                feels_like: entry.main.feels_like,
                humidity: entry.main.humidity,
                wind_s: entry.wind.speed,
                wind_d: getWindDirection(entry.wind.deg),
            };
            if (!dailyData[date]) dailyData[date] = [];
            dailyData[date].push(weatherData);
        }
        return dailyData;
    };

    const fetchWeather = async () => {
        if (!city.trim()) return alert("Please enter a city name.");
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=imperial&appid=${API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                alert('City not found. Please check the name and try again.');
                return;
            }
            const raw = await response.json();
            const processed = preprocessData(raw);
            setWeatherData(processed);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    };


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getWeatherDetailsForDay = (forecasts) => {
        let weatherAtNoon = forecasts.find(f => f.time === '12:00:00');
        if (!weatherAtNoon) {
            weatherAtNoon = forecasts[forecasts.length - 1];
        }
        const weatherIcon = getWeatherIcon(weatherAtNoon.weather);
        return {
            temp: weatherAtNoon.temp,
            weather: weatherAtNoon.weather,
            icon: weatherIcon
        };
    };

    const getWeatherIcon = (weather) => {
        const w = weather.toLowerCase();
        if (w.includes('clear')) return '☀️';
        if (w.includes('cloud')) return '☁️';
        if (w.includes('rain')) return '🌧️';
        if (w.includes('drizzle')) return '🌦️';
        if (w.includes('snow')) return '❄️';
        if (w.includes('thunder')) return '⛈️';
        if (w.includes('mist') || w.includes('fog') || w.includes('haze')) return '🌫️';
        return '🌡️';
    };

    const formatDate = (dateString) => {
        const [, month, day] = dateString.split('-');
        return `${month}/${day}`;
    };

    const getDayOfWeek = (dateString) => {
        const date = new Date(`${dateString}T00:00:00`);
        return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
    };

    return (
        <div className="app">
            <div className="container">
                {/* Info Button */}
                <button className="info-button" onClick={toggleDropdown}>
                    Info
                </button>
                {dropdownVisible && (
                    <div className="dropdown">
                        <h3>About the Application</h3>
                        <p>
                            This is a real-time climate and weather forecast dashboard developed by **Mohanraj K**. 
                            It integrates with the OpenWeatherMap API to retrieve temperature, humidity, wind patterns, and a 5-day weather breakdown.
                        </p>
                        <p style={{ marginTop: '8px', fontSize: '0.8rem', color: '#9CA3AF' }}>
                            Built using React for the frontend and Flask for the backend API layer.
                        </p>
                    </div>
                )}

                {/* Header Section */}
                <header className="top">
                    <h1>Mohan Weather Application</h1>
                </header>

                {/* Location Input Section */}
                <div className="location">
                    <input 
                        type="text" 
                        value={city} 
                        onChange={e => setCity(e.target.value)} 
                        onKeyDown={e => e.key === 'Enter' && fetchWeather()}
                        placeholder="Enter City" 
                    />
                    <button onClick={fetchWeather}>Get Weather</button>
                </div>

                {/* Weather Display Section */}
                <div className="middle">
                    {weatherData[selectedDate] && (
                        <div className="weather-display">
                            <div className="current-weather">
                                <h2>{getDayOfWeek(selectedDate)} {formatDate(selectedDate)}</h2>
                                <div className="current-temp">
                                    {getWeatherDetailsForDay(weatherData[selectedDate]).temp}°F
                                </div>
                                <div className="current-temp">
                                    {getWeatherDetailsForDay(weatherData[selectedDate]).weather}
                                    {getWeatherDetailsForDay(weatherData[selectedDate]).icon}
                                </div>
                            </div>

                            <div className="hourly-forecast-container">
                                <h3 className="hourly-title">Hourly Breakdown</h3>
                                <div className="hourly-cards-grid">
                                    {weatherData[selectedDate].map((forecast, index) => (
                                        <div key={index} className="hourly-card">
                                            <div className="hourly-time">{forecast.time.substring(0, 5)}</div>
                                            <div className="hourly-icon">{getWeatherIcon(forecast.weather)}</div>
                                            <div className="hourly-temp">{forecast.temp}°F</div>
                                            <div className="hourly-details">
                                                <div className="hourly-detail-item">
                                                    <span className="detail-label">Feels:</span>
                                                    <span className="detail-val">{forecast.feels_like}°F</span>
                                                </div>
                                                <div className="hourly-detail-item">
                                                    <span className="detail-label">Humidity:</span>
                                                    <span className="detail-val">{forecast.humidity}%</span>
                                                </div>
                                                <div className="hourly-detail-item">
                                                    <span className="detail-label">Wind:</span>
                                                    <span className="detail-val">{forecast.wind_s} mph {forecast.wind_d}</span>
                                                </div>
                                            </div>
                                            <div className="hourly-desc">{forecast.weather}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Date Navigation Section */}
                <div className="bottom">
                    {Object.keys(weatherData).map((date) => {
                        const forecasts = weatherData[date];
                        const { temp, icon } = getWeatherDetailsForDay(forecasts);
                        return (
                            <button 
                                key={date} 
                                className="date-button" 
                                onClick={() => handleDateChange(date)}
                            >
                                {getDayOfWeek(date)} {formatDate(date)}
                                <br />
                                {temp}°F {icon}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
