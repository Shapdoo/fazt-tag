import { ChangeEvent, FormEvent, useState } from "react";
import { FormState, FromProps } from "./Form.interfaces";

import Alert from "../Alert/Alert";
import { Keyword } from "../../models/interfaces";
import { generateId } from "../../helpers/utils";

const defaultStateKeyword: Keyword = {
  name: "",
  hashtagKeyword: "",
  id: "",
  flag: false,
};

function Form({ setKeywords }: FromProps) {
  const [keyword, setKeyword] =
    useState<FormState["keyword"]>(defaultStateKeyword);
  const [validation, setValidation] = useState<FormState["error"]>(false);

  const handleSetKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const keyword: Keyword = {
      name: value,
      hashtagKeyword: `#${value}`,
      id: generateId(),
      flag: false,
    };
    setKeyword(keyword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (keyword.name === "") {
      console.log("error displayed");
      setValidation(true);
      return;
    }

    setKeywords(keyword);
    setValidation(false);
    setKeyword(defaultStateKeyword);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {validation && (
        <Alert alertType={"error-message"}>
          Yo need to enter some keywords right here! 👀
        </Alert>
      )}
      <div className="enter-keywords contenedor">
        <div className="keyword-control">
          <input
            type="text"
            placeholder="Amazing keyword right here! ✨"
            value={keyword.name}
            maxLength={10}
            onChange={handleSetKeyword}
          />
        </div>

        <div className="add-keyword">
          <button className="btn-icon btn-primary shadow">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
