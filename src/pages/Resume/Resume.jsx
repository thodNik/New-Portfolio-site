import MainLayout from "../../layouts/MainLayout.jsx";
import PageHeading from "../../components/PageHeading.jsx";
import {TiDocumentText} from "react-icons/ti";

const Resume = () => {
    const icon = <TiDocumentText className="text-orange-400 text-4xl"/>

    return (
        <MainLayout>
            <div className="h-screen py-12 px-32 bg-page-bg">
                <PageHeading title={"Resume"} icon={icon}/>
            </div>
        </MainLayout>
    );
};

export default Resume;