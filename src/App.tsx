import { useState } from "react";

import { AppState } from "./App.interfaces";
import { Keyword } from "./models/interfaces";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import KeywordArea from "./components/KeywordArea/KeywordArea";

function App() {
  const [keywords, setKeywords] = useState<AppState["keywords"]>([]);

  const handleNewKeyword = (keyword: Keyword) => {
    setKeywords([...keywords, keyword]);
  };

  const handleNewFlag = (id: string) => {
    //Find the keyword to update
    const currentKeywordIndex = keywords.findIndex((keyword: Keyword) => keyword.id === id)
    //updating the current keyword flag
    const updatedKewyord = { ...keywords[currentKeywordIndex], flag: !keywords[currentKeywordIndex].flag }
    //updating the array of keyword
    const newKeywords = [ ...keywords ]
    newKeywords[currentKeywordIndex] = updatedKewyord
    setKeywords(newKeywords) 
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
      <div className="keywords-set contenedor">
          <KeywordArea keywords={keywords}/>
      </div>
      <footer className="footer">{/* footer */}</footer>
    </>
  );
}

export default App;
