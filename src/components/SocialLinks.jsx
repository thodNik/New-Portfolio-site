import React from 'react';
import {Link} from "react-router-dom";

const SocialLinks = ({href, icon}) => {
    return (
        <Link to={href}>
            {icon}
        </Link>
    );
};

export default SocialLinks;