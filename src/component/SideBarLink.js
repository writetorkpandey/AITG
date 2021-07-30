import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export const SideBarLink = () => {
  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Home
        </ListGroup.Item>
        <ListGroup.Item as="li">Customer Form</ListGroup.Item>
        <ListGroup.Item as="li">Contact Us</ListGroup.Item>
        <ListGroup.Item as="li">About US</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
