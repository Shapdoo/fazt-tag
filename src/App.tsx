import { useState } from "react";

import { AppState } from "./App.interfaces";
import { Keyword } from "./models/interfaces";

import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
  const [keywords, setKeywords] = useState<AppState["keywords"]>([]);
  const [newFlag, setNewFlag] = useState(true);

  const handleNewKeyword = (keyword: Keyword) => {
    setKeywords([...keywords, keyword]);
  };

  const handleNewFlag = (keyword: Keyword) => {
    setNewFlag(!newFlag);
    keyword.flag = newFlag;
  };

  const arrayIsEmpty: boolean = keywords.length === 0;

  return (
    <>
      <Header setKeywords={handleNewKeyword} />
      <main className="keywords-container contenedor">
        <h2 className="keywords-container-title">
          {arrayIsEmpty
            ? "😎 Keywords are gonna list here!"
            : "✨ Select the keywords that you want to copy!"}
        </h2>
        {!arrayIsEmpty && (
          <List keywords={keywords} handleNewFlag={handleNewFlag} />
        )}
      </main>
      <div className="keywords-set"></div>
      <footer className="footer">{/* footer */}</footer>
    </>
  );
}

export default App;
