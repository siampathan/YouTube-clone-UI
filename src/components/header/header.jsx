import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ReactComponent as Logo } from "../../assets/youtube-logo.svg";
import "./header-style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Logo className="logo" />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AccountCircleIcon className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
