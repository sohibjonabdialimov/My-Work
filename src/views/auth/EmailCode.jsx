import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
import { useState } from "react";
import OTPInput from "react-otp-input";
const EmailCode = () => {
  const [otp, setOtp] = useState("");

  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (value) => {
    setOtp(value);
  };
  const submitHandler = async () => {};
  return (
    <>
      {contextHolder}

      <div className="grid grid-cols-12 p-6 w-full gap-6">
        <div className="col-span-6 mx-[60px] flex justify-center items-center">
          <Form
            layout="vertical"
            className="register_form px-24 pt-4 pb-8 auth_form w-full text-center"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color text-[30px] leading-[38px] font-semibold text-center mb-3">
              Confirm you number
            </h1>
            <h3 className="text-secondary_color text-xl font-medium mb-10">
              Enter the code we sent to the number ending 3700
            </h3>
            <div className="grid grid-cols-1 gap-10">
              {/* <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                isInputNum
                shouldAutoFocus
                inputStyle="otp-input"
                containerStyle="otp-input-container"
              /> */}
              <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                isInputNum
                shouldAutoFocus
                inputStyle="otp-input"
                containerStyle="otp-input-container"
                renderInput={(props) => <input {...props} />}
              />

              <button
                type="submit"
                className="w-full my-[10px] text-base py-2 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Kirish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal ">
                Shaxsiy sahifangiz bormi?{" "}
                <Link className="cursor-pointer font-medium text-blue_color" to={"/login"}>
                  Kirish
                </Link>
              </p>
            </div>
          </Form>
        </div>

        <div className="auth_img col-span-6">
          <img className="" src={auth} alt="" />
        </div>
      </div>
    </>
  );
};

export default EmailCode;
