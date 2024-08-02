import {FaRegUser} from "react-icons/fa6";
import {TiDocumentText} from "react-icons/ti";
import {PiGraduationCapLight} from "react-icons/pi";

export default [
    {
        name: "Home",
        href: "/",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-label="Dashboard icon"
            role="graphics-symbol"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    },
    {
        name: "About",
        href: "/about",
        icon: <FaRegUser
            style={{
                width: "24px",
                height: "20px"
            }}
        />,
    },
    {
        name: "Resume",
        href: "/resume",
        icon: <TiDocumentText
            style={{
                width: "24px",
                height: "20px"
            }}
        />,
    },
    {
        name: "Education",
        href: "/education",
        icon: <PiGraduationCapLight
            style={{
                width: "24px",
                height: "20px"
            }}
        />,
    },
];