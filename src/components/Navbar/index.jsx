import { Link } from "react-router-dom";
import { Button } from "../Button";
import { SearchBox } from "../SearchBox";
import navStyles from "./index.module.css";

export const Navbar = () => {
  const navLinks = [
    "Home",
    "Services",
    "About Us",
    "Contacts",
    "Profile",
    "Dashboard",
  ];

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navBrand}>Generouse Healthcare</div>

      <div className={navStyles.rightNav}>
        <ul className={navStyles.navLinks}>
          {navLinks.map((navLink) => {
            console.log(navLink.split(" ").join("").toLowerCase());
            return (
              <li className={navStyles.navLink} key={navLink}>
                <Link to={`/${navLink.split(" ").join("").toLowerCase()}`}>
                  {navLink}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={navStyles.searchBox}>
          <SearchBox />
        </div>
        <div className={navStyles.navBtns}>
          <Button class="btn signin-btn">Sign In</Button>
          <Button class="btn signout-btn">Sign Out</Button>
        </div>
      </div>
    </nav>
  );
};
