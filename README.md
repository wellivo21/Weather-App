# Weather App

This project is a basic Weather App that fetches weather information from the Open Weather API. It was created as an exercise to practice making API calls and using Netlify Functions to securely handle sensitive information such as API keys.

## Features

- Search for the current weather by city name.
- Fetches data from the Open Weather API.
- Uses Netlify Functions as a backend proxy to hide sensitive API keys from the frontend.

## Purpose

The main goal of this project is to demonstrate:

- How to make API calls from a frontend application.
- How to use serverless functions (Netlify Functions) to keep sensitive information, like API keys, secure and out of the client-side code.

## How it works

1. The user enters a city name and requests the weather.
2. The frontend sends a request to a Netlify Function.
3. The Netlify Function fetches the weather data from the Open Weather API using a secure API key.
4. The weather data is returned to the frontend and displayed to the user.

## Project Structure

- `index.html` – Main HTML file for the app UI.
- `script.js` – Handles user input and displays weather data.
- `netlify/functions/getWeather.mjs` – Netlify Function that proxies requests to the Open Weather API.

## Setup

1. Clone the repository.
2. Deploy to Netlify or run locally with Netlify CLI.
