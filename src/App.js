import "./App.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { FiInfo } from "react-icons/fi";
import { useState } from "react";
import FormGroup from "./components/FormGroup";
import FormGroupSwitch from "./components/FormGroupSwitch";

function App() {
  const [reactAppCommand, setReactAppCommand] = useState({
    appName: " ",
    removeReactDefaults: false,
    removeReactDefaultsCmd: [
      <span> && </span>,
      "unlink src/App.test.js",
      <span> && </span>,
      "unlink src/setupTests.js",
      <span> && </span>,
      "unlink src/reportWebVitals.js",
      <span> && </span>,
      "unlink src/logo.svg",
    ],
    createFileStructure: false,
    createFileStructureCmd: [
      <span> && </span>,
      "mkdir src/component src/util src/assets src/pages",
    ],
    includeReactRouter: false,
    includeReactRouterCmd: [<span> && </span>, "npm install react-router-dom"],
    bootstap: false,
    bootstapCmd: [<span> && </span>, "npm install react-bootstrap bootstrap"],
    mui: false,
    muiCmd: [
      <span> && </span>,
      "npm install @mui/material @emotion/react @emotion/styled",
    ],
    semanticUI: false,
    semanticUICmd: [
      <span> && </span>,
      "npm install semantic-ui-react semantic-ui-css",
    ],
    reactIcons: false,
    reactIconsCmd: [<span> && </span>, "npm install react-icons --save"],
  });



  return (
    <Container className="pt-5" fluid="true">
      <Row>
        <Col lg="1" className="bg-dark">
          Menu
        </Col>
        <Col lg="4">
          <Form className="border p-3">
            <Row>
              <h5 className="text-center mb-3">Basic info</h5>
              <FormGroup type="text" placeholder="React app name" onChange={(e) => {setReactAppCommand({...reactAppCommand, appName: e.target.value,})}} />
              <FormGroupSwitch label="Remove default React things" popupText="Remove App.test.js, setupTests.js, reportWebVitals.js, logo.svg" onChange={(e) => {setReactAppCommand({...reactAppCommand, removeReactDefaults: !reactAppCommand.removeReactDefaults })}} />
              <FormGroupSwitch label="Create File structure" popupText="Create component, assets and pages folders" onChange={(e) => {setReactAppCommand({...reactAppCommand, createFileStructure: !reactAppCommand.createFileStructure})}} />
              <FormGroupSwitch label="Include React-Router" popupText="Include React Router in project" onChange={(e) => {setReactAppCommand({...reactAppCommand, includeReactRouter: !reactAppCommand.includeReactRouter})}} />
              
            </Row>
            <h5 className="text-center mb-3">Styling</h5>
            <Row>
            <FormGroupSwitch label="Bootstrap" popupText="https://react-bootstrap.github.io/" onChange={(e) => {setReactAppCommand({...reactAppCommand, bootstap: !reactAppCommand.bootstap})}} />
              
              

              <Form.Group className="mb-3">
                <Form.Check
                  type="switch"
                  label="MUI"
                  className="float-start"
                  onChange={(e) => {
                    setReactAppCommand({
                      ...reactAppCommand,
                      mui: !reactAppCommand.mui,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="switch"
                  label="Semantic UI React"
                  className="float-start"
                  onChange={(e) => {
                    setReactAppCommand({
                      ...reactAppCommand,
                      semanticUI: !reactAppCommand.semanticUI,
                    });
                  }}
                />
              </Form.Group>
            </Row>
            <h5 className="text-center mb-3">Icons</h5>
            <Row>
              <Form.Group className="mb-3">
                <Form.Check
                  type="switch"
                  label="React Icons"
                  className="float-start"
                  onChange={(e) => {
                    setReactAppCommand({
                      ...reactAppCommand,
                      reactIcons: !reactAppCommand.reactIcons,
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </Form>
        </Col>

        <Col lg="6" className="bg-dark text-light p-5 code-snippet">
          npx create-react-app {reactAppCommand.appName} <span>&&</span> cd{" "}
          {reactAppCommand.appName}
          {reactAppCommand.createFileStructure
            ? reactAppCommand.createFileStructureCmd
            : null}
          {reactAppCommand.removeReactDefaults
            ? reactAppCommand.removeReactDefaultsCmd
            : null}
          {reactAppCommand.includeReactRouter
            ? reactAppCommand.includeReactRouterCmd
            : null}
          {reactAppCommand.stylingLibrary
            ? reactAppCommand.stylingLibraryCmd
            : null}
          {reactAppCommand.bootstap ? reactAppCommand.bootstapCmd : null}
          {reactAppCommand.mui ? reactAppCommand.muiCmd : null}
          {reactAppCommand.semanticUI ? reactAppCommand.semanticUICmd : null}
          {reactAppCommand.reactIcons ? reactAppCommand.reactIconsCmd : null}
        </Col>
      </Row>
      {console.log(reactAppCommand.stylingLibraryCmd)}
    </Container>
  );
}

export default App;
