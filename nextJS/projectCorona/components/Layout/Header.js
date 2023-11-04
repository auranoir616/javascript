import Head from "next/Head"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from "next/router"

const Header = (props) =>{
    const router = useRouter()
    return(
        <>
        <Head><title>Website pantau Corona</title></Head>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <nav className="main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/">
                        <img src="public\gambar1.jpg" style={{width:"100px"}} alt=""/>
                    </a>
                </li>
            </ul>
       
        <div className="container" style={{display:"flex", flexDirection:"row",justifyContent:"end",marginRight:"25px"}}>
            <div className="ml-auto hidden-sm-down">

          <Nav variant="pills" defaultActiveKey={router.pathname==="/" ? "link-0" : "link-1"}>
        <Nav.Link eventKey="link-0" href="/" >Global</Nav.Link>
        <Nav.Link eventKey="link-1" href="/indonesia" >indonesia</Nav.Link>
          </Nav>
          </div>
        </div>
        </nav>
      
      </Container>
    </Navbar>

        </>
    )
}

export default Header