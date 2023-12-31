import { useEffect, useState } from "react";
import React from "react";

import axios from "axios";
function task() {
  const [name, setname] = useState();
  const [task, settask] = useState();
  const [tasklist, settasklist] = useState([]);
  
  const handle = (e) => {
    e.preventDefault();
    settasklist([...tasklist, { name, task }]);
    setname("");
    settask("");
  };

  const del = (itemtobe) => {
    const seto = [...tasklist];
    settasklist(seto.splice(itemtobe, 0));
  };

  return (
    <>
      <form onSubmit={handle}>
        <div className="">
          <h1>TODO LIST</h1>
        </div>

        <input
          className="border-2 border-black"
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
        />
        <input
          className="border-2 border-black"
          value={task}
          onChange={(e) => settask(e.target.value)}
          type="text"
        />
        <button className="border-2 border-black" type="submit">
          Add
        </button>

        <div>
          {tasklist.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <div> {item.name} </div>
                  <div> {item.task} </div>
                  <button type="reset" onClick={() => del(item)}>
                    delete
                  </button>
                </li>
              
              </>
            );
          })}
        </div>
      </form>
    </>
  );
}
export default task;
