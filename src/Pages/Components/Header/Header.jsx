
import Left from "./Left/Left";
import ListIcon from "./ListIcon";
import Right from "./Right/Right";

export default function Header() {
  return (
    <div>
        <div className="container d-flex justify-content-between align-items-center gap-2">
            <Left />
            <Right />
            <ListIcon />
        </div>
    </div>
  )
}
