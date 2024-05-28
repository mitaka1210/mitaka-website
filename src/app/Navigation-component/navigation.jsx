// components/Nav.js
import Link from 'next/link';
import './nav.scss';

const Navigation = () => {
  return (
    <header>
      <ul className='navigation'>
        <li>
          <Link href="/Home-page">Home</Link>
        </li>
        <li>
          <Link href="/About-page">About</Link>
        </li>
        <li>
          <Link href="/post/first">First Post</Link>
        </li>
        <li>
          {/*<Link href="/post/second">Second Post</Link>*/}
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
