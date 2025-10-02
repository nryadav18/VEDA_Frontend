import React from "react";
import TopData from "./sections";
import "./styl.css";
import Dforms from "./dataforms";
import { useState, useEffect, useRef, useCallback } from "react";
import PageTitle from "../pagetitle/Pagebyus";
import axios from "axios";
import "./DSPstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import useRazorpay from "react-razorpay";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThreeDots } from "react-loader-spinner";
import Team from "../../pages/Team";
const RegForm = () => {
  const [TotalAmount, setTotalAmount] = useState(0);
  const [extraMessage, setextraMessage] = useState(false);
  const [TeamData, setTeamData] = useState({});
  const [Razorpay] = useRazorpay();
  const [order, setorder] = useState({});
  const { department, eventName } = useParams();
  const [PaymentLoader, setPaymentLoader] = useState(false);
  const [Loader, setLoader] = useState(false);
  const forms = document.querySelectorAll(".needs-validation");
  const [Index, setIndex] = useState(0);
  const [CreateIndex, setCreateIndex] = useState(1);
  const [ShowForm, setShowForm] = useState(true);
  const [Disable, setDisable] = useState(false);
  const [SubmitDisable, setSubmitDisable] = useState(false);
  const isInitialMount = useRef(true);
  const [userTeamCode, setuserTeamCode] = useState("---------");
  const [showModal, setshowModal] = useState(false);
  const [OtherCollege, setOtherCollege] = useState(false);
  const [AllData, setAllData] = useState(
    Array(CreateIndex).fill({
      userEventCategory: department,
      userEvent: eventName,
      userTeamsize: 1,
      userName: "",
      userRollNumber: "",
      userCollege: "",
      userGender: "",
      userMobile: "",
      userEmail: "",
      userYear: "",
      userAccomodation: "",
      userLocation: "",
      userDepartment: "",
      userTeamsize: CreateIndex,
      otherCollege: " ",
    })
  );
  const BaseUrl = process.env.REACT_APP_BASEURL;
  let Options;
  const [size, setSize] = useState([]);
  const [Amount, setAmount] = useState(200);

  useEffect(() => {
    axios
      .get(
        BaseUrl + "/get-event-by-name" + "/" + department + "/" + eventName
      )
      .then((res) => {
        console.log(res.data);
        setAmount(res.data[0].registrationFee);
        setTeamData({
          maxTeamSize: res.data[0].maxTeamSize,
          extraTeamSize: res.data[0].extraTeamSize,
          extraAmountPerHead: res.data[0].extraAmountPerHead,
          registrationFee: res.data[0].registrationFee,
        });
        console.log(res.data[0].maxTeamSize);
        var arr = [];
        for (
          var i = 1;
          i <= parseInt(res.data[0].maxTeamSize) + parseInt(res.data[0].extraTeamSize);
          i++
        ) {
          arr.push(i);
        }
        setSize(arr);
        // AmountCalculator();
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    var Dabbulu = 0;
    if (CreateIndex <= TeamData.maxTeamSize) {
      Dabbulu = TeamData.registrationFee;
    } else {
      Dabbulu =
        TeamData.registrationFee +
        (CreateIndex - TeamData.maxTeamSize) * TeamData.extraAmountPerHead;
    }
    // console.log(TeamData.registrationFee , (CreateIndex - TeamData.maxTeamSize)*AllData.extraAmountPerHead)
    console.log(Dabbulu);
    setTotalAmount(Dabbulu);
  }, [TeamData, CreateIndex]);
  for (var i = 1; i <= 10; i++) {
    Options += `<option value=${i}>${i}</option>`;
  }
  useEffect(() => {
    setAllData(
      Array(CreateIndex).fill({
        userEventCategory: department,
        userEvent: eventName,
        userName: "",
        userRollNumber: "",
        userCollege: "",
        userGender: "",
        userMobile: "",
        userEmail: "",
        userYear: "",
        userAccomodation: "",
        userLocation: "",
        userDepartment: "",
        userTeamsize: CreateIndex,
        otherCollege: " ",
      })
    );
  }, [CreateIndex]);

  //payments
  const handlePayment = useCallback(
    async (AllData, money) => {
      console.log(money);
      var currentdate = new Date();
      var timeoptions = { timeZone: 'Asia/Kolkata', hour12: false };
      await axios
        .post(BaseUrl + "/api/generate-order", { amount: money })
        .then((res) => {
          setPaymentLoader(false);
          console.log(res.data);
          const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: res.data.amount,
            currency: "INR",
            name: "Aditya University",
            order_id: res.data.order_id,
            handler: (response) => {
              handleShow();
              setLoader(true);
              axios
                .post(BaseUrl + "/add-user", AllData)
                .then((resco) => {
                  setuserTeamCode(resco.data.userTeamCode);
                  const data = {
                    razorpay_payment_id: response.razorpay_payment_id,
                    teamCode: resco.data.userTeamCode,
                    amount: money,
                    orderId: res.data.order_id,
                    departmentName: department,
                    eventName: eventName,
                    createdAt:currentdate.toLocaleString('en-IN', timeoptions)
                  };
                  console.log(data);
                  axios
                    .post(BaseUrl + "/api/make-payment", data)
                    .then((res) => {
                      console.log(res);
                      let OTPNumbers = AllData.map(
                        (AllData) => AllData.userMobile
                      ).join(",");
                      console.log(
                        OTPNumbers,
                        resco.data.userTeamCode,
                        response.razorpay_payment_id
                      );
                      axios
                        .get(
                          `https://pgapi.vispl.in/fe/api/v1/multiSend?username=aditrpg1.trans&password=9x7Dy&unicode=false&from=ADIUNI&to=${OTPNumbers}&text=Congratulations,+You+have+been+successfully+registered+and+completed+the+payment+for+VEDA2024.+Here+is+the+Team+Code:${resco.data.userTeamCode}+and+the+Payment+ID:${response.razorpay_payment_id}+to+be+submitted+at+the+Time+of+Participation+in+the+Event.+Thank+you+and+have+a+Great+Experience+of+Learning.+@Aditya+University`
                        )
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  console.log(response);
                  setLoader(false);
                })
                .catch((err) => {
                  console.log(err);
                  setLoader(false);
                })
                .finally(() => {
                  setLoader(false);
                });

              // Handle the payment success response here
            },
            prefill: {
              name: AllData[0].userName,
              email: AllData[0].userEmail,
              contact: AllData[0].userMobile,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzpay = new Razorpay(options);
          rzpay.open();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [Razorpay]
  );

  // State for form validation
  const [validated, setValidated] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    var { id, value, type, checked } = e.target;
    // console.log(id, value);
    if (id === "userTeamsize" || id === "userYear" || id === "userMobile") {
      value = parseInt(value);
      if (id === "userTeamsize") {
        setCreateIndex(value);
        setIndex(0);
        setShowForm(true);
      }
    }
    // console.log(id, value)
    // if (id === "userCollege" && value === "Other") {
    //   setOtherCollege(true);
    // } else if (id === "userCollege" && value !== "Other") {
    //   setOtherCollege(false);
    // }
    // console.log(id, value);
    setAllData((prev) =>
      prev.map((ele, index) => {
        if (index === Index) {
          return { ...ele, [id]: value };
        }
        return ele;
      })
    );
  };

  // Handle form submission
  const SubmitForm = (event) => {
    event.preventDefault();
    var a = 1;
    AllData.map((ele, index) => {
      Object.entries(ele).map((element) => {
        if (element[1] === "") {
          console.log(index, element[0]);
          setValidated(true);
          a = 0;
        } else if (element[0] === "userMobile") {
          let Number = element[1].toString();
          if (
            Number.length == 10 &&
            (Number[0] === "9" ||
              Number[0] === "8" ||
              Number[0] === "7" ||
              Number[0] === "6")
          ) {
          } else {
            setAllData((prev) =>
              prev.map((ele, index) => {
                if (index === Index) {
                  return { ...ele, userMobile: "" };
                }
                return ele;
              })
            );
            a = 0;
          }
        }
      });
    });
    if (a) {
      setPaymentLoader(true);
      handlePayment(AllData, TotalAmount);
      // console.log("final_data", AllData);
      // setLoader(true);
      // axios
      //   .post(BaseUrl + "/add-user", AllData)
      //   .then((res) => {
      //     setPaymentLoader(true)
      //     setuserTeamCode(res.data.userTeamCode);
      //     handlePayment(res.data.userTeamCode);
      //     setLoader(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setLoader(false);
      //   })
      //   .finally(() => {
      //     setLoader(false);
      //   });
    }
  };
  useEffect(() => {
    var x = 1;
    Object.entries(AllData[Index]).forEach(([key, value]) => {
      if (value === "") {
        setDisable(true);
        setValidated(true);
        x = false;
      }
    });
    if (x) {
      setDisable(false);
    }
  }, [AllData]);
  const SetNext = (e) => {
    e.preventDefault();
    console.log(AllData[Index].userMobile);
    let Number = AllData[Index].userMobile.toString();
    if (
      Number.length == 10 &&
      (Number[0] === "9" ||
        Number[0] === "8" ||
        Number[0] === "7" ||
        Number[0] === "6")
    ) {
      setIndex(Index + 1);
    } else {
      setAllData((prev) =>
        prev.map((ele, index) => {
          if (index === Index) {
            return { ...ele, userMobile: "" };
          }
          return ele;
        })
      );
    }
  };
  const SetPrev = (e) => {
    e.preventDefault();
    setIndex(Index - 1);
    setDisable(false);
  };

  const handleShow = () => setshowModal(true);
  // console.log(AllData)
  const handleClose = () => {
    setshowModal(false);
    window.location.href = "/veda2024";
  };
  useEffect(() => {
    console.log(TeamData);
  }, [TeamData]);

  return (
    <>
      <PageTitle title="Drop Your Details" />
      <div className="container">
        {showModal && <div className="modal-backdrop fade show"></div>}

        {/* Modal Structure */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block" }} // Ensure modal is visible
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{
                  background:
                    "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%), linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)",
                }}
              >
                {Loader ? (
                  <div className="d-flex justify-content-center w-100">
                    <ThreeDots
                      visible={true}
                      height="80"
                      width="80"
                      color="white"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  <>
                    {" "}
                    <div className="modal-header">
                      <h5 className="modal-title">Successfully Registered</h5>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleClose}
                      ></button>
                    </div>
                    <div
                      className="modal-body d-flex justify-content-evenly flex-wrap-wrap"
                      style={{ fontSize: "32px", fontWeight: 600 }}
                    >
                      <div>TeamCode</div> <div>{userTeamCode}</div>
                    </div>
                    <div className="modal-footer">
                      Ensure you have this team code when participating in the
                      event. Each team should use a single team code for all
                      participants
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* <div className="row">
                    <div className="touch__main1" style={{ maxWidth: '500px', justifyContent: 'center' }}>
                        <TopData selectUsers={setUserNum} />
                    </div>
                </div>
                <Dforms userId={UserNum} /> */}
        {!PaymentLoader ? (
          <form
            className={`row g-3 needs-validation ${
              validated ? "was-validated" : ""
            }`}
            noValidate
          >
            <div className="col-md-3">
              <label htmlFor="firstName" className="form-label">
                <b>Event Category </b>
              </label>
              <input
                type="text"
                className="form-control"
                id="userEventCategory"
                value={AllData[Index].userEventCategory}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a first name.
              </div>
            </div>
            <div className="col-md-2">
              <label htmlFor="firstName" className="form-label">
                <b>AMOUNT </b>
              </label>
              <input
                type="text"
                className="form-control"
                id="userEventCategory"
                value={Amount}
                required
                Disable
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">
                <b>Event Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="userEvent"
                value={AllData[Index].userEvent}
                required
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a last name.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="state" className="form-label">
                <b>Choose Team Size</b>
              </label>
              <select
                className="form-select"
                id="userTeamsize"
                value={CreateIndex}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">
                  Choose...
                </option>
                {size.map((ele) => {
                  return <option value={ele}>{ele}</option>;
                })}
              </select>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please select a valid Team size.
              </div>
            </div>
            {TeamData != "undefined" && TeamData.extraTeamSize != 0 ? (
              <div style={{ fontSize: "15px" }}>
                <b>
                  <u>Note</u>
                </b>
                <br />
                The maximum team size is {TeamData.maxTeamSize} players, and it
                costs {TeamData.registrationFee} /- per team.
                <br />
                However, you can have up to {TeamData.extraTeamSize} extra
                students for an additional cost of {TeamData.extraAmountPerHead}{" "}
                /- per extra player.
                <br />
                So, you are going to pay <b>{TotalAmount}/-</b>
              </div>
            ) : (
              <></>
            )}
            {ShowForm ? (
              <>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Enter Participant-{Index + 1} Details
                </div>
                <div className="col-md-3">
                  <label htmlFor="city" className="form-label">
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={AllData[Index].userName}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">
                    <b>College</b>
                  </label>
                  <select
                    className="form-select"
                    id="userCollege"
                    value={AllData[Index].userCollege}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="">
                      Choose...
                    </option>
                    <option value="AdityaUniversity">Aditya University</option>
                    <option value="ACET">ACET</option>
                    <option value="ACOE">ACOE</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid College.
                  </div>
                </div>
                {AllData[Index].userCollege === "Other" ? (
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      <b>Other College</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="otherCollege"
                      value={AllData[Index].otherCollege}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide other College.
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    <b>Roll Number</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRollNumber"
                    value={AllData[Index].userRollNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide RollNumber.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">
                    <b>Gender</b>
                  </label>
                  <select
                    className="form-select"
                    id="userGender"
                    value={AllData[Index].userGender}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Others</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a Gender.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    <b>Mobile</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="userMobile"
                    value={AllData[Index].userMobile}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Number.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userEmail"
                    value={AllData[Index].userEmail}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">
                    <b>Year of study</b>
                  </label>
                  <select
                    className="form-select"
                    id="userYear"
                    value={AllData[Index].userYear}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid Year.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">
                    <b>Accomodation</b>
                  </label>
                  <select
                    className="form-select"
                    id="userAccomodation"
                    value={AllData[Index].userAccomodation}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid Accomodation.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="state" className="form-label">
                    <b>Department</b>
                  </label>
                  <select
                    className="form-select"
                    id="userDepartment"
                    value={AllData[Index].userDepartment}
                    onChange={handleInputChange}
                    required
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="AIML">AIML</option>
                    <option value="DS">DS</option>
                    <option value="IOT">IOT</option>
                    <option value="PETRO&MINING">PETRO & MINING</option>
                    <option value="MCA">MCA</option>
                    <option value="AGRI">AGRI</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid Department.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    <b>Location</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userLocation"
                    value={AllData[Index].userLocation}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Location.
                  </div>
                </div>
                <div className="col-12 d-flex mb-30">
                  <button
                    className={Index < 1 ? "d-none" : "btn btn-secondary"}
                    onClick={(event) => SetPrev(event)}
                  >
                    Previous
                  </button>
                  <button
                    style={{
                      background:
                        "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
                    }}
                    className={
                      Index < CreateIndex - 1
                        ? "btn btn-success mx-4"
                        : "d-none"
                    }
                    disabled={Disable}
                    onClick={(event) => SetNext(event)}
                  >
                    Next
                  </button>
                  <button
                    style={{
                      background:
                        "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
                    }}
                    className={
                      Index == CreateIndex - 1 ? "btn btn-success mx-5" : "d-none"
                    }
                    onClick={SubmitForm}
                    disabled={SubmitDisable}
                  >
                    Register
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="col-12"></div>
          </form>
        ) : (
          <div className="d-flex justify-content-center w-100">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="white"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RegForm;
