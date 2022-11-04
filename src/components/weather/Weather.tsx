/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import { WeatherCurrent } from '../weather-current/WeatherCurrent';
import { WeatherDetails } from '../weather-details/WeatherDetails';
import { WeatherNext } from '../weather-next/WeatherNext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Weather(props: any) {
  return (
    props.data === undefined
      ? (
        <div className="w-full flex flex-col gap-5 lg:m-3 lg:mt-5 lg:pl-4 flex-auto justify-center">
          <h1 className="text-white text-shadow text-center font-semibold text-6xl lg:text-8xl translate-y-[-50px]">Weather Online</h1>
          <p className="text-white text-shadow text-center font-normal text-m translate-y-[-50px]">Looking for a weather forecast? Type the city name in input and check it.</p>
        </div>
      )
      : (props.data.length > 0
        ? (
          <>
            <WeatherCurrent latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
            <div className="flex flex-col gap-5 lg:bg-black/30 lg:pt-[76px] lg:p-8 lg:absolute lg:top-0 lg:right-0 lg:h-screen lg:w-[400px]">
              <WeatherDetails latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
              <p className="text-white text-shadow font-semibold lg:pl-4">Next days:</p>
              <WeatherNext latitude={props.data[0].latitude} longitude={props.data[0].longitude} />
            </div>
          </>
        )
        : (<p className="text-white ml-[40px] text-shadow font-semibold text-center lg:text-left lg:m-4 lg:ml-[40px]">City not found</p>)
      )
  );
}

export { Weather };
