/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { questions } from "../constant";
const Contexto = createContext();

function EcoProvider ({children}) {

    const [step, setStep] = useState(0);
    let questionsLength = questions.length;
    const [totalSteps, setTotalSteps] = useState(questionsLength);
    const [person, setPerson] = useState('');
    const [selected, setSelected] = useState({})
    const [points, setPoints] = useState(0);
    const [error, setError] = useState(false);
    
    return (
        <Contexto.Provider value={{
            step, setStep,
            totalSteps, setTotalSteps,
            person, setPerson,
            selected, setSelected,
            points, setPoints,
            error, setError
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