import { createContext, useState } from "react";




const HeaderStateContext = createContext();

const HeaderStateProviderContext = ({children})=>{

    const [sideList , setSideList] = useState(false);
    const [orderCount , setOrderCount] =  useState(0);
    const [price , setPrice] =  useState(0);
    const [token,setToken] = useState("");
    const [showSingleProduct, setShowSingleProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [TotalPrice, setTotalPrice]= useState(0);
    const [Totalcount,setTotalCount] = useState(0);
    const [groceries, setGroceries] = useState([]);
    const [juices, setjuices] = useState([]);


    return(
        <HeaderStateContext.Provider value={
            {sideList, setSideList,orderCount,setOrderCount,price ,
             setPrice ,token,setToken,showSingleProduct,
              setShowSingleProduct,selectedProduct, setSelectedProduct,
              TotalPrice, setTotalPrice,Totalcount,setTotalCount,
              groceries, setGroceries,juices, setjuices}
        }>
            {children}
        </HeaderStateContext.Provider>

    )
};

export {HeaderStateContext , HeaderStateProviderContext};







