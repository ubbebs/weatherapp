/* eslint-disable react/destructuring-assignment */
import { WeatherCurrent } from '../weather-current/WeatherCurrent';
import { WeatherDetails } from '../weather-details/WeatherDetails';
import { WeatherNext } from '../weather-next/WeatherNext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Weather(props: any) {
  return (
    props.data && (
      props.data.length > 0
        ? (
          <>
            <WeatherCurrent latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
            <div className="flex flex-col gap-5 lg:bg-black/30 lg:pt-[76px] lg:p-8 lg:absolute lg:top-0 lg:right-0 lg:h-screen lg:w-[400px]">
              <WeatherDetails latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
              <p className="text-white text-shadow font-semibold lg:pl-4">Next days:</p>
              <WeatherNext latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
            </div>
          </>
        ) : (<p className="text-red-500 ml-[40px] font-semibold">City not found</p>)
    )
  );
}

export { Weather };
