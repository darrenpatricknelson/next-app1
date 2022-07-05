import Header from '../components/Header.jsx';

export default () => {
  return (
    <div>
      <Header name="contact" />
      <div className="container">
        <h1>Contact information</h1>
        <div className="contactInfo">
          <ul>
            <li>Phone number: 071-482-4330</li>
            <li>
              Email:{' '}
              <a href="mailto:Nelson.darrenp10.dnp@gmail.com" target="blank">
                Nelson.darrenp10.dnp@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/darrenpatricknelson/"
                target="blank"
              >
                https://www.linkedin.com/in/darrenpatricknelson/
              </a>
            </li>
            <li>
              Github:{' '}
              <a href="https://github.com/darrenpatricknelson" target="blank">
                https://github.com/darrenpatricknelson
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          h1 {
            text-align: center;
            text-decoration: underline;
          }

          .contactInfo {
            width: 600px;
            margin: auto;
          }

          ul {
            list-style-type: none;
          }

          a {
            text-decoration: none;
            color: black;
          }
          a:hover {
            color: white;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};
