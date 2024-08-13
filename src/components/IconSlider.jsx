import codingSkills from "../data/about/CodingSkills.jsx";
import {motion} from "framer-motion";

const IconSlider = () => {
    const iconCount = codingSkills.length;
    const iconsToShow = 6;
    const totalWidth = 100 * iconCount / iconsToShow;

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
                    <div key={index} className="basis-1/6 flex-shrink-0 flex justify-around items-center">
                        {skill.icon}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default IconSlider;