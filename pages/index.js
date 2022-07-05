import react from 'react';
import Link from 'next/link';
import Header from '../components/Header.jsx';

export default () => {
  return (
    <div>
      {/* passing a prop to say which particular header (page) is currently
      active. I will use that prop to add a bit more styling to the active
      pages name */}
      <Header name="home" />
      <div className="container">
        <h2>Welcome to my developer portfolio. </h2>
        <h1>Hi, My name is Darren Nelson</h1>
        <p>
          Head over to my my{' '}
          <Link href="/about">
            <a>about page</a>
          </Link>{' '}
          to find out more about me or my{' '}
          <Link href="/projects">
            <a>project page</a>
          </Link>{' '}
          to see my work!
        </p>
        <p>
          Lastly, if you'd like to get in touch, check out my{' '}
          <Link href="/contact">
            <a>contact page</a>
          </Link>{' '}
          for more details.
        </p>
      </div>
      <style jsx>
        {`
          h2 {
            text-align: center;
          }
          a {
            color: black;
          }
          a:hover {
            color: white;
          }
        `}
      </style>
    </div>
  );
};
