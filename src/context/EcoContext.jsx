/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { questions } from "../constant";
const Contexto = createContext();

function EcoProvider ({children}) {

    const [step, setStep] = useState(0);
    let questionsLength = questions.length;
    const [totalSteps, setTotalSteps] = useState(questionsLength);
    const [person, setPerson] = useState('');
    const [points , setPoints] = useState([])
    
    return (
        <Contexto.Provider value={{
            step, setStep,
            totalSteps, setTotalSteps,
            person, setPerson,
            points, setPoints
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