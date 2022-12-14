import React from "react";
import { useState, useRef } from "react";
import { Audio } from "react-loader-spinner";
import "./InputBox.css";

const InputBox = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const [status, setStatus] = useState("avail");

  const uploadFileThroughMedaitor = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", file.name);
    fetch(
      "http://Choosepiecemediatorv1-env.eba-r7ua3mxd.eu-west-2.elasticbeanstalk.com/v1/api/upload",
      {
        method: "post",
        headers: { "Content-Type": "video/mp4" },
        body: formData,
        mode: "no-cors",
      }
    );
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setFile(fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div>
      <p className="f3"></p>
      <div className="center">
        <div className=" pa3 br3 shadow-5 center">
          <input
            className="f4 pa2 w-70 center"
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
          />
          {file ? file.name : null}
          <button
            onClick={() => {
              uploadFileThroughMedaitor(file);
            }}
            disabled={!file}
          >
            Upload to S3
          </button>
        </div>
      </div>
      <div className="center">
        {status === "loading" ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        ) : null}
      </div>
    </div>
  );
};

export default InputBox;
