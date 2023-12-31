// // // import { useState } from "react";
// // // import reactLogo from "./assets/react.svg";
// // // import viteLogo from "/vite.svg";

// // // import { useEffect } from "react";
// // // import React from "react";
// // // import axios from "axios";
// // // function App() {
// // //   const [todos, setTodos] = useState([]);

// // //   const getAllTodo = async () => {
// // //     const response = await axios.get("http://localhost:4000/read");
// // //     setTodos(response.data);
// // //   };
// // //   useEffect(() => {
// // //     getAllTodo();
// // //   }, []);

// // //   return (
// // //     <React.Fragment>
// // //       <button onClick={getAllTodo}>Get Todo</button>
// // //       {todos.map((todoItem, index) => (
// // //         <div key={index}>
// // //           Text: {todoItem.text}
// // //           &nbsp; status: {JSON.stringify(todoItem.status)}
// // //           <button
// // //             onClick={async () => {
// // //               const id = todoItem._id;
// // //               const updatedStatus = !todoItem.status;
// // //               await axios.patch("http://localhost:4000/update", {
// // //                 id,
// // //                 status: updatedStatus,
// // //               });
// // //               getAllTodo();
// // //             }}
// // //           >
// // //             Change Status{" "}
// // //           </button>
// // //         </div>
// // //       ))}
// // //     </React.Fragment>
// // //   );
// // // }

// // // export default App;
// // import React from 'react'
// // import firebaseConfig from

// // export default function App() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }
// import { useState } from 'react'

// import './App.css'
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "../src/Firebase";

// import { auth } from "./firbase";

// function App() {
//   const [count, setCount] = useState(0)
//   const googleProvider = new GoogleAuthProvider();

//   return (
//     <>
//     <button onClick={
//       ()=>{
//         signInWithPopup(auth, googleProvider)
//       .then(async (result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         console.log(user);

// })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//       });
//       }
//     }
//     >onclick</button>
//      </>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
