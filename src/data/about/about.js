import {getAge} from "../../utilities/getAge.js";

export const aboutText =
    {
        text: "I am a Full Stack Developer with strong organizational skills and extensive experience in collaborative team environments. " +
            "I excel at meeting assigned goals, working effectively under pressure, and I am a quick learner. " +
            "I am always eager to explore new professional opportunities that will enhance my skills and contribute to my professional growth.",
    };

export const personalInfoItems = [
    {
        label: "Name",
        value: "Thodoris Nikolaidis"
    },
    {
        label: "Age",
        value: `${getAge("1985/07/24")} years`,
    },
    {
        label: "Residence",
        value: "Athens, Greece"
    },
    {
        label: "Email",
        value: "thodorisnik@gmail.com"
    },
    {
        label: "Phone",
        value: "(+030) 6945265331"
    },
];