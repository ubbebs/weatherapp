/* eslint-disable react/no-array-index-key */
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useFetchNextWeather } from '../../utils/fetcher';
import { closeLoader, loader } from '../../utils/style-dependency';

type WeatherNextProps = {
  latitude: number,
  longitude: number,
};

type PropsMapElem = {
  dt: number,
  main: {
    temp: number,
    pressure: number,
  },
  weather: {
    main: number,
  }[],
};

function WeatherNext(props: WeatherNextProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const { latitude, longitude } = props;
  const { data, refetch, isFetching } = useFetchNextWeather(latitude, longitude);

  useEffect(() => {
    refetch();
  }, [props, refetch]);

  const toggleDetails = (i:number) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className="flex flex-col gap-2">
      {isFetching ? loader() : closeLoader()}
      {data ? (
        data.list.map((elem: PropsMapElem, index: number) => {
          if (index % 8 === 0) {
            return (
              <div key={index} className="bg-black/20 text-gray-100 backdrop-blur-xl shadow-xl pl-4 pr-4 rounded-xl lg:bg-transparent">
                <div className="flex flex-row text-shadow justify-between font-semibold">
                  <button onClick={() => toggleDetails(index)} className="flex-1 text-start" type="button">{moment.unix(elem.dt).format('LL')}</button>
                  <p>
                    {Math.floor(elem.main.temp - 273.15)}
                    °
                  </p>
                </div>
                <div className={`flex justify-between h-[24px] max-h-[24px] font-thin ${selected === index ? 'details-show' : 'details-hide'}`}>
                  <p>
                    Weather:
                    {elem.weather[0].main}
                  </p>
                  <p>
                    Pressure:
                    {elem.main.pressure}
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        null
      )}
    </div>
  );
}

export { WeatherNext };
