import React from "react";
import SingleQuestion from "./SingleQuestion";
import { questions } from "./data";

const FAQs = () => {
  return (
    <>
      <div className="d-flex w-100 flex-column">
        {questions.map((item, index) => {
          return <SingleQuestion key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default FAQs;
