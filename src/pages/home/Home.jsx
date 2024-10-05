import { IoChevronForwardOutline } from "react-icons/io5";
import reactLogo from "../../assets/react.png";
import { FiExternalLink } from "react-icons/fi";

const Home = () => {
  return (
    <section className="w-full h-full p-5 flex items-start justify-center">
      <div className="max-w-3xl w-full">
        <div className="w-full flex flex-col items-center justify-start">
          <img src={reactLogo} className="w-52 aspect-square" />
          <div className="mt-5">
            <h1 className="font-bold text-5xl my-3">DevalHooksDocs</h1>
            <p className="my-2">
              A step by step guide of my react hooks learning journey
            </p>
          </div>

          <div className="flex items-center gap-x-4 mt-4">
            <button className="py-2 px-10 bg-black text-white rounded-md font-semibold flex gap-x-3 items-center">
              <span>My Docs</span>
              <IoChevronForwardOutline/>
            </button>
            <button className="border-2 py-2 px-10 bg-white text-black rounded-md font-semibold flex gap-x-3 items-center">
              <span>Official Docs</span>
              <FiExternalLink/>
            </button>
          </div>
        </div>
      <div className="grid grid-cols-2 gap-x-5 mt-6">
        <div className="w-full aspect-video border border-gray-300 shadow-sm rounded-lg"></div>
        <div className="w-full aspect-video border border-gray-300 shadow-sm rounded-lg"></div>

      </div>
      </div>
    </section>
  );
};

export default Home;
