import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faList } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import RightMenu from "./Right/RightMenu";
import { HeaderStateContext } from "../Context";
import MenuLeft from "./Left/MenuLeft";

export default function ListIcon() {

    // const [sideList , setSideList] = useState(false);

    const {sideList, setSideList} = useContext(HeaderStateContext);

    const handler = ()=>{
        if(sideList == false){
            setSideList(true);
        }else{
            setSideList(false);
        }
    }


  return (

        <div className="d-block d-md-none">
            <div>
                <FontAwesomeIcon onClick={handler} icon={faList}></FontAwesomeIcon>
            </div>
            <div className="position-relative">
                <div className="sideMenue " style={sideList ? {right:"0px",display:"block"} : {right:"-250px",display:"none"}}>
                    <RightMenu dd = "d-block" />
                    <MenuLeft  cc = "d-block" />
                </div>
            </div>
    </div>

  )
}
