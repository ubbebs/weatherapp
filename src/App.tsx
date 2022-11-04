import { useFetchCities } from './utils/fetcher';

import { Header } from './components/header/Header';
import { Weather } from './components/weather/Weather';
import { Loader } from './components/loader/Loader';

function App() {
  const { data } = useFetchCities('');

  return (
    <>
      <Header />
      <main className="flex flex-auto flex-col lg:flex-row lg:justify-between pl-4 pr-4 m-3 mt-5 gap-5 lg:p-0 lg:m-0" role="mainpage">
        <Weather data={data} />
      </main>
      <Loader />
    </>
  );
}

export { App };
