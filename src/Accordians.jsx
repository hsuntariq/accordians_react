import React from "react";
import FAQs from "./FAQs";

const Accordians = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div className="container p-5  mx-auto shadow-lg">
          <div className="row ">
            <h2 className="col-lg-4">questions and answers about login</h2>
            <div className="col-lg-8">
              <FAQs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordians;
