import { TailSpin } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="absolute w-screen h-screen bg-black/30 hidden items-center justify-center" id="Loader" role="Loader">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="justify-center items-middle"
        // eslint-disable-next-line react/jsx-boolean-value
        visible={true}
      />
    </div>
  );
}

export { Loader };
