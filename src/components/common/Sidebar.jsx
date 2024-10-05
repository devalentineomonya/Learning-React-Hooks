import { GrStarOutline } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { sidebarLinks } from "./sidebarLinks";
const Sidebar = () => {
  return (
    <aside className="h-fit min-h-[calc(100vh-56px)]  pl-4 py-2">
      <ul>
        <li className="flex items-center justify-between gap-x-1 font-medium mt-4 text-sm">
          <div className="flex items-center gap-x-1">
            <div className="h-6 aspect-square rounded-sm bg-gray-200 flex items-center justify-center">
              <GrStarOutline />
            </div>
            <Link to="https://react.dev/reference/react/hooks">
              Official Documentation
            </Link>
          </div>
          <FiExternalLink />
        </li>

        <li className="flex items-center justify-between gap-x-1 font-medium mt-4 text-sm">
          <div className="flex items-center gap-x-1">
            <div className="h-6 aspect-square rounded-sm bg-gray-200 flex items-center justify-center">
              <GrStarOutline />
            </div>
            <Link to="https//github.com/devalentineomonya">
              Explorer on github
            </Link>
          </div>
          <FiExternalLink />
        </li>

        <li className="flex items-center justify-between gap-x-1 font-medium mt-4 text-sm">
          <div className="flex items-center gap-x-1">
            <div className="h-6 aspect-square rounded-sm bg-gray-200 flex items-center justify-center">
              <GrStarOutline />
            </div>
            <Link to="https://devalentine.me">My Portflio</Link>
          </div>
          <FiExternalLink />
        </li>
      </ul>
      {sidebarLinks?.map((category) => (
        <div key={category.category} className="mt-8">
          <h2 className="font-semibold uppercase text-base">{category.category}</h2>
          <ul>
            {category.hooks.map((hook) => (
              <li key={hook.name} className="text-sm font-medium my-2">
                <Link to={hook.link}>{hook.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
