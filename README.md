# Weather Dashboard

A clean, responsive weather application built with vanilla JavaScript and the OpenWeatherMap API. No frameworks, no libraries — just the fundamentals done right.

**🔗 Live Demo:** [Add your Netlify URL here after deployment]

## Features

- 🔍 Search any city worldwide
- 🌡️ Current temperature, feels-like, humidity, wind speed, and pressure
- 🖼️ Dynamic weather icons from OpenWeatherMap
- ⚠️ Graceful error handling (invalid city, network errors, invalid API key)
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (ARIA live regions, semantic HTML, keyboard-friendly)
- 🔐 API key stored separately (never committed to Git)

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, CSS Grid, Flexbox, media queries
- **Vanilla JavaScript** — Async/await, fetch API, error handling
- **OpenWeatherMap API** — Real-time weather data
- **Netlify** — Hosting and deployment

## How It Works

1. User enters a city name
2. JavaScript sends an async request to the OpenWeatherMap API
3. Response is parsed and displayed dynamically
4. Errors are caught and shown as user-friendly messages

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/huzaifa-mahmood-dev/weather-dashboard.git
   cd weather-dashboard
