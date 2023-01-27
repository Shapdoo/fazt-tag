import { useState, useEffect } from "react";

import { AppState } from "./App.interfaces";
import { Keyword } from "./models/interfaces";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import KeywordArea from "./components/KeywordArea/KeywordArea";
import Footer from "./components/Footer/Footer";
import Filter from './components/Filter/Filter';

function App() {
  //TODO solcionar no hardcodear el LS en el state
  const [keywords, setKeywords] = useState<AppState["keywords"]>(
    JSON.parse(localStorage.getItem("keywords-app-data") ?? "[]")
  );
  const [selectedKeywords, setSelectedKeywords] = useState<
    AppState["selectedKeywords"]
  >([]);

  const handleNewKeyword = (keyword: Keyword) => {
    setKeywords([...keywords, keyword]);
  };

  const handleNewFlag = (id: string) => {
    //Find the keyword to update
    const currentKeywordIndex = keywords.findIndex(
      (keyword: Keyword) => keyword.id === id
    );
    //updating the current keyword flag
    const updatedKewyord = {
      ...keywords[currentKeywordIndex],
      flag: !keywords[currentKeywordIndex].flag,
    };
    //updating the array of keyword
    const newKeywords = [...keywords];
    newKeywords[currentKeywordIndex] = updatedKewyord;
    setKeywords(newKeywords);
  };

  const handleDelete = (id: string) => {
    //Find the keyword to update
    const keywordsUpdated = keywords.filter(
      (keyword: Keyword) => keyword.id !== id
    );

    setKeywords(keywordsUpdated);
  };

  const arrayIsEmpty: boolean = keywords.length === 0;

  //Select keywords and deselected keywords and localstorage
  useEffect(() => {
    const newKeywords = keywords.filter((keyword) => keyword.flag !== false);
    setSelectedKeywords(newKeywords);
    localStorage.setItem("keywords-app-data", JSON.stringify(keywords));
  }, [keywords]);

  return (
    <>
      <Header setKeywords={handleNewKeyword} />
      
      <section className="categories contenedor">
        <Filter />
      </section>

      <main className="keywords-container contenedor">
        <h2 className="keywords-container-title">
          {arrayIsEmpty
            ? "😎 Keywords are gonna list here!"
            : "✨ Select the keywords that you want to copy!"}
        </h2>
        {!arrayIsEmpty && (
          <List
            keywords={keywords}
            handleNewFlag={handleNewFlag}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <section className="keywords-set contenedor">
        <KeywordArea selectedKeywords={selectedKeywords} />
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
