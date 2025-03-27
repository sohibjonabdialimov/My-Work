import "./header.css";

const Header = () => {
  return (
    <>
      <header className="bg-[#2F547EFF] py-2 h-[4rem] px-6 text-[#fff] flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-6">
          {/* <div className="nav-search rounded-[100px] border-[2px] border-solid border-[#1E1E1E1A] w-[20rem] p-[0.5rem_1rem] bg-[#F1F2F4] flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
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
          </div> */}
          <div className="flex items-center focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)] border border-[#EEEEEE] px-3 py-1 bg-[#F5F5F5] flex-1 rounded-[10px]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Qidiruv"
              className="w-full outline-none bg-[#F5F5F5] text-[#333] p-[6px_15px]"
            />
            <i className="fa-solid fa-magnifying-glass text-[#0054AE]"></i>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[#fff]">
          <i className="fa-solid fa-user text-[#0054AE]"></i>
          </div>
          <div>
            <h2 className="uppercase text-sm">Jamolov X</h2>
            <p className="text-xs">Doktarant</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
