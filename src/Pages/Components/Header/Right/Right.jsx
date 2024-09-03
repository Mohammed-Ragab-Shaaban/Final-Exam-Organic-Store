import Cart from "./Cart";
import Profile from "./Profile";
import RightMenu from "./RightMenu";
import TotalPrice from "./TotalPrice";

export default function Right() {
  return (
    <div className="d-flex gap-2 align-items-center">
      <RightMenu />
      <TotalPrice />
      <Cart />
      <Profile />
    </div>
  )
}
