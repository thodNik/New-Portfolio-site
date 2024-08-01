import React, {useEffect, useRef, useState} from "react"
import {Link, useLocation} from "react-router-dom";
import {IoLogoGithub} from "react-icons/io";
import {IoLogoLinkedin} from "react-icons/io";
import {FaRegUser} from "react-icons/fa6";
import {TiDocumentText} from "react-icons/ti";
import {PiGraduationCapLight} from "react-icons/pi";

export default function Navbar() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const eduRef = useRef(null);
    const {pathname} = useLocation();
    const date = new Date()
    const today = date.getFullYear()

    useEffect(() => {
        switch (pathname) {
            case "/":
                homeRef.current?.focus();
                break;
            case "/about":
                aboutRef.current?.focus();
                break;
            case "/resume":
                resumeRef.current?.focus();
                break;
            case "/education":
                eduRef.current?.focus();
                break;
        }
    }, [pathname]);

    const navLinks = [
        {
            name: "Home",
            pathname: "/",
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
            </svg>,
            ref: homeRef,
        },
        {
            name: "About",
            pathname: "/about",
            icon: <FaRegUser
                style={{
                    width: "24px",
                    height: "20px"
                }}
            />,
            ref: aboutRef,
        },
        {
            name: "Resume",
            pathname: "/resume",
            icon: <TiDocumentText
                style={{
                    width: "24px",
                    height: "20px"
                }}
            />,
            ref: resumeRef,
        },
        {
            name: "Education",
            pathname: "/education",
            icon: <PiGraduationCapLight
                style={{
                    width: "24px",
                    height: "20px"
                }}
            />,
            ref: eduRef,
        },
    ];

    const socials = [
        {
            href: "https://github.com/thodNik",
            icon: <IoLogoGithub
                className="hover:text-gray-200 transition duration-300 ease-in-out"
                style={{
                    width: "30px",
                    height: "45px",
                }}
            />
        },
        {
            href: "https://www.linkedin.com/in/nikolaidisthod",
            icon: <IoLogoLinkedin
                className="hover:text-gray-200 transition duration-300 ease-in-out"
                style={{
                    width: "30px",
                    height: "45px",
                }}
            />
        },
    ];

    const navLinkList = navLinks.map(link => (
        <li className="px-3 border-b border-gray-600">
            <Link
                to={link.pathname}
                ref={link.ref}
                className={`flex items-center gap-3 rounded p-3 text-navbar-text ${pathname === link.pathname && "focus:text-gray-200 focus:outline-none"}`}
            >
                <div className="flex items-center self-center">
                    {link.icon}
                </div>
                <div
                    className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    {link.name}
                </div>
            </Link>
        </li>
    ))

    const socialLinks = socials.map(social => (
        <Link to={social.href}>
            {social.icon}
        </Link>
    ));

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
                    className="flex-1 divide-y divide-slate-100 overflow-auto font-playfair"
                >
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            {navLinkList}
                        </ul>
                    </div>
                </nav>
                <footer className="w-44 absolute bottom-8 left-2 text-navbar-text">
                    <div className="flex justify-evenly items-center">
                        {socialLinks}
                    </div>
                    <div className="mt-5 text-sm text-center font-roboto">
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
