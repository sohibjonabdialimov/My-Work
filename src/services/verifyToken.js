import axiosT from "./axios";


export const verifyToken = async (navigate) => {
  try {
    const token = localStorage.getItem("accessToken");

    // if (!token) throw new Error("Token mavjud emas");

    // await axiosT.post("/accounts/TokenVerify", {
    //   token
    // });
  } catch (error) {
    // console.error("Token yaroqsiz yoki muddati tugagan", error);
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // navigate("/login");
  }
};