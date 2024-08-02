import React from 'react';
import {Link} from "react-router-dom";

const NavLinkList = ({name, href, icon, pathname}) => {
    return (
        <li className="px-3 border-b border-gray-600">
            <Link
                to={href}
                className={`flex items-center gap-3 rounded p-3 ${pathname === href ? "text-gray-200" : "text-navbar-text"}`}
            >
                <div className="flex items-center self-center">
                    {icon}
                </div>
                <div
                    className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    {name}
                </div>
            </Link>
        </li>
    );
};

export default NavLinkList;