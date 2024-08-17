import codingSkills from "../data/about/CodingSkills.jsx";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const IconSlider = () => {
    const [iconsToShow, setIconsToShow] = useState(6);
    const iconCount = codingSkills.length;
    const totalWidth = 100 * iconCount / iconsToShow;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setIconsToShow(2);
            } else if (window.innerWidth < 1280) {
                setIconsToShow(4);
            } else {
                setIconsToShow(6);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="mt-6 overflow-hidden"
        >
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', `-${totalWidth}%`],
                }}
                transition={{
                    duration: iconCount * 2,
                    ease: 'linear',
                    repeat: Infinity
                }}
            >
                {[...codingSkills, ...codingSkills].map((skill, index) => (
                    <div key={index}
                         className="basis-1/2 md:basis-1/4 xl:basis-1/6 flex-shrink-0 flex justify-around items-center">
                        {skill.icon}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default IconSlider;