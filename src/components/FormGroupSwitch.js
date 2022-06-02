import Form from "react-bootstrap/Form";
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { FiInfo } from "react-icons/fi";

function FormGroupSwitch(props) {
  const popover = (
    <Popover>
      <Popover.Body>{props.popupText}</Popover.Body>
    </Popover>
  );

  return (
    <Form.Group className="mb-3">
      <Form.Check
        type="switch"
        label={props.label}
        onChange={props.onChange}
        className="float-start"
      />

    <OverlayTrigger
      trigger={"click"}
      placement="right"
      overlay={popover}
      className="float-start"
    >
      <Button variant="light" className="p-0 m-0 ps-3">
        <FiInfo />
      </Button>
    </OverlayTrigger>


    </Form.Group>
  );
}

export default FormGroupSwitch;
