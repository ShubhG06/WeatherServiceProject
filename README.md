# Weather Api

## Technology and libraries

- Typescript
- Node js to build api
- Axios for AJAX Calls
- Express library to manage request and response pipeline
- CORS to allow cross domain applications

## Features

- Node JS api return the current weather report based on longitude and latitude
- Api Endpoint to get the weather report (http://localhost:8081/api/weather/getWeatherReport/:latitude/:longitude)

## Output response

```sh
Api-Ednpoint- http://localhost:8081/api/weather/getWeatherReport/{latitude}/{longitude}
Query-params- latitude, longitude
Method-Type: GET
Response: {
    "sunrise": "",
    "sunset": "",
    "temp": "",
    "humidity": "",
    "clouds": "",
    "wind_speed": "",
    "weather": [
        {
            "id": "",
            "main": "",
            "description": "",
            "icon": ""
        }
    ]
}
```

## Design

- Node JS api built on generic approach and followed the SOLID Priniciple

## Server Installation

Weather API requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server. Server will start running on (http://localhost:8081/)

```sh
cd Server
npm install
npm start
```

## Installation

First Tab:

```sh
cd UI
```

Second Tab:

```sh
npm install
```

Third:

```sh
npm start
```
