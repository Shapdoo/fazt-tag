export default function Footer() {
  return (
    <div className="footer-content contenedor">
      <div className="support">
        <h3 className="support-title">Support us!</h3>
        <p>Help us to maintain this app for you! ❤️</p>
        <div className="wrapper-button">
          <a href="#" className="btn btn-support shadow">
            🐸 Donate
          </a>
        </div>
      </div>

      <div className="socials">
        <h3 className="support-title">Chat with us!</h3>
        <p className="">
          If you have any observations or issue contact us via Discord! 😊
        </p>
        <div className="wrapper-button">
          <a href="#" className="btn btn-chat shadow">
            {" "}
            🍃 Our Discord Server
          </a>
        </div>
      </div>

      <div className="brand">
        <h2 className="support-title">🚀Fazt-tag</h2>
        <p>
          The <strong>one and only</strong> app for those communication
          artissans 💫
        </p>
      </div>
    </div>
  );
}
