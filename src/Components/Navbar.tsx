import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div>
        <Link to={"/"}>helo</Link>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/books"}>books</Link>
      </div>
    </>
  );
}
