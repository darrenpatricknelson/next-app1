import Header from '../components/Header.jsx';

export default () => {
  return (
    <div>
      <Header name="projects" />
      <div className="container">
        <div className="leftBox">
          <p>
            I built a memory game using react and react hooks. This project was
            deployed using Heroku. The app is easy to use and the game is fun
            for all ages. Test your memory with my React memory game! Try and
            beat the recommended score limit.
          </p>
          <ul>
            <li>
              Link:{' '}
              <a
                href="https://react-memory-game-heroku.herokuapp.com/"
                target="blank"
              >
                https://react-memory-game-heroku.herokuapp.com/
              </a>
            </li>
          </ul>
        </div>
        <div className="rightBox">
          <p>
            This is a simple app using the iTunes api. The frontend is built
            with react while the backend is built with express. The app is
            deployed using Heroku. Search for your favorite movies, books, music
            and more!
          </p>
          <ul>
            <li>
              Link:{' '}
              <a
                href="https://sheltered-scrubland-32892.herokuapp.com/"
                target="blank"
              >
                https://sheltered-scrubland-32892.herokuapp.com/
              </a>
            </li>
          </ul>
        </div>
        <div className="leftBox">
          <p>
            This particular project is an unfinished website built as a task for
            my HyperionDev course but also for a client. The website is a
            clothing/ bikini store called Slowhale Store. This particular build
            is version 2, however this version looks and feels alot better than
            version 1. Both websites were built using HTML, CSS and vanilla
            Javascript. This was still very early on in my developer days. What
            a time!
          </p>
          <ul>
            <li>
              Version 2:{' '}
              <a
                href="https://darrenpatricknelson.github.io/slowhalestoreV2/"
                target="blank"
              >
                https://darrenpatricknelson.github.io/slowhalestoreV2/
              </a>
            </li>
            <li>
              Version 1:{' '}
              <a
                href="https://darrenpatricknelson.github.io/slowhaleStore/"
                target="blank"
              >
                https://darrenpatricknelson.github.io/slowhaleStore/
              </a>
            </li>
          </ul>
          <p>
            Version 1 looks more business'ie while version 2 is more suited to a
            smaller business. It feels more homey and is more user-friendly.
            Version 2 also has alot more functionality since I've spent more
            'task' time on it. Both are good websites in my opinion, they both
            just need a bit more TLC.
          </p>
        </div>
        <div className="githubLink">
          <h4>
            For more of my projects, check out my{' '}
            <a href="https://github.com/darrenpatricknelson">
              Github repositories
            </a>
          </h4>
        </div>
      </div>
      <style jsx>
        {`
          .leftBox {
            width: 600px;
            clear: right;
          }
          .rightBox {
            display: block;
            width: 600px;
            float: right;
          }

          .leftBox,
          .rightBox {
            margin: 5px;
            padding: 10px;
          }
          .githubLink {
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
