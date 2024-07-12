import React, {useState} from "react"
import {Link, useLocation} from "react-router-dom";
import {IoLogoGithub} from "react-icons/io";
import {IoLogoLinkedin} from "react-icons/io";
import {FaRegUser} from "react-icons/fa6";
import {TiDocumentText} from "react-icons/ti";
import {PiGraduationCapLight} from "react-icons/pi";

export default function Navbar() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const {pathname} = useLocation();
    const date = new Date()
    const today = date.getFullYear()


    return (
        <>
            {/*  <!-- Component: Basic side navigation menu --> */}
            {/*  <!-- Mobile trigger --> */}
            <button
                title="Side navigation"
                type="button"
                className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
                    isSideNavOpen
                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                        : ""
                }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? " true" : "false"}
                aria-controls="nav-menu-1"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                    ></span>
                </div>
            </button>

            {/*  <!-- Side Navigation --> */}
            <aside
                id="nav-menu-1"
                aria-label="Side navigation"
                className={`fixed top-0 bottom-0 left-0 z-40 flex w-52 flex-col bg-navbar-bg transition-transform lg:translate-x-0 ${
                    isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                }`}
            >
                <nav
                    aria-label="side navigation"
                    className="flex-1 divide-y divide-slate-100 overflow-auto"
                >
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            <li className="px-3 border-b border-gray-600">
                                <Link
                                    to="/"
                                    className={`flex items-center gap-3 rounded p-3 text-navbar-text ${pathname === "/" && "focus:text-gray-200"}`}
                                >
                                    <div className="flex items-center self-center">
                                        <svg
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
                                    </div>
                                    <div
                                        className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className="px-3 border-b border-gray-600">
                                <Link
                                    to="/about"
                                    className={`flex items-center gap-3 rounded p-3 text-navbar-text ${pathname === "/about" && "focus:text-gray-200"}`}
                                    aria-current="page"
                                >
                                    <div className="flex items-center self-center ">
                                        <FaRegUser
                                            style={{
                                                width: "24px",
                                                height: "20px"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li className="px-3 border-b border-gray-600">
                                <Link
                                    to="/resume"
                                    className={`flex items-center gap-3 rounded p-3 text-navbar-text ${pathname === "/resume" && "focus:text-gray-200"}`}
                                >
                                    <div className="flex items-center self-center ">
                                        <TiDocumentText
                                            style={{
                                                width: "24px",
                                                height: "20px"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Resume
                                    </div>
                                </Link>
                            </li>
                            <li className="px-3 border-b border-gray-600">
                                <Link
                                    to="/education"
                                    className={`flex items-center gap-3 rounded p-3 text-navbar-text ${pathname === "/education" && "focus:text-gray-200"}`}
                                >
                                    <div className="flex items-center self-center ">
                                        <PiGraduationCapLight
                                            style={{
                                                width: "24px",
                                                height: "20px"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Education
                                    </div>
                                </Link>
                            </li>
                        </ul>


                    </div>
                </nav>
                <footer className="w-44 absolute bottom-8 left-2 text-navbar-text">
                    <div className="flex justify-evenly items-center">
                        <Link to="https://github.com/thodNik">
                            <IoLogoGithub
                                className="hover:text-gray-200 transition duration-300 ease-in-out"
                                style={{
                                    width: "30px",
                                    height: "45px",
                                }}
                            />
                        </Link>
                        <Link to="https://www.linkedin.com/in/nikolaidisthod">
                            <IoLogoLinkedin
                                className="hover:text-gray-200 transition duration-300 ease-in-out"
                                style={{
                                    width: "30px",
                                    height: "45px",
                                }}
                            />
                        </Link>
                    </div>
                    <div className="mt-5 text-sm text-center">
                        <p>Thodoris Nikolaidis</p>
                        <p>© {today}</p>
                    </div>

                </footer>
            </aside>

            {/*  <!-- Backdrop --> */}
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
                    isSideNavOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
            {/*  <!-- End Basic side navigation menu --> */}
        </>
    )
}
