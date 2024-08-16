import MainLayout from "../../layouts/MainLayout.jsx";
import PageHeading from "../../components/PageHeading.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {aboutText} from "../../data/about/about.js";
import {personalInfoItems} from "../../data/about/about.js";
import UnderlinedHeading from "../../components/UnderlinedHeading.jsx";
import IconSlider from "../../components/IconSlider.jsx";
import DownloadResumeButton from "../../components/DownloadResumeButton.jsx";

const About = () => {
    const icon = (
        <FontAwesomeIcon className="text-orange-400 text-4xl" icon={faUser}/>
    );

    return (
        <MainLayout>
            <div className="min-h-screen py-12 px-32 bg-page-bg">
                <PageHeading title="About Me" icon={icon}/>
                <div className="flex flex-row mt-14">
                    <article className="basis-2/3">
                        <h3 className="mb-6 font-playfair font-bold text-gray-200 text-2xl">
                            Full Stack Developer
                        </h3>
                        <p className="w-4/5 font-roboto text-lg text-gray-200">
                            {aboutText.text}
                        </p>
                    </article>
                    <article className="basis-1/3">
                        <h3 className="mb-6 font-playfair font-bold text-gray-200 text-2xl">
                            Personal Information
                        </h3>
                        <ul className="space-y-2 font-roboto text-lg text-gray-200">
                            {personalInfoItems.map(({label, value}) => (
                                <li key={label}>
                                    <span
                                        className="font-playfair font-bold underline decoration-orange-400 decoration-2">
                                        {label}
                                    </span>{" "}
                                    : {value}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <DownloadResumeButton/>
                        </div>
                    </article>
                </div>
                <div className="mt-44 text-center">
                    <UnderlinedHeading heading={"coding skills"}/>
                    <IconSlider/>
                </div>
            </div>
        </MainLayout>
    );
};

export default About;