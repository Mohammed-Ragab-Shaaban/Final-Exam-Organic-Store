import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { HeaderStateContext } from "../../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Cart() {

  const {orderCount,setOrderCount,token,setToken} = useContext(HeaderStateContext);
  const navToBuy = useNavigate();
  const navToLogin = useNavigate();

  const chckToken =()=>{
    let tok = JSON.parse(localStorage.getItem("token"));
    if(tok && tok == token){
      navToBuy("/buyPage")
    }else{
      navToLogin("/login");
    }
  }

  return (
    <div className="d-flex gap-1 align-items-center" style={{color:"var(--bgGreen)"}}>
      <div style={{color:"var(--bgGreen)",cursor:"pointer"}} >
        <FontAwesomeIcon onClick={chckToken} icon={faCartShopping}></FontAwesomeIcon>
      </div>
        <span>{orderCount}</span>
    </div>
  )
}
