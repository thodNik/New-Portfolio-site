import MainLayout from "../../layouts/MainLayout.jsx";
import PageHeading from "../../components/PageHeading.jsx";
import {PiGraduationCapLight} from "react-icons/pi";

const Education = () => {
    const icon = <PiGraduationCapLight className="text-orange-400 text-4xl"/>

    return (
        <MainLayout>
            <div className="h-screen py-12 px-32 bg-page-bg">
                <PageHeading title={"Education"} icon={icon}/>
            </div>
        </MainLayout>
    );
};

export default Education;