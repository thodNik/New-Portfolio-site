const ExperienceContent = ({key, role, company, description, from, to}) => {
    return (
        <div key={key} className="relative text-gray-200 pl-8 py-8 pr-4 my-8">
            <span className="absolute w-0.5 h-full top-0 -left-2.5 bg-orange-400">
                <span
                    className="absolute before:content-[''] size-2.5 border-2 border-orange-400 rounded-full -top-2.5 -left-1"></span>
               <span
                   className="absolute after:content-[''] size-2.5 border-2 border-orange-400 rounded-full -bottom-2.5 -left-1"></span>
            </span>

            <h3 className="uppercase font-playfair text-lg font-bold">{role}</h3>
            <h4 className="uppercase font-roboto text-orange-400 text-sm">{company}</h4>
            <p className="font-roboto mt-4">{description}</p>

            <span className="absolute h-full top-0 -left-2.5">
                <span className="absolute text-nowrap -top-[17px] left-3 xl:-left-[71px]">{to}</span>
                    <span className="absolute text-nowrap -bottom-[16px] left-3 xl:-left-[71px]">{from}</span>
            </span>
        </div>
    );
};

export default ExperienceContent;