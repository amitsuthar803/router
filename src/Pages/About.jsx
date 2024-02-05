import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="/user/amit">Amit</Link>
      <Link to="/user/lochan">Lochan</Link>
    </div>
  );
}

export default About;
