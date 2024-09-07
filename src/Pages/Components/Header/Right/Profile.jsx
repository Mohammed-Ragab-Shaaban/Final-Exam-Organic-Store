import { Link } from "react-router-dom";


export default function Profile() {

  const sty ={
    textDecoration: "none",
    padding : "2px 10px",
  }


  return (
    <div className="d-none d-md-block ">
       <button className="btnsty"> <Link style={sty} to={"/login"}>login</Link></button> 
       <button className="btnsty"> <Link style={sty} to={"/register"}>Register</Link></button>  
    </div>
  )
}
