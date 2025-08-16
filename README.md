# Weather App

A modern weather application built with JavaScript, HTML, CSS, and Webpack that provides current weather conditions and 7-day forecasts for any city worldwide.

## Features

- **Current Weather Display**: Shows temperature, weather conditions, and location
- **7-Day Forecast**: Visual forecast cards with daily weather information
- **Weather Icons**: Dynamic SVG icons that change based on weather conditions
- **Smart Location Parsing**: Handles both domestic (City, State) and international (City, Country) locations
- **Responsive Design**: Clean, modern interface that works on various screen sizes
- **Secure API Integration**: Uses environment variables to protect API keys

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Webpack 5 with dev server
- **Weather API**: Visual Crossing Weather API

## Getting Started

- You can find the site [here](https://chase-the-dream.github.io/weather-app/) or follow the following instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Visual Crossing Weather API key ([Get one here](https://www.visualcrossing.com/weather-api))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chase-the-dream/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `keys.env` file in the root directory and add your API key:
   ```
   WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npx webpack serve
   ```

5. Open your browser and navigate to `http://localhost:8080`

## Usage

1. Enter a city name in the search bar (e.g., "London" or "New York, NY")
2. Click the search button or press Enter
3. View current weather conditions and 7-day forecast
4. The app will display the resolved location to confirm which city was found

## Project Structure

```
weather-app/
├── src/
│   ├── images/          # Weather SVG icons
│   ├── index.js         # Main JavaScript file
│   ├── styles.css       # CSS styles
│   └── template.html    # HTML template
├── webpack.config.js    # Webpack configuration
├── keys.env            # Environment variables (not tracked by git)
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## API Integration

This app uses the Visual Crossing Weather API to fetch:
- Current weather conditions
- 7-day weather forecasts
- Location resolution and timezone data

The API returns detailed weather information including temperature, conditions, humidity, and weather icons that are mapped to the app's custom SVG icons.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT Licence

## Acknowledgments

- Weather data provided by [Visual Crossing](https://www.visualcrossing.com/)
- Icons designed from Google for weather visualization
- Built with modern web development best practices
