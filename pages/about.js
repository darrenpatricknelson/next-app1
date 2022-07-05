import react from 'react';
import Header from '../components/Header.jsx';
import Link from 'next/link';

export default () => {
  return (
    <div>
      <Header name="about" />
      <div className="container">
        <div>
          <img src="/static/darren.jpg" alt="Image of me" className="idImage" />
        </div>
        <div>
          <h3>A little bit about me:</h3>
          <p>
            I am a Cape Town born and bred aspring developer. I was first
            introduced to coding in 2020 and have been practicing my trade ever
            since. I am visually adempt so I would definetly say frontend is
            more suited for me.
          </p>
          <p>
            I'm social, work well in a team, have good leadership skills and can
            work well under pressure. I have good time management skills and am
            able to produce top quality work.
          </p>
          <p>
            I am currently employed as a Junior Software support & QA Engineer
            at a company called Edge Education based in Westlake, Cape Town,
            South Africa.
          </p>
          <p>
            Some of my hobbies include soccer, surfing, hiking, music festivals
            and gaming to name a few. I love the outdoors but am definetly more
            of a home indoors person than anything else.
          </p>
          <p>
            I'm always willing to learn, always willing to grow not only as a
            developer but as a person.
          </p>
          <p>
            Head over to my{' '}
            <Link href="/projects">
              <a>projects page</a>
            </Link>{' '}
            to check out some of my projects or my{' '}
            <Link href="/contact">
              <a>contact page</a>
            </Link>{' '}
            to get in touch.
          </p>
          <h6>
            Kind regards <br />
            Mr DP Nelson
          </h6>
        </div>
      </div>
      <style jsx>{`
        .idImage {
          width: 300px;
          height: auto;
        }
        .container {
          display: grid;
          grid-template-columns: 350px 800px;
        }
        a {
          color: black;
        }
        a:hover {
          color: white;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
