import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";
import { KeywordAreaProps, KeywordAreaState } from "./KeywordArea.interface";

export default function KeywordArea({ selectedKeywords }: KeywordAreaProps) {
  const [isToggled, setIsToggled] = useState<KeywordAreaState["isToggled"]>(false);
  const [keywords, setKeywords] = useState<KeywordAreaState["keywords"]>("");

  useEffect(() => {
    if (isToggled) {
      setKeywords(keywordHashtagNames())
    }else{
      setKeywords(keywordNames())
    }
  }, [isToggled]);

  useEffect( () => {
    setKeywords(keywordNames());
  }, [selectedKeywords])

  const keywordNames = () => 
    selectedKeywords.map((keyword) => keyword.name).join(' ');

  const keywordHashtagNames = () =>
    selectedKeywords.map((keyword) => keyword.hashtagKeyword).join(' ');

  
  return (
    <div className="">
      <h2 className="keywords-container-title">COPY & PUBLISH</h2>
      <div className="keywords-switch-copy">
        <Switch
          rounded={true}
          isToggled={isToggled}
          onHandleToggled={() => setIsToggled(!isToggled)}
        />
        <Button icon="content_copy" />
      </div>
      <div className="keywords-selected">
        <textarea
          rows={5}
          readOnly={true}
          defaultValue={keywords}
        ></textarea>
      </div>
    </div>
  );
}
