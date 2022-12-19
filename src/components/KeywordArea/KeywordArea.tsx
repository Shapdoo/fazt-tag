import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";
import { KeywordAreaProps } from "./KeywordArea.interface";

export default function KeywordArea({ keywords }: KeywordAreaProps) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="">
      <h2 className="keywords-container-title">COPY & PUBLISH</h2>
      <div className="keywords-switch-copy">
        <Switch
          rounded={true}
          isToggled={isToggled}
          onHandleToggled={() => setIsToggled(!isToggled)}
        />
        <Button icon="content_copy"/>
      </div>
      <div className="keywords-selected">
        <textarea rows={10}></textarea>
      </div>
    </div>
  );
}
