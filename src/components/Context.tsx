import { useState,createContext } from "react"

export const TicketContext = createContext<any | null>(null)
type StateType={
    image:string
    fullName:string
    gitName:string
    mail:string
}




export default function Context({children}:{children:React.ReactNode}){
    const [state,setState] = useState<StateType>({
        image:'',
        fullName:'',
        gitName:'',
        mail:''  
    })
    return (
        <TicketContext.Provider value={{state,setState}}>
            {children}
        </TicketContext.Provider>
    )
}