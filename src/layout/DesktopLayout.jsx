import Header from "../components/Header";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <>
        <Header />
        <div className="px-6 rounded-2xl mx-auto">{children}</div>
      </>
    </>
  );
};

export default DesktopLayout;
