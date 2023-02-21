import { createContext, useEffect, useState } from "react";

const BasicInfoContext = createContext()

const BasicInfoContextProvider = ({children}) => {
    const [info, setInfo] = useState({})
    useEffect(() => {
        setInfo({
            name: "Eddy A. Espinal",
            birthday: "September 22, 1990",
            occupation: "Web Developer",
            courses: ["HTML", "CSS", "JavaScript", "React", "C#", "SQL"]
        })
    }, [])

    return(
        <BasicInfoContext.Provider value={info}>
            {children}
        </BasicInfoContext.Provider>
    )
}

export { BasicInfoContext, BasicInfoContextProvider}