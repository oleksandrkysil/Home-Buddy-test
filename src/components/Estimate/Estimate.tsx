import React, { forwardRef, useState } from "react";
import cn from "classnames/";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Input from "./../../ui/Input/Input";
import Btn from "./../../ui/Btn/Btn";
import Radio from "../../ui/Radio/Radio";

import { useForm, SubmitHandler } from "react-hook-form";

import savings from "./../../assets/icons/savings-small.svg";
import yes from "./../../assets/icons/yes.svg";
import no from "./../../assets/icons/no.svg";
import lock from "./../../assets/icons/lock.svg";

import "./Estimate.scss";
import "./PopUp.scss";

interface IFormInputs {
  zipCode: number;
  homeOwner: boolean;
  fullName: string;
  email: string;
}

const Estimate = forwardRef((props: any, ref: any) => {
  const [openModal, setOpenModal] = useState(false);

  const [showFirstStep, setShowFirstStep] = useState(false);
  const [showSecondStep, setShowSecondStep] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({ mode: "onChange" });

  const zipCode = watch("zipCode" as any, false);
  const homeOwner = watch("homeOwner" as any, false);

  const handleClose = () => {
    setOpenModal(false);
    setShowFirstStep(false);
    setShowSecondStep(false);
  };

  const handleShow = () => {
    setOpenModal(true);
    setShowFirstStep(true);
    setShowSecondStep(false);
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    alert(JSON.stringify(data));
    setOpenModal(false);
  };

  return (
    <section ref={ref} className="estimate">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="custom_container">
          <Row>
            <Col>
              <div className="estimate__outer">
                <div className="estimate__alertContainer">
                  <div className="estimate__alert">
                    <img src={savings} alt="icon" />
                    <div className="ms-2">
                      You will be surprised how affordable gutter guards are!
                    </div>
                  </div>
                </div>
                <h2 className="estimate__title">
                  See How Much Gutter Guards Cost In The XX, XXX Area
                </h2>
                <div className="estimate__inputBlock">
                  <h3 className="estimate__inputTitle">
                    What is your ZIP Code?
                  </h3>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="estimate__inputContainer">
                      <div>
                        <Input
                          label="Zip Code"
                          className={errors.zipCode && "inputContainer_error"}
                        >
                          <input
                            placeholder="Zip Code"
                            type="number"
                            className="inputContainer__item"
                            {...register("zipCode", {
                              required: true,
                              pattern: /^[0-9]{5}(?:-[0-9]{4})?$/i,
                            })}
                          />
                          <span className="inputContainer__errorMessage">
                            {errors.zipCode && "Please enter correct Zip Code"}
                          </span>
                        </Input>
                      </div>
                      <div>
                        <span className="estimate__info">
                          Free, no-obligation estimates.
                        </span>
                      </div>

                      <Btn
                        type="button"
                        className="w-100"
                        onClick={handleShow}
                        disabled={errors.zipCode || zipCode === false}
                      >
                        Get estimate
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          show={openModal}
          onHide={handleClose}
          centered
          fullscreen
          keyboard={false}
          className="popUp"
        >
          <Modal.Header closeButton />
          <div className="popUp__progressBar">
            <div
              className={cn("popUp__progressBar_half", {
                popUp__progressBar_half_show: showFirstStep,
              })}
            />
            <div
              className={cn("popUp__progressBar_full", {
                popUp__progressBar_full_show: showSecondStep,
              })}
            />
          </div>
          <Modal.Body>
            <form className="popUp__form">
              <div
                className={cn("popUp__firstStep", {
                  popUp__firstStep_show: showFirstStep,
                })}
              >
                <h3 className="popUp__title">
                  Are you homeowner or authrized to make property changes?
                </h3>
                <div>
                  <Radio id="yes" title="Yes" image={yes}>
                    <input
                      type="radio"
                      id="yes"
                      value="Yes"
                      className="radioContainer__item"
                      {...register("homeOwner")}
                    />
                  </Radio>
                  <Radio id="no" title="No" image={no}>
                    <input
                      type="radio"
                      id="no"
                      value="No"
                      className="radioContainer__item"
                      {...register("homeOwner")}
                    />
                  </Radio>
                </div>
                <div className="d-flex justify-content-center">
                  <Btn
                    type="button"
                    onClick={() => {
                      setShowSecondStep(!showSecondStep);
                      setShowFirstStep(!showFirstStep);
                    }}
                    disabled={homeOwner === undefined}
                  >
                    Next
                  </Btn>
                </div>
              </div>

              <div
                className={cn("popUp__secondStep", {
                  popUp__secondStep_show: showSecondStep,
                })}
              >
                <h3 className="popUp__title">
                  Who should I prepare this estimate for?
                </h3>
                <span className="popUp__details">
                  Your choice: <strong>{homeOwner}</strong>
                </span>
                <div className="d-flex flex-column">
                  <Input
                    label="Full Name"
                    className={errors.fullName && "inputContainer_error"}
                  >
                    <input
                      placeholder="Full Name"
                      type="text"
                      className="inputContainer__item"
                      {...register("fullName", {
                        required: true,
                      })}
                    />
                    <span className="inputContainer__errorMessage">
                      {errors.fullName && "Please enter correct Full Name"}
                    </span>
                  </Input>
                  <Input
                    label="Email address"
                    className={errors.email && "inputContainer_error"}
                  >
                    <input
                      placeholder="Email address"
                      type="email"
                      className="inputContainer__item"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    <span className="inputContainer__errorMessage">
                      {errors.email && "Please enter correct Email"}
                    </span>
                  </Input>
                </div>
                <div className="d-flex justify-content-center">
                  <Btn type="submit">Submit</Btn>
                </div>
                <span className="popUp__info">
                  {" "}
                  <img src={lock} alt="" />
                  &nbsp;&nbsp; Safe, Secure and Confidential
                </span>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </form>
    </section>
  );
});

export default Estimate;
