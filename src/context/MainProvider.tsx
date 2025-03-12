import { createContext } from "react";

export const mainContext = createContext({})


const MainProvider = ({children}:{children: React.ReactNode}) => {
   
    return ( 
        <mainContext.Provider value={{}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;