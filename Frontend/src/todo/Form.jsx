import axios from "axios";
import React, { useState } from "react";

export default function form() {
  const [text, settext] = useState("");
  const [status, setstatus] = useState(false);

  return (
    <React.Fragment>
      <form
        onSubmit={async(e) => {
          e.preventDefault();
          const created =  await axios.post("http://localhost:4000/create", {
            text: text,
            status: status,
          });
          if (created) {
            alert(JSON.stringify(created.data));
          }
        }}
      >
        <input
          type="text"
          required
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <label htmlFor="true">true</label>
        <input
          type="radio"
          onClick={(e) => setstatus(true)}
          value={true}
          name="status"
          id="true"
        />
        <label htmlFor="false">false</label>
        <input
          type="radio"
          onClick={() => setstatus(false)}
          vlaue={false}
          name="status"
          id="false"
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}
