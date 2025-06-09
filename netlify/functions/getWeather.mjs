import fetch from 'node-fetch';

export async function handler(event) {
  const { city } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;
  const OPEN_WEATHER_URL = process.env.OPEN_WEATHER_URL;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "City is required" }),
    };
  }

  const url = OPEN_WEATHER_URL
    .replace("{CITY_NAME}", encodeURIComponent(city))
    .replace("{API_KEY}", API_KEY);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "City not found" }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
}
