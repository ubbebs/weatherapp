import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { fetchCurrentWeather } from '../../utils/fetcher';

type WeatherDetailsProps = {
  latitude: number,
  longitude: number,
};

function WeatherDetails(props: WeatherDetailsProps) {
  const [selected, setSelected] = useState(false);
  const { latitude, longitude } = props;

  const { data } = useQuery(
    ['weathercurrent'],
    () => fetchCurrentWeather(latitude, longitude),
    { enabled: false },
  );

  return (
    data && (
    <div className="bg-black/20 pl-4 pr-4 rounded-xl text-shadow cursor-pointer text-white font-semibold lg:bg-transparent">
      <button onClick={() => setSelected((prev) => !prev)} type="button">{selected ? 'Hide details <' : 'Show details >'}</button>
      <div className={`flex flex-col justify-around h-[150px] font-light rocunded-xl max-h-[150px] ${selected ? 'details-show' : 'details-hide'}`}>
        <p>
          Clouds:
          {data.clouds.all}
          %
        </p>
        <p>
          Humidity:
          {data.main.humidity}
          %
        </p>
        <p>
          Pressure:
          {data.main.pressure}
          {' '}
          hPa
        </p>
        <p>
          Sunrise:
          {moment.unix(data.sys.sunrise + data.timezone).utc().format('H:M')}
        </p>
        <p>
          Sunset:
          {moment.unix(data.sys.sunset + data.timezone).utc().format('H:M')}
        </p>
      </div>
    </div>
    )
  );
}

export { WeatherDetails };
