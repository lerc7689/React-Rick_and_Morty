import titleImage from "../../assets/img/navTitleImage.png";
import "./Header.css";

const Nav = () => {
  return (
    <nav className="navigator">
      <img src={titleImage} alt="" className="navTitle" />
    </nav>
  );
};

export default Nav;
