import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Left from "./Left/Left";
import Right from "./Right/Right";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
        <div className="container d-flex justify-content-between align-items-center gap-2">
            <Left />
            <Right />
            <FontAwesomeIcon className="d-block d-md-none" icon={faList}></FontAwesomeIcon>
        </div>
    </div>
  )
}
