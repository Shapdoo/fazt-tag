import { useState } from "react";
import Switch from "../Switch/Switch";

export default function KeywordArea() {
  const [isToggled, setIsToggled] = useState(false);


  return (
    <div className="">
      <h2 className="keywords-container-title">COPY & PUBLISH</h2>
      <Switch rounded={true} isToggled={isToggled} onHandleToggled={() => setIsToggled(!isToggled)}/>
      <div className="keywords-selected">
        <textarea></textarea>
      </div>
    </div>
  );
}
