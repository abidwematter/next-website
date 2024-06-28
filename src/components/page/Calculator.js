import React, { useState } from "react";
import Head from "next/head";
import ContactForm from "../form/ContactForm";
import Calculatorform from "./calculatorform";
import "./calculator.css";

const Calculator = (props) => {
  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // })

  const [totalEmployee, setTotalEmployee] = useState("");
  const [targetedReduction, setTargetedReduction] = useState("");
  const [currebtPer, setCurrebtPer] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [attritionSaved, setAttritionSaved] = useState("");
  const [currencySaved, setCurrencySaved] = useState("");

  const [totalValue, setTotalValue] = useState("");
  const [paybackPeriod, setPaybackPeriod] = useState("");
  const [costAttrition, setCostAttrition] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    let newData;
    // var sssss = Number(targetedReduction);
    // alert(sssss);
    let calculatedValue =
      (Number(totalEmployee) * Number(targetedReduction)) / 100;
    setEmployeeCount(calculatedValue);
    if (calculatedValue) {
      let attritionCount = attritionSaved / 2;
      // alert(Number(employeeCount));
      // newData = (Number(employeeCount) * Number(attritionCount));
      newData = calculatedValue * attritionCount;

      setTotalValue(newData);
      // alert(newData);
      setCostAttrition(attritionCount);
    }
    // alert(newData);
    let investEmp;
    if (newData) {
      if (totalEmployee < 200) {
        investEmp = 2;
      } else if (totalEmployee >= 200 && totalEmployee <= 500) {
        investEmp = 4;
      } else if (totalEmployee >= 501 && totalEmployee <= 1000) {
        investEmp = 6;
      } else if (totalEmployee >= 1000 && totalEmployee <= 2000) {
        investEmp = 8;
      } else if (totalEmployee >= 2001 && totalEmployee <= 5000) {
        investEmp = 12;
      } else if (totalEmployee >= 5001 && totalEmployee <= 10000) {
        investEmp = 15;
      } else if (totalEmployee >= 10000) {
        investEmp = 20;
      }

      let totalCount = (investEmp / newData) * 52;

      setPaybackPeriod(totalCount.toFixed(2));
    }
  };

  return (
    <div>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta name="description" content={props?.data?.meta_description} />
      </Head>
      <div className="fancy-feature-twentyFive position-relative mt-10">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="form-style-one">
                <form id="contact-form" action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>
                          Total employee size for addressing attrition
                          (numbers)*
                        </label>
                        <input
                          type="number"
                          placeholder="Total Employee"
                          value={totalEmployee}
                          onChange={(e) => setTotalEmployee(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Current attrition percentage (%) *</label>
                        <input
                          type="number"
                          placeholder="Current attrition percentage"
                          value={currebtPer}
                          onChange={(e) => setCurrebtPer(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Targeted reduction in attrition (%)*</label>
                        <input
                          type="number"
                          placeholder="Targeted reduction"
                          value={targetedReduction}
                          onChange={(e) => setTargetedReduction(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="input-group-meta form-group mb-30">
                        <label>Average annual {currencySaved} * </label>
                        <input
                          type="number"
                          placeholder="Average annual CTC of employees"
                          value={attritionSaved}
                          onChange={(e) => setAttritionSaved(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="input-group-meta form-group mb-30">
                        <label>Currency</label>
                        <select
                          className="form-control"
                          style={{ height: "60px" }}
                          name="currency"
                          value={currencySaved}
                          onChange={(e) => setCurrencySaved(e.target.value)}
                        >
                          <option value="">Select Currency</option>
                          <option value="₹">INR</option>
                          <option value="$">DOLLAR</option>
                          <option value="£">POUND</option>
                          <option value="€">EURO</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn-eight ripple-btn calculator"
                        onClick={handleCalculate}
                      >
                        Calculator
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="feedback-block-two d-sm-flex"
                    style={{ height: "auto", marginBottom: "20px" }}
                  >
                    <div
                      className="text-wrapper"
                      style={{ display: "inline-block" }}
                    >
                      <h6 style={{ width: "100%" }}>
                        Targeted Reduction in Attrition (Employee Count){" "}
                      </h6>
                      {employeeCount ? (
                        <h1
                          className="hero-heading"
                          style={{
                            color: "#913bff",
                            fontWeight: "600",
                            fontSize: "36px",
                          }}
                        >
                          {employeeCount}
                        </h1>
                      ) : (
                        <h1
                          className="hero-heading"
                          style={{
                            color: "#913bff",
                            fontWeight: "600",
                            fontSize: "36px",
                          }}
                        >
                          0
                        </h1>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="feedback-block-two d-sm-flex"
                    style={{ height: "auto" }}
                  >
                    <div
                      className="text-wrapper"
                      style={{ display: "inline-block" }}
                    >
                      <h6 style={{ width: "100%" }}>
                        Cost of attrition per employee*
                        {currencySaved == "₹"
                          ? "(In Thousands)"
                          : "(In Thousands)"}
                      </h6>

                      {costAttrition ? (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            {currencySaved}{" "}
                            {costAttrition.toLocaleString("en-US")}
                          </h1>{" "}
                        </>
                      ) : (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            0
                          </h1>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="feedback-block-two d-sm-flex"
                    style={{ height: "auto" }}
                  >
                    <div
                      className="text-wrapper"
                      style={{ display: "inline-block" }}
                    >
                      <h6 style={{ width: "100%" }}>
                        Cost of attrition saved
                        {currencySaved == "₹"
                          ? "(In Thousands)"
                          : "(In Thousands)"}
                      </h6>
                      {totalValue ? (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            {currencySaved} {totalValue.toLocaleString("en-US")}{" "}
                          </h1>{" "}
                        </>
                      ) : (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            0
                          </h1>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-12" style={{ display: "none" }}>
                  <div
                    className="feedback-block-two d-sm-flex"
                    style={{ height: "auto" }}
                  >
                    <div
                      className="text-wrapper"
                      style={{ display: "inline-block" }}
                    >
                      <h6 style={{ width: "100%" }}>
                        Payback period in weeks{" "}
                      </h6>
                      {paybackPeriod ? (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            {paybackPeriod}
                          </h1>{" "}
                        </>
                      ) : (
                        <>
                          <h1
                            className="hero-heading"
                            style={{
                              color: "#913bff",
                              fontWeight: "600",
                              fontSize: "36px",
                            }}
                          >
                            0
                          </h1>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-12">
                  <div className="feedback-block-two d-sm-flex" style={{ height: 'auto' }}>
                    <div className="text-wrapper">
                    <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} />
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} /> */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Calculator;
