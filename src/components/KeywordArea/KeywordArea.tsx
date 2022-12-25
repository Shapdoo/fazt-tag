import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";
import Swal from "sweetalert2";

import { KeywordAreaProps, KeywordAreaState } from "./KeywordArea.interface";
import { config } from "../../helpers/utils";
import Alert from "../Alert/Alert";

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
    if(isToggled){
      setKeywords(keywordHashtagNames());
      return
    }

    setKeywords(keywordNames())
  }, [selectedKeywords])

  const keywordNames = () => 
    selectedKeywords.map((keyword) => keyword.name).join(' ');

  const keywordHashtagNames = () =>
    selectedKeywords.map((keyword) => keyword.hashtagKeyword).join(' ');

  const copyToClipboard = () => {
    Swal.fire(config)
    navigator.clipboard.writeText(keywords)
  }

  return (
    <div className="">
      <h2 className="keywords-container-title">🌈 COPY & PUBLISH</h2>
      <div className="keywords-switch-copy">
        <Switch
          rounded={true}
          isToggled={isToggled}
          onHandleToggled={() => setIsToggled(!isToggled)}
        />
        <Button icon="content_copy" handleAction={copyToClipboard}/>
      </div>
      <div className="keywords-selected">
        { isToggled && <Alert alertType="info-message">Now your keywords have #! 😎</Alert> }
        <textarea
          rows={5}
          readOnly={true}
          defaultValue={keywords}
        ></textarea>
      </div>
    </div>
  );
}
