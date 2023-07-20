import "../styles/Header.css";
import logo from "../logo-light (1).png";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="text-[red]">Chibuikem</h1>
      </div>
    </div>
  );
}

export default Header;
