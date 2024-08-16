import React from "react";

const UnderlinedHeading = ({heading}) => {
    return (
        <h3 className="uppercase px-1.5 py-0.5 relative inline-block font-playfair font-bold text-gray-200 text-2xl border-b-2 border-orange-400">
            <span className="before:content-[''] absolute w-0.5 h-2 bottom-0 left-0 bg-orange-400"></span>
            {heading}
            <span className="after:content-[''] absolute w-0.5 h-2 bottom-0 right-0 bg-orange-400"></span>
        </h3>
    );
};

export default UnderlinedHeading;