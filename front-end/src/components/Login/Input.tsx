import React from "react";
import Form from "react-bootstrap/Form";

type PrivateProps = {
  label: string;
  controlType: string;
  controlPlaceHolder?: string;
  text?: string;
};

const Input = (props: PrivateProps) => {
  return (
    <div>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.controlType}
        placeholder={props.controlPlaceHolder}
      />
      {props.text && <Form.Text className="text-muted">{props.text}</Form.Text>}
    </div>
  );
};

export default Input;
