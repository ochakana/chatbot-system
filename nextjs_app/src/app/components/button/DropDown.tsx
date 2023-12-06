import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownButton = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow(!show);

  return (
    <Dropdown show={show} onToggle={toggleDropdown}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
