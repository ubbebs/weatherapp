import { useQuery } from '@tanstack/react-query';
import { geoApiOptions, GEO_API_URL } from './api-geodb';
import { OWApiKey, OW_API_URL } from './api-openweather';

const fetchCities = async (input: string) => {
  const response = await fetch(`${GEO_API_URL}/cities?&types=CITY&limit=1&sort=-population&namePrefix=${input}`, geoApiOptions);
  const cities = await response.json();
  return cities.data;
};

const useFetchCities = (city: string) => {
  const {
    data, refetch, isFetching,
  } = useQuery(['cities'], () => fetchCities(city), { enabled: false });
  return {
    data, refetch, isFetching,
  };
};

const fetchCurrentWeather = async (lat: number, lon: number) => {
  const response = await fetch(`${OW_API_URL}weather?lat=${lat}&lon=${lon}&${OWApiKey}`);
  const current = await response.json();
  return current;
};

const useFetchCurrentWeather = (lat: number, lon: number) => {
  const {
    data, refetch, isFetching,
  } = useQuery(['weathercurrent'], () => fetchCurrentWeather(lat, lon), { enabled: false });
  return {
    data, refetch, isFetching,
  };
};

const fetchNextWeather = async (lat: number, lon: number) => {
  const response = await fetch(`${OW_API_URL}forecast?lat=${lat}&lon=${lon}&${OWApiKey}`);
  const next = await response.json();
  return next;
};

const useFetchNextWeather = (lat: number, lon: number) => {
  const {
    data, refetch, isFetching,
  } = useQuery(['weathernext'], () => fetchNextWeather(lat, lon), { enabled: false });
  return {
    data, refetch, isFetching,
  };
};

export {
  useFetchCities, useFetchCurrentWeather, useFetchNextWeather,
};
