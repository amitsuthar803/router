import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Welcome to Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam
        amet quidem doloribus voluptatibus eum? Maxime, quas accusantium
        commodi, inventore quidem eius, autem voluptatibus sapiente ipsum nihil
        error explicabo enim.
      </p>

      <Link to="dev">Programming</Link>
      <Link to="design">Designing</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default Contact;
