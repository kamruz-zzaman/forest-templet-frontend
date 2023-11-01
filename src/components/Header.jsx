import { Link } from "react-router-dom";
import Logo from "../assets/image.png";
const Header = () => {
  return (
    <div className=" flex justify-center items-center mb-3 mt-4">
      <div className="mr-20">
        <img width={179} height={167} src={Logo} alt="" />
      </div>
      <div className="text-center text-primary">
        <h1 className="text-[40px]">Forest Watch</h1>
        <div className="flex justify-center items-center text-[16px]">
          <Link
            to={"/"}
            className="pr-5 mr-5 font-bold border-r border-primary cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/identify-illegal-timber"
            className="pr-5 mr-5 font-bold border-r border-primary cursor-pointer"
          >
            how to identify illegal timber
          </Link>
          <Link to="/admin" className="font-bold cursor-pointer">
            Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
