import { Link } from "react-router-dom";
import select1 from "../../assets/images/select1.png";
import select2 from "../../assets/images/select2.png";
import "./auth.css";
const Select = () => {
  return (
    <div className="flex items-center justify-center h-[100dvh] gap-[50px]">
      <Link
        className="w-[480px] text-center flex flex-col items-center justify-center shadow-[0px_32px_48px_-16px_#00000033] p-[48px_64px] rounded-[24px]"
        to="/register"
      >
        <img className="h-[240px] w-[240px]" src={select1} alt="" />
        <p className="mt-[32px] text-center text-3xl font-semibold">O'quvchi sifatida ro'yxatdan o'tish</p>
      </Link>
      <br />
      <Link className="w-[480px] shadow-[0px_32px_48px_-16px_#00000033] p-[48px_64px] rounded-[24px]" to="/register">
        <img className="h-[240px] w-[333px]" src={select2} alt="" />
        <p className="mt-[32px] text-center text-3xl font-semibold">O'qituvchi sifatida ro'yxatdan o'tish</p>
      </Link>
    </div>
  );
};

export default Select;
