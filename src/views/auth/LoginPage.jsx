import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
const LoginPage = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const submitHandler = async () => {
    // const login = getValues().LOGIN;
    // axiosT
    //   .post("/accounts/Token", login)
    //   .then(({ data }) => {
    //     localStorage.setItem("accessToken", data.access_token);
    //     localStorage.setItem("refreshToken", data.refresh_token);
    //     messageApi.open({
    //       type: "info",
    //       content: "Tizimga muvaffaqqiyatli kirildi",
    //     });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     messageApi.open({
    //       type: "error",
    //       content: "Bunday login parol mavjud emas",
    //     });
    //   });
  };
  return (
    <>
      {contextHolder}

      <div className="grid grid-cols-12 p-6 w-full gap-6">
        <div className="col-span-6 mx-[60px] flex justify-center items-center">
          <Form
            layout="vertical"
            className="px-24 py-16 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color text-[30px] leading-[38px] font-semibold text-center mb-5">
              Join Our Community
            </h1>
            <div className="grid grid-cols-1 gap-4">
              <Form.Item
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Username
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Username"
                          className="w-full py-3 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className=""
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Password
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.password"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>

              <button
                type="submit"
                className="w-full text-base py-2 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Kirish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal">
                Shaxsiy sahifangiz yo'qmi? <Link className="cursor-pointer text-blue_color" to={"/register"}>Ro'yxatdan o'ting</Link>
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

export default LoginPage;
