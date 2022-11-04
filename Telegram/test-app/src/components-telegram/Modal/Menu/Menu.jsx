import React, { useState } from "react";
import "./Menu.css";
import { Modal } from "antd";

const Menu = ({ header, items, active, setActive }) => {
  const [state, setState] = useState(false);

  const [textContact, setTextContact] = useState("");

  const handleC = () => {
    setState(true);
  };

  const handleOk = () => {
    setState(false);
  };

  const handleCancel = () => {
    setState(false);
  };

  function onChangeContact(e) {
    const value = e.target.value;
    setTextContact(value);
  }

  function onSendContact(e) {
    e.preventDefault();

    fetch(`http://localhost:3002/contacts-save?name=${textContact}`);
    setTextContact("");
  }

  return (
    <div>
      <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
        <div className="blur">
          <div className="menu__content" onClick={(e) => e.stopPropagation()}>
            <div className="menu__header">{header}</div>
          </div>
        </div>
      </div>
      <Modal title="Basic Modal" visible={state} onOk={handleOk} onCancel={handleCancel}>
        <form action="">
          <h4>New Contact Please</h4>
          <input type="text" onChange={onChangeContact} placeholder="Добавит контакт... " value={textContact} />
          <button onClick={onSendContact}>Add Menu</button>
        </form>
      </Modal>
    </div>
  );
};
export default Menu;
