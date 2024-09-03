import { Link } from "react-router-dom";
import '../Header.css'

export default function MenuLeft() {
  return (
    <div className="d-none d-md-block">
        <ul className="headerMenu">
            <li><Link to={'#'}>Everything</Link></li>
            <li><Link to={'#'}>Groceries</Link></li>
            <li><Link to={'#'}>Juice</Link></li>
        </ul>
    </div>
  )
}
