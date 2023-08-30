export default function Header({ darkMode, setDarkMode, setCountry }) {
  function handleClick() {
    setDarkMode((mode) => !mode);
  }
  function handleLogo() {
    setCountry({});
  }
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo" onClick={handleLogo}>
          <p className="logo--text">Where in the world?</p>
        </a>
        <a href="#" className="btn--mode" onClick={handleClick}>
          <span className={`${darkMode ? "active" : ""}`}>
            <ion-icon name="moon-outline"></ion-icon> Dark Mode
          </span>
          <span className={`${darkMode ? "" : "active"}`}>
            <ion-icon name="sunny-outline"></ion-icon>Light Mode
          </span>
        </a>
      </div>
    </header>
  );
}
