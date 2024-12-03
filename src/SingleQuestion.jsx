import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
// import { CiCirclePlus } from "react-icons/ci";

const SingleQuestion = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="card p-4 align-self-start  shadow border-0 my-2 w-100">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <h5 className="m-0">{question}</h5>
          {open ? (
            <CiCircleMinus size={30} cursor="pointer" onClick={handleOpen} />
          ) : (
            <CiCirclePlus size={30} cursor="pointer" onClick={handleOpen} />
          )}
        </div>
        <p className={`text-secondary ${!open && "d-none"} `}>{answer}</p>
      </div>
    </>
  );
};

export default SingleQuestion;
