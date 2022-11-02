/* eslint-disable react/destructuring-assignment */
import { Search } from '../search/Search';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header(props: any) {
  return (
    <header className={`flex flex-col pl-4 pr-4 ${!props.data ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] m-0' : 'm-3 mt-6'}`} role="header">
      {!props.data ? (
        <>
          <h1 className="text-center">Weather Online</h1>
          <p className="text-center">No idea for first page... UI failed</p>
        </>
      ) : null}
      <Search />
    </header>
  );
}

export { Header };
