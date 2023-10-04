import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type your message here..." />
      <div className="send">
        <FontAwesomeIcon className="img" icon={faPaperclip} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon className="img" icon={faImage} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}
export default Input;
