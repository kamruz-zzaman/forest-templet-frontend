import Logo from "../assets/compass_icon_bg.webp";
const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">StudentCompass</h1>
        <div className="flex justify-center items-center">
          <p>Home</p>
          <p>My Project</p>
          <p>Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
