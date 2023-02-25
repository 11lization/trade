import React, { useState } from "react";
import httpCli from "../utils/http.js";

const maxUtf8DataSize = 16430;

function RegisterData() {
  let fileReader = new FileReader();
  const fileInput = React.useRef(null);

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState("");
  const [textFile, setTextFile] = useState(null);

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function descChangeHandler(e) {
    setDesc(e.target.value);
  }

  function handleButtonClick(e) {
    fileInput.current.click();
  }

  function handleChange(e) {
    console.log(e.target.files[0]);
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = () => {
      const text = fileReader.result;
      if (getByteLengthOfUtf8String(text) > maxUtf8DataSize) {
        alert("size is too big!");
        return;
      }
      console.log(getByteLengthOfUtf8String(text), fileReader.result.length);
      setTextFile(fileReader.result);
      sessionStorage.setItem("data", fileReader.result);
    };
  }

  async function RegisterDataHandler(e) {
    const reqBody = {
      title: `${title}`,
      desc: `${desc}`,
      data: `${textFile}`,
    };

    httpCli.post("/data/registerData/", reqBody).then(async (res) => {
      alert("데이터 등록이 완료되었습니다.");
      console.log(res.data);
      console.log(res.data.receipt);
      // console.log(res.data.proof);

      // setHCt(res.data.h_ct);
      // setProof(res.data.proof);
      // setReceipt(JSON.stringify(res.data.receipt, null, 2));
    });
  }

  function getByteLengthOfUtf8String(s) {
    let b, i, c;
    if (s != undefined && s != "") {
      for (
        b = i = 0;
        (c = s.charCodeAt(i++));
        b += c >> 11 ? 3 : c >> 7 ? 2 : 1
      );
      return b;
    }
    return 0;
  }

  return (
    <div>
      <h2>Register Data</h2>
      <input
        type="text"
        className="title"
        onChange={titleChangeHandler}
        placeholder=" 제목을 입력하시오."
      ></input>
      <br />
      <textarea
        className="textDesc"
        onChange={descChangeHandler}
        placeholder="작품 설명을 입력하시오."
      ></textarea>
      <br />
      <React.Fragment>
        <button className="buttonStyle" onClick={handleButtonClick}>
          파일 업로드
        </button>
        <input
          type="file"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </React.Fragment>

      <button className="buttonStyle" onClick={RegisterDataHandler}>
        파일 전송
      </button>
      <p className="paragraph"> {textFile} </p>
      <br />
    </div>
  );
}

export default RegisterData;
