import Form from "../Form/Form";
import { HeaderProps } from "./Header.interfaces";

function Header({ setKeywords }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="product-title text-center">Fazt-Tag</h1>
        <p className="product-description text-center">
          <span className="highlight">Fazt-tag</span> is an online application made to store your <span className="highlight">keywords and help
          you recover them for future publications</span>. Enjoy! 🚀
        </p>
        <div className="form">
            <Form setKeywords={setKeywords}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
