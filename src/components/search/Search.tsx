import { useState } from 'react';
import { useFetchCities } from '../../utils/fetcher';

function Search() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [city, setCity] = useState('');
  const {
    refetch,
  } = useFetchCities(city);

  return (
    <div className="flex gap-[4px] pl-4 pr-4 rounded-xl bg-black/20 shadow-md text-gray-100  backdrop-blur-xl lg:max-w-[400px]">
      <input
        placeholder="Type here city name"
        onChange={(e) => setCity(e.target.value)}
        className="flex-auto w-[0px] bg-transparent placeholder:text-gray-100 focus:outline-none"
        alt="Enter here the name of the city where you want to check the weather"
      />
      <button onClick={() => refetch()} className="h-[40px]" type="submit">Search</button>
    </div>
  );
}

export { Search };
