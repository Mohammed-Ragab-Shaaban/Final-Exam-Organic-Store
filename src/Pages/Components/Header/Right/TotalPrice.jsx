
import { useContext, useEffect, useState } from "react";
import { HeaderStateContext } from "../../Context";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function TotalPrice() {

  const params= useParams();
  const {orderCount,setOrderCount} = useContext(HeaderStateContext);
  const { price , setPrice} = useContext(HeaderStateContext);
  const [productPrice, setProductPrice] = useState([]);
 

  return (
    <div>L.E {price}</div>
  )
}
