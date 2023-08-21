/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const Contexto = createContext();

function EcoProvider ({children}) {

    const [step, setStep] = useState(0);
    const [totalStep, setTotalSteps] = useState(0);
    const [person, setPerson] = useState('');
    
    return (
        <Contexto.Provider value={{
            step, setStep,
            totalStep, setTotalSteps,
            person, setPerson
        }}>
            {children}
        </Contexto.Provider>
    )
}

function useEco(){
    const eco = useContext(Contexto);
    return eco;
}


export {EcoProvider , useEco}