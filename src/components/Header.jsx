import Logo from "../assets/compass_icon_bg.webp";
const Header = () => {
  return (
    <div className=" flex justify-center items-center mb-3 mt-1">
      <div className="mr-20">
        <img width={179} height={167} src={Logo} alt="" />
      </div>
      <div className="text-center text-primary">
        <h1 className="text-[40px]">StudentCompass</h1>
        <div className="flex justify-center items-center text-[16px]">
          <p className="pr-5 mr-5 font-bold border-r border-primary cursor-pointer">
            Home
          </p>
          <p className="pr-5 mr-5 font-bold border-r border-primary cursor-pointer">
            My Project
          </p>
          <p className="font-bold cursor-pointer">Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
