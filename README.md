# Next.js Weather Forecast Application

## Description

A weather forecast application built using Next.js, providing real-time weather updates and forecasts for various locations.

## Features

- Real-time weather updates
- 7-day weather forecast
- Search functionality for different locations
- Responsive design
- Integration with weather API (OpenWeatherMap)

## Tech Stack

- **Frontend:** Next.js, React
- **Styling:** SCSS
- **API:** OpenWeatherMap API
- **Deployment:** Vercel

## Installation

### Prerequisites

- Node.js (version 14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-weather-forecast.git
   
2. Navigate to the project directory:
   cd nextjs-weather-forecast
   
4. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install

## Usage

### Development
To start the development server, run:

  ```bash
   npm run dev
   # or
   yarn dev
```
Open http://localhost:3000 to view it in the browser.

### Production
To build the project for production, run:

 ```bash
npm run build
# or
yarn build
```
Then start the server:

 ```bash
npm start
# or
yarn start
```
### Configuration

You need to set up environment variables for the weather API key.

Create a .env.local file in the root of your project.

Add your API key:

 ```bash
NEXT_PUBLIC_API_BASE_URL='https://api.openweathermap.org/data/2.5/'
NEXT_PUBLIC_API_KEY=your_api_key_here

