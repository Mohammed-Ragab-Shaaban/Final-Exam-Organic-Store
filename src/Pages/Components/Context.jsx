import { createContext, useState } from "react";




const HeaderStateContext = createContext();

const HeaderStateProviderContext = ({children})=>{

    const [sideList , setSideList] = useState(false);
    const [orderCount , setOrderCount] =  useState(0);
    const [price , setPrice] =  useState(0);
    const [token,setToken] = useState("");
    const [showSingleProduct, setShowSingleProduct] = useState();

    return(
        <HeaderStateContext.Provider value={
            {sideList, setSideList,orderCount,setOrderCount,price , setPrice ,token,setToken,showSingleProduct, setShowSingleProduct}
        }>
            {children}
        </HeaderStateContext.Provider>

    )
};

export {HeaderStateContext , HeaderStateProviderContext};







