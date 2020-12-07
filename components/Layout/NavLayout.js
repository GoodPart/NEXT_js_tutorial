import Link from 'next/link';

export default function NavLayout({ auth }) {
  return (
    <ul className="nav__list">
      {auth ? (
        <>
          <li className="nav__item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/post">
              <a>post</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/faq">
              <a>Logout</a>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="nav__item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/faq">
              <a>Login</a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
