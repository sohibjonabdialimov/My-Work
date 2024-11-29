import Header from "../components/Header";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <div className="px-[1.6rem] min-h-[100dvh] mb-5">
        <Header />
        <div className="px-6 rounded-2xl mx-auto">{children}</div>
      </div>
    </>
  );
};

export default DesktopLayout;
