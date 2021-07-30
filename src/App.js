import "./App.css";

import CustomerForm from "./pages/CustomerForm";
import { NavbarHeader } from "./component/NavbarHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SideBarLink } from "./component/SideBarLink";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <NavbarHeader />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <SideBarLink />
          </Col>
          <Col xs={10}>
            <CustomerForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
