import MainLayout from "../../layouts/MainLayout.jsx";
import PageHeading from "../../components/PageHeading.jsx";
import {PiGraduationCapLight} from "react-icons/pi";
import ExperienceContent from "../../components/ExperienceContent.jsx";
import {educations, languages} from "../../data/education/education.js";
import UnderlinedHeading from "../../components/UnderlinedHeading.jsx";

const Education = () => {
    const icon = <PiGraduationCapLight className="text-orange-400 text-4xl"/>

    return (
        <MainLayout>
            <div className="min-h-screen p-4 lg:py-12 lg:px-32 bg-page-bg">
                <PageHeading title={"Education"} icon={icon}/>
                <div className="mt-14 text-center">
                    <UnderlinedHeading heading={"Degrees & Cert."}/>
                </div>
                <div className="grid 2xl:grid-cols-2 mt-14 gap-8">
                    {educations.map(({role, company, description, from, to}) => (
                        <div className="p-4 lg:px-24">
                            <ExperienceContent
                                key={role}
                                role={role}
                                company={company}
                                description={description}
                                from={from}
                                to={to}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-6 sm:mt-14 mb-6 sm:mb-0 text-center">
                    <UnderlinedHeading heading={"Languages"}/>
                    <ul className="flex mt-4 text-gray-200 text-xl font-semibold justify-center items-center">
                        {languages.map(({value}, i) =>
                            <li key={i} className="mr-1">
                                {i > 0 ? `, ${value}` : value}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Education;