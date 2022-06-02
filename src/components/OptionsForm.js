import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react";
import Button from "react-bootstrap/Button";
import { FiInfo } from "react-icons/fi";
import { useState } from "react";

function OptionsForm() {
  const [reactAppName, setReactAppName] = useState("");
  const [removeReactDefaults, setRemoveReactDefaults] = useState(false);
  const [createFileStructure, setCreateFileStructure] = useState(false);
  const [includeReactRouter, setIncludeReactRouter] = useState(false);
  const [stylingLibrary, setStylingLibrary] = useState("");

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h5">Remove React Basics</Popover.Header>
      <Popover.Body>Remove *******</Popover.Body>
    </Popover>
  );
  const popover2 = (
    <Popover id="popover-basic">
      <Popover.Header as="h5">Create file Structure</Popover.Header>
      <Popover.Body>Remove *******</Popover.Body>
    </Popover>
  );
  const popover3 = (
    <Popover id="popover-basic">
      <Popover.Header as="h5">Create file Structure</Popover.Header>
      <Popover.Body>Remove *******</Popover.Body>
    </Popover>
  );


  const handleSubmit = (e)=>{
      e.preventDefault();

      console.log(
        reactAppName, removeReactDefaults, createFileStructure, includeReactRouter
      )
  }

  return (
    <Form onSubmit={handleSubmit} className='border p-3'>
      <Row>
        <h5 className="text-center mb-3">Basic info</h5>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="React app name"
            onChange={(e) => {setReactAppName(e.target.value); }}
          />
        </Form.Group>

        <Col lg={6}>
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Remove default React things"
              className="float-start"
              onChange={(e)=>{
                setRemoveReactDefaults(!removeReactDefaults)}}
            />
            <OverlayTrigger
              trigger={["hover", "hover"]}
              placement="right"
              overlay={popover}
              className="float-start"
            >
              <Button variant="light" className="p-0 m-0 ps-3">
                <FiInfo />
              </Button>
            </OverlayTrigger>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-3">
            <Form.Check
             type="switch"
              trigger={["hover", "hover"]}
              label="Create File structure"
              className="float-start"
              onChange={(e)=>{
                setCreateFileStructure(!createFileStructure)}}
            />
            <OverlayTrigger
            trigger={["hover", "hover"]}
              placement="right"
              overlay={popover2}
              className="float-start"
            >
              <Button variant="light" className="p-0 m-0 ps-3">
                <FiInfo />
              </Button>
            </OverlayTrigger>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Include React-Router"
              className="float-start"
              onChange={(e)=>{
                setIncludeReactRouter(!includeReactRouter)}}
            />
            <OverlayTrigger
              trigger="hover"
              placement="right"
              overlay={popover3}
              className="float-start"
            >
              <Button variant="light" className="p-0 m-0 ps-3">
                <FiInfo />
              </Button>
            </OverlayTrigger>
          </Form.Group>
        </Col>
      </Row>
      <h5 className="text-center mb-3">Styling</h5>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Pick styling library</option>
          <option value="React Bootstrap">React Bootstrap</option>
          <option value="MUI">MUI</option>
          <option value="Semantic UI React">Semantic UI React</option>
          onChange={(e)=>{setStylingLibrary(e.target.value)}}

        </Form.Select>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default OptionsForm;
