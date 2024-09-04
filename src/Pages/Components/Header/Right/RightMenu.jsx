import { Link } from "react-router-dom";
import ListIcon from "../ListIcon";
import { useContext } from "react";
import { HeaderStateContext } from "../../Context";


export default function RightMenu(props) {

  const {sideList, setSideList} = useContext(HeaderStateContext);

  return (
    <div className={sideList ? props.dd +" d-md-block" : "d-none d-md-block"}>
    <ul className="headerMenu d-md-flex">
        <li><Link className="py-3 p-md-0 " to={'#'}>About</Link></li>
        <li><Link className="py-3 p-md-0" to={'#'}>Contact</Link></li>
    </ul>
</div>
  )
}




