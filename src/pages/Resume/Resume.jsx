import MainLayout from "../../layouts/MainLayout.jsx";
import PageHeading from "../../components/PageHeading.jsx";
import {TiDocumentText} from "react-icons/ti";
import UnderlinedHeading from "../../components/UnderlinedHeading.jsx";
import {experiences} from "../../data/resume/resume..js";
import ExperienceContent from "../../components/ExperienceContent.jsx";

const Resume = () => {
    const icon = <TiDocumentText className="text-orange-400 text-4xl"/>

    return (
        <MainLayout>
            <div className="min-h-screen py-12 px-32 bg-page-bg">
                <PageHeading title={"Resume"} icon={icon}/>
                <div className="mt-14 text-center">
                    <UnderlinedHeading heading={"Experience"}/>
                </div>
                <div className="grid grid-cols-2 mt-14 gap-8">
                    {experiences.map(({role, company, description, from, to}) => (
                        <div className="px-24">
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
            </div>
        </MainLayout>
    );
};

export default Resume;