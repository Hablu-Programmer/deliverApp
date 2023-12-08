import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function MyNav() {
  return (
    <div className="NavbarAreaS">
      <Navbar >
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="ms-auto">
            <Nav.Link className="text-light">
              <Link to={"/"} className="text-light">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light">
              <Link to={"/Store"} className="text-light">
                Store
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light">
              <Link to={"/dashboard"} className="text-light">
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link href="/login" className="text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
