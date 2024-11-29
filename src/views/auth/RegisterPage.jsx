import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
const RegisterPage = () => {
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
            className="register_form px-24 pt-4 pb-8 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color text-[30px] leading-[38px] font-semibold text-center mb-3">
              Join Our Community
            </h1>
            <div className="grid grid-cols-1 gap-0">
              <Form.Item
              className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    FISH
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.firstname"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="To'liq ism-familiyangiz"
                          className="w-full py-3 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
              className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Foydalanuvchi nomi
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
                          placeholder="Foydalanuvchi nomi"
                          className="w-full py-3 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Email
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.email"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="email"
                        placeholder="user@gmail.com"
                        className="w-full py-3 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Parol
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
                        placeholder="********"
                        className="w-full py-3 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Parolni qayta kiriting
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="LOGIN.repassword"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-3 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              

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

export default RegisterPage;
