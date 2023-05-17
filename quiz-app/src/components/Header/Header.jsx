import Navbar from "../Navbar/Navbar";
import Registration from "../Registration/Registration";
import registration from "../../assets/Registration.png_860.png";

const Header = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-blue-500 h-[60px]">
        <Navbar />
        <div className="grid grid-cols-2 mt-12">
          <div className="w-[500px]">
            <img src={registration} alt="" className="object-cover" />
          </div>
          <div>
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
