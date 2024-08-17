import {motion, AnimatePresence} from "framer-motion";
import {useShow} from "../context/ShowContext.jsx";

const MainLayout = ({children}) => {
    const show = useShow();

    return (
        <AnimatePresence mode="wait">
            {show && (
                <motion.main
                    className="lg:pl-28 2xl:pl-52"
                    key="main-layout"
                    initial={{opacity: 0, scale: 0.75}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.85}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                >
                    {children}
                </motion.main>
            )}
        </AnimatePresence>
    );
};

export default MainLayout;