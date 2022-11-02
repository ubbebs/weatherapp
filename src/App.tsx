import { useQuery } from '@tanstack/react-query';
import { fetchCities } from './utils/fetcher';

import { Header } from './components/header/Header';
import { Weather } from './components/weather/Weather';

function App() {
  const { data } = useQuery(
    ['cities'],
    () => fetchCities(''),
    { enabled: false },
  );

  return (
    <>
      <Header data={data} />
      <main className="flex flex-auto flex-col lg:flex-row lg:justify-between pl-4 pr-4 m-3 mt-5 gap-5 lg:p-0 lg:m-0">
        <Weather data={data} />
      </main>
    </>
  );
}

export { App };
