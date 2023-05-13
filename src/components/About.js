import { NavLink } from "react-router-dom";

const About = () => {
  return (
    /*this code will provide the error that shows the 404 page once you click HOME link on About page*/
    <div className="about">
      <div className="home-list">
        <ul className="fix-list">
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="text-lorem">
        <h1 className="about-text">About Page</h1>
        <p className="about-para">
          Welcome to my page! This is a simple but fun project that showcases
          how to use APIs in web development. It uses the Random User Generator
          API to fetch random user data and displays it on the webpage using
          JavaScript. By fetching data from an external API, this project
          demonstrates how web developers can integrate external data into their
          websites or applications. It also highlights the use of JavaScript to
          manipulate JSON data, which is a common format used by APIs to
          transfer data over the internet. In addition to being a great learning
          resource for those interested in web development, this project is also
          a lot of fun to play around with! You can refresh the page to fetch
          new users, or experiment with the JavaScript code to see how it works.
          So whether you're a seasoned web developer or just starting out, this
          project is a great example of how APIs can be used in web development
          and a fun way to explore the possibilities of web development. Feel
          free to play around and see what you can create!
        </p>
      </div>
      <div className="footer">
        <ul className="footer-list">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Rules of Conduct</a>
          </li>
          <li>
            <a href="#">Advertise on Warzone Society</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
