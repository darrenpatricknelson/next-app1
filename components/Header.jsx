import react from 'react';
import Link from 'next/link';

export default (props) => {
  // passing a prop to say which particular header (page) is currently active
  // I will use that prop to add a bit more styling to the active pages name
  const active = props.name;
  return (
    <div className="header">
      <div className="navBar">
        <Link href="/">
          <a className="home">Home</a>
        </Link>
        <Link href="/about">
          <a className="about">About us</a>
        </Link>
        <Link href="/projects">
          <a className="projects">Projects</a>
        </Link>
        <Link href="/contact">
          <a className="contact">Contact me</a>
        </Link>
      </div>

      <style jsx>
        {`
          .navBar {
            width: 800px;
            margin: 20px auto;
            display: flex;
            justify-content: space-around;
          }
          a {
            text-align center;
            font-size: 20px;
            text-decoration: none;
            color: black
          }
          a:hover {
            color: white;
            text-decoration: underline;
          }
          {/* active page getting a personal style touch to show the user what page they're on */}
        .${active} {
            text-decoration: underline;
            transform: scaleY(1.1);
            font-weight: bold;

        }
        `}
      </style>
      <style global jsx>
        {`
          * {
            box-sizing: border-box;
            background-color: grey;
          }
          .container {
            width: 1200px;
            margin: auto;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
};
