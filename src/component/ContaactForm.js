import React from "react";

const ContaactForm = () => {
  return (
    <div className="from-container">
      <h1>send a message to us</h1>
      <form>
        <input placeholder="Name" />
        <br />
        <br />
        <input placeholder="Email" />
        <br />
        <br />
        <input placeholder="Subject" />
        <br />
        <br />
        <textarea placeholder="Message" rows="4"></textarea>
        <br />
        <button>send message</button>
      </form>
    </div>
  );
};

export default ContaactForm;
