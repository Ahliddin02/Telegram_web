import { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
// import { AiOutlinePaperClip } from "react-icons/ai";
import { BiSend } from "react-icons/bi";

function InputMessages({ contact, setMessages, messages }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/messages-list")
      .then((response) => response.json())
      .then((loadMessage) => setMessages(loadMessage));
  }, [messages]);

  function onChange(e) {
    const value = e.target.value;
    setText(value);
  }
  // console.log(value);

  async function onSendMessage(e) {
    e.preventDefault();

    await fetch(`http://localhost:3002/messages-save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        sender: 1000,
        receiver: contact.id,
      }),
    }).then((res) => console.log(res));
    setText("");
  }

  return (
    <form>
      <label>
        <input
          onChange={onChange}
          placeholder="Написать сообщения..."
          className="input__message"
          value={text}
          type="text"
        />

        <button className="microphon">
          <BsEmojiSmile className="smile__icon" />
          <BiSend onClick={onSendMessage} />
        </button>
      </label>
    </form>
  );
}
export default InputMessages;
