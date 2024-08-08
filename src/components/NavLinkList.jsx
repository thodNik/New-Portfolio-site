import {useNavigate} from "react-router-dom";
import {useShowUpdate} from "../context/ShowContext.jsx";

const NavLinkList = ({name, href, icon, pathname}) => {
    const navigate = useNavigate();
    const updateShow = useShowUpdate();

    const handleClick = async () => {
        await updateShow(false);

        setTimeout(() => {
            navigate(href);
            updateShow(true);
        }, 300);
    };

    return (
        <li className="px-3 border-b border-gray-600">
            <button
                className={`flex items-center gap-3 rounded p-3 ${pathname === href ? "text-gray-200" : "text-navbar-text"}`}
                onClick={handleClick}
            >
                <div className="flex items-center self-center">
                    {icon}
                </div>
                <div
                    className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    {name}
                </div>
            </button>
        </li>
    );
};

export default NavLinkList;