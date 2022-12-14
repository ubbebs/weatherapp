/* eslint-disable react/destructuring-assignment */
import { useEffect } from 'react';
import moment from 'moment';
import { useFetchCurrentWeather } from '../../utils/fetcher';
import { closeLoader, loader, styleDependency } from '../../utils/style-dependency';

type WeatherCurrentProps = {
  latitude: number,
  longitude: number,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function WeatherCurrent(props: WeatherCurrentProps) {
  const { latitude, longitude } = props;
  const { data, refetch, isFetching } = useFetchCurrentWeather(latitude, longitude);

  useEffect(() => {
    refetch();
  }, [props, refetch]);

  if (data) {
    styleDependency(data.sys.sunrise, data.sys.sunset, data.dt, data.weather[0].main);
  }

  return (
    data && (
      <>
        {isFetching ? loader() : closeLoader()}
        <div className="flex flex-col text-white text-shadow font-semibold lg:justify-end lg:m-8">
          <div className="flex flex-col lg:flex-row-reverse lg:justify-end lg:gap-5">
            <div className="flex flex-row justify-between items-center lg:flex-col lg:justify-end lg:items-start lg:mb-2">
              <h1 className="text-2xl lg:text-5xl lg:leading-normal">{data.name}</h1>
              <p>{moment.unix(data.dt + data.timezone).utc().format('LLL')}</p>
              <p className="hidden lg:block">
                Weather:
                {' '}
                {data.weather[0].main}
              </p>
            </div>
            <p className="text-9xl lg:text-[12rem]">
              {Math.floor(data.main.temp - 273.15)}
              °
            </p>
          </div>
          <p className="block lg:hidden">
            Weather:
            {' '}
            {data.weather[0].main}
          </p>
        </div>
      </>
    )
  );
}

export { WeatherCurrent };
