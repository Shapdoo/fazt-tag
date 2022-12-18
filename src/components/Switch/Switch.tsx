import { SwitchProps } from "./Switch.interface";
import cx from "classnames";

export default function Switch({
  rounded = false,
  isToggled,
  onHandleToggled,
}: SwitchProps) {

  const sliderCX = cx("slider", {
    rounded: rounded,
  });
  
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onHandleToggled} />
      <span className={sliderCX}></span>
    </label>
  );
}
