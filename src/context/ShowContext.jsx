import {createContext, useContext, useState} from "react";

const ShowContext = createContext();
const ShowUpdateContext = createContext();

export const useShow = () => useContext(ShowContext);
export const useShowUpdate = () => useContext(ShowUpdateContext);

export const ShowProvider = ({children}) => {
    const [show, setShow] = useState(true);

    const updateShow = (value) => setShow(value);

    return (
        <ShowContext.Provider value={show}>
            <ShowUpdateContext.Provider value={updateShow}>
                {children}
            </ShowUpdateContext.Provider>
        </ShowContext.Provider>
    )
}