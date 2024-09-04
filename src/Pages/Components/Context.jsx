import { createContext, useState } from "react";




const HeaderStateContext = createContext();

const HeaderStateProviderContext = ({children})=>{

    const [sideList , setSideList] = useState(false);

    return(
        <HeaderStateContext.Provider value={
            {sideList, setSideList}
        }>
            {children}
        </HeaderStateContext.Provider>

    )
};

export {HeaderStateContext , HeaderStateProviderContext};







