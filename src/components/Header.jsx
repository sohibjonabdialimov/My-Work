import { Select } from "antd";

import vector1 from "../assets/images/vector1.svg";
import vector2 from "../assets/images/vector2.svg";
import filter from "../assets/images/filter.svg";
import { NavLink } from "react-router-dom";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
import { useState } from "react";
import "./styles.css";

const { Option } = Select;
const Header = () => {
  const [searchText, setSearchText] = useState("");

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <header className="bg-[#2F547EFF] text-[#fff] flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex gap-4 items-center">
            <img className="w-[11px] h-[17px]" src={vector1} alt="" />
            <img className="w-[11px] h-[17px]" src={vector2} alt="" />
          </div>
          <div className="nav-search rounded-[100px] border-[2px] border-solid border-[#1E1E1E1A] w-[20rem] p-[0.5rem_1rem] bg-[#F1F2F4] flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
            <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
            <input
              type="text"
              value={searchText}
              placeholder={"Qidirish..."}
              onChange={(e) => handleSearchInput(e)}
              className="header_search bg-[#F1F2F4] w-full outline-none border-none text-[#758195] text-sm placeholder:text-[#1E1E1E99]"
            />
            <div className="header_filter relative w-[24px] h-[24px]">
              <img className="w-full h-full" src={filter} alt="" />
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <NavLink className="text-main_color font-medium" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-main_color font-medium" to={"/services"}>
            Services
          </NavLink>
          <NavLink className="text-main_color font-medium" to={"/pricing"}>
            Pricing
          </NavLink>
          <div
            onClick={toggleFullScreen}
            className="cursor-pointer w-[44px] h-[44px] bg-[#E9F2FF] rounded-full flex items-center justify-center"
          >
            <i className="fa-solid fa-expand text-[1.2rem]"></i>
          </div>
          <Select
            defaultValue={"uzb"}
            style={{
              width: 100,
            }}
            onChange={(value) => console.log(`Selected language ${value}`)}
            placeholder="Select a country"
          >
            <Option value="uzb">
              <div className="flex items-center gap-2">
                <img src={uzb} alt="USA" style={{ width: 16 }} />
                UZB
              </div>
            </Option>
            <Option value="rus">
              <div className="flex items-center gap-2">
                <img src={rus} alt="Canada" style={{ width: 16 }} />
                RUS
              </div>
            </Option>
            <Option value="eng">
              <div className="flex items-center gap-2">
                <img src={eng} alt="UK" style={{ width: 16 }} />
                ENG
              </div>
            </Option>
          </Select>
        </nav>
      </header>
    </>
  );
};

export default Header;
