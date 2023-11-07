import Head from "next/Head";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Website pantau Corona</title>
      </Head>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">CORONA</Navbar.Brand>
          <div className="ml-auto hidden-sm-down">
            <Nav
              variant="pills"
              defaultActiveKey={router.pathname === "/" ? "link-0" : "link-1"}
            >
              <Nav.Link eventKey="link-0" href="/">
                Global
              </Nav.Link>
              <Nav.Link eventKey="link-1" href="/indonesia">
                indonesia
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
