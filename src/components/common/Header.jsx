import { BsSearch } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import logo from "../../assets/logo.png"
const Header = () => {
  return (
    <header className="flex justify-center items-center h-14 py-4 border border-b-gray-200 ">
        <div className="max-w-[1600px] flex items-center justify-between w-full">

      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 aspect-square" />
        <p>React Hooks</p>
      </div>
      <div className="flex items-center gap-x-2 bg-gray-200 rounded-md max-w-[450px] px-2 w-full h-full py-1.5 ">
        <BsSearch size={14} className="text-gray-500"/>
        <input placeholder="Type to search..." className="bg-transparent border-none outline-none text-gray-600 w-full" />
      </div>
      <div>
        <FiSun/>
      </div>
        </div>
    </header>
  );
};

export default Header;
