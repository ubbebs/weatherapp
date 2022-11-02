import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../../utils/fetcher';

function Search() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const inputRef = useRef<HTMLInputElement>(null!);

  const { refetch } = useQuery(
    ['cities'],
    () => fetchCities(inputRef.current.value),
    { enabled: false },
  );

  return (
    <div className="flex gap-[4px] pl-4 pr-4 rounded-xl bg-black/20 shadow-md text-gray-100  backdrop-blur-xl lg:max-w-[400px]">
      <input
        placeholder="Type here city name"
        ref={inputRef}
        className="flex-auto w-[0px] bg-transparent placeholder:text-gray-100 focus:outline-none"
        alt="Enter here the name of the city where you want to check the weather"
      />
      <button onClick={() => refetch()} className="h-[40px]" type="submit">Search</button>
    </div>
  );
}

export { Search };
