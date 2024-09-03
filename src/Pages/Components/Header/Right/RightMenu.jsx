import { Link } from "react-router-dom";


export default function RightMenu() {
  return (
    <div className="d-none d-md-block">
    <ul className="headerMenu">
        <li><Link to={'#'}>About</Link></li>
        <li><Link to={'#'}>Contact</Link></li>
    </ul>
</div>
  )
}
