import Form from "react-bootstrap/Form";

import React from 'react'

function FormGroup(props) {
  return (
    <Form.Group className="mb-3">
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      
    />

  </Form.Group>
  )
}

export default FormGroup