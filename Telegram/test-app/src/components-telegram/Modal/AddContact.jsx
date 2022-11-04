import React, { useState } from "react";
import "./AddContact.css";
import Modal from "@mui/material/Modal";

const AddContact = ({ getUpdate }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [textContact, setTextContact] = useState("");
  function onChangeContact(e) {
    const value = e.target.value;
    setTextContact(value);
  }

  async function onSendContact(e) {
    // e.preventDefault();

    await fetch(`http://localhost:3002/contacts-save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: textContact,
      }),
    });
    setTextContact("");

    fetch(`http://localhost:3002/contacts-list`)
      .then((res) => res.json())
      .then((contacts) => getUpdate(contacts));
  }

  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setOpen(!open)}>
          <span />
        </div>
      </nav>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <form action=""> */}
        <div>
          {/* <h4>New Contact Please</h4> */}
          <input
            className="input"
            type="text"
            onChange={onChangeContact}
            placeholder="Добавит контакт... "
            value={textContact}
          />
          <button className="add" onClick={() => onSendContact()}>
            Add
          </button>
        </div>
        {/* </form> */}
      </Modal>
    </div>
  );
};
export default AddContact;
