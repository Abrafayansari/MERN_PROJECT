import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Profile() {
 const globalState=useSelector(state=>state)
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    alert("file is changed");
  };
 
  return (
    <React.Fragment>
      <Navbar/>
      <form
      className="flex flex-col justify-center
       items-center  mb-16 "
        encType="multipart/form-data"
        style={{ padding: "20px" }}
        onSubmit={async(e) => {
          e.preventDefault();
          if ( file) {
            const formData = new FormData();
           
            formData.set("avatar", file);
           await axios.post("http://localhost:5003/file", formData, {
              onUploadProgress: (progressEvent) => {
                console.log(progressEvent);
                // const totalLength = progressEvent.lengthComputable
                //   ? progressEvent.total
                //   : progressEvent.target.getResponseHeader("content-length") ||
                //     progressEvent.target.getResponseHeader(
                //       "x-decompressed-content-length"
                //     );
                // if (totalLength) {
                //   const progressPercent = Math.round(
                //     (progressEvent.loaded * 100) / totalLength
                //   );
                //   console.log(progressPercent);
                // }
              },
            });
          } else alert("please upload file");
        }}
      >
        <div>{file && (
        <img className="m"
          style={{ borderRadius: "50%", height: "200px", width: "200px" }}
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}</div>
       <div className=" text-black">
<div>Name:{"   "} {globalState.User.loginuser?.Username}</div>
<div>Email:{"   "}{globalState.User.loginuser?.Email}</div>

       </div>
        {/* <input
        className="text-white"
          type="file"
          name="avatar"
          // value={file}
          id="avatar"
          onChange={handleFile}
          accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
        /> */}
        
        
      </form>
      
      
    </React.Fragment>
  );
}

export default Profile;
