import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/temperature">Temperature</Link>
      <Link to="/customize-image">Customize Image</Link>
      <Link to="/celebrities">Celebrities</Link>
    </nav>
  );
}
