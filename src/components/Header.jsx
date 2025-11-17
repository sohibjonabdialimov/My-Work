import "./header.css";
const Header = () => {
  return (
    <>
      <header className="bg-[#2F547EFF] py-2 h-[4rem] px-6 text-[#fff] flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-6">
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
            <h2 className="uppercase text-sm">Abdialimov Sohibjon</h2>
            <p className="text-xs">Talaba</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
