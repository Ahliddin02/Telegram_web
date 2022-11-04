// import AddContact from "../components-telegram/Modal/AddContact";
// import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// export function ContactList() {
//   // const naviget = useNavigate();
//   const onClickSelect = (selectedContact) => {
//     // naviget("users/" + selectedContact.id);
//     // onContactSelect(selectedContact);
//     // console.log(selectedContact);
//   };
//   const [fetchContact, setFetchContact] = useState([]);

//   useEffect(() => {
//     // fetch("http://localhost:3002/contacts-list")
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((loadMessage) => setFetchContact(loadMessage));
//   }, []);
//   // const updateContacts = (contact) => {
//   //   setFetchContact(contact);
//   // };

//   return (
//     <div className="ContactList">
//       {/* <AddContact getUpdate={updateContacts} /> */}
//       {fetchContact.map((el) => (
//         // <div key={el.id} onClick={() => onClickSelect(el)}>
//         <div>
//           <h2 className="ContactList__name">{el.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

import AddContact from "../components-telegram/Modal/AddContact";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ContactList({ onContactSelect }) {
  const naviget = useNavigate();
  const onClickSelect = (selectedContact) => {
    naviget("users/" + selectedContact.id);
    onContactSelect(selectedContact);
    console.log(selectedContact);
  };
  const [fetchContact, setFetchContact] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/contacts-list")
      .then((response) => response.json())
      .then((loadMessage) => setFetchContact(loadMessage));
  }, []);
  const updateContacts = (contact) => {
    setFetchContact(contact);
  };

  return (
    <div className="ContactList">
      <AddContact getUpdate={updateContacts} />
      {fetchContact.map((el) => (
        <div key={el.id} onClick={() => onClickSelect(el)}>
          <div>
            <h2 className="ContactList__name">{el.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
