import { geoApiOptions, GEO_API_URL } from './api-geodb';
import { OWApiKey, OW_API_URL } from './api-openweather';

const fetchCities = async (input: string) => {
  const response = await fetch(`${GEO_API_URL}/cities?&types=CITY&limit=1&sort=-population&namePrefix=${input.length > 0 ? input : 'Warsaw'}`, geoApiOptions);
  const cities = await response.json();
  return cities.data;
};

const fetchCurrentWeather = async (lat: number, lon: number) => {
  const response = await fetch(`${OW_API_URL}weather?lat=${lat}&lon=${lon}&${OWApiKey}`);
  const current = await response.json();
  return current;
};

const fetchNextWeather = async (lat: number, lon: number) => {
  const response = await fetch(`${OW_API_URL}forecast?lat=${lat}&lon=${lon}&${OWApiKey}`);
  const next = await response.json();
  return next;
};

export { fetchCities, fetchCurrentWeather, fetchNextWeather };
