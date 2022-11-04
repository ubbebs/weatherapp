/* eslint-disable react/destructuring-assignment */
import { Search } from '../search/Search';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header() {
  return (
    <header className="flex flex-col pl-4 pr-4 mt-4" role="header">
      <Search />
    </header>
  );
}

export { Header };
