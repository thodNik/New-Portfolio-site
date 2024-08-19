import {useState} from "react"
import {useLocation} from "react-router-dom";
import navLinks from "../data/navbar/NavLinks.jsx";
import socials from "../data/navbar/Socials.jsx";
import NavLinkList from "./NavLinkList.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Navbar() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const {pathname} = useLocation();

    return (
        <>
            {/*  <!-- Component: Basic side navigation menu --> */}
            {/*  <!-- Mobile trigger --> */}
            <button
                title="Side navigation"
                type="button"
                className={`visible fixed right-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-navbar-text opacity-100 md:hidden ${
                    isSideNavOpen
                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                        : ""
                }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? "true" : "false"}
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
                className={`fixed top-0 bottom-0 left-0 z-40 flex xl:w-52 flex-col bg-navbar-bg transition-transform md:translate-x-0 ${
                    isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                }`}
            >
                <nav
                    aria-label="side navigation"
                    className="flex-1 divide-y divide-slate-100 overflow-auto font-playfair"
                >
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            {navLinks.map(({name, href, icon}, i) => (
                                <div key={i}>
                                    <NavLinkList
                                        name={name}
                                        href={href}
                                        icon={icon}
                                        pathname={pathname}
                                        setIsSideNavOpen={(value) => setIsSideNavOpen(value)}
                                    />
                                </div>
                            ))}
                        </ul>
                    </div>
                </nav>
                <footer className="xl:w-44 absolute bottom-8 inset-x-2 xl:inset-x-4 text-navbar-text">
                    <div className="flex justify-evenly items-center">
                        {socials.map(({href, icon}, i) => (
                            <div key={i}>
                                <SocialLinks
                                    href={href}
                                    icon={icon}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 text-sm text-center font-roboto">
                        <p>Thodoris Nikolaidis</p>
                        <p>© {new Date().getFullYear()}</p>
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
