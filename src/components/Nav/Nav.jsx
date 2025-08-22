import { BellIcon, MailIcon, MenuIcon, SearchIcon } from "lucide-react";
import Search from "./Search";
import Popup from "./Pop-up";
import Bell from "./Bell";
import Msgs from "./Msgs";
import { useState } from "react";

function Nav({ isAuthenticated, iconConfig, handleSidebarToggle }) {
  let [searchOpen, setSearchOpen] = useState(false);
  let [bellOpen, setBellOpen] = useState(false);
  let [notifOpen, setNotifOpen] = useState(false);
  const isPopupOpen = searchOpen || bellOpen || notifOpen;

  const handleSearchIcon = () => {
    setSearchOpen(true);
    setBellOpen(false);
    setNotifOpen(false);
    // if (searchIconDom.current) setSearchOpen(true);
  };
  const handleBellIcon = () => {
    setBellOpen(true);
    setSearchOpen(false);
    setNotifOpen(false);
  };
  const handleNotifIcon = () => {
    setNotifOpen(true);
    setSearchOpen(false);
    setBellOpen(false);
  };

  const navIcons = [
    {
      displayName: "Search",
      IconJSX: ({ x, y }) => <SearchIcon strokeWidth={x} size={y} />,
      showInDesktop: false,
      popContent: () => (searchOpen ? <Search mobileHidden={false} /> : null),
      onClick: handleSearchIcon,
    },
    {
      displayName: "Notifications",
      IconJSX: ({ x, y }) => <BellIcon strokeWidth={x} size={y} />,
      showInDesktop: true,
      popContent: () => (bellOpen ? <Bell /> : null),
      onClick: handleBellIcon,
    },
    {
      displayName: "Messages",
      IconJSX: ({ x, y }) => <MailIcon strokeWidth={x} size={y} />, //return jsx
      showInDesktop: true,
      popContent: () => (notifOpen ? <Msgs /> : null),
      onClick: handleNotifIcon,
    },
  ];

  return (
    <nav className="fixed inset-0 z-50 flex items-center justify-between align-center p-3 md:p-5 h-[4rem] bg-white shadow-md">
      <div className="flex justify-center  md:gap-2">
        <button
          className="humberger-icon p-1 md:p-2 rounded hover:bg-gray-200 cursor-pointer"
          onClick={() => handleSidebarToggle()}
        >
          <MenuIcon
            strokeWidth={iconConfig.strokeWidth}
            size={iconConfig.iconSize}
          />
        </button>
        <a href="/" className="flex items-center">
          <h2>DASHBOARD IT</h2>
        </a>
        <Search mobileHidden={true} />
      </div>
      <div className="flex gap-2 md:gap-5 items-center cursor-pointer ">
        <ul className="flex md:gap-5">
          {navIcons.map((ele, id) => (
            <li
              key={id}
              className={`relative hover:bg-gray-300 p-2 md:p-3 transition-all duration-300 ${
                ele.showInDesktop ? "" : "desktop-none"
              }`}
              onClick={() => ele.onClick()}
            >
              <ele.IconJSX x={iconConfig.strokeWidth} y={iconConfig.iconSize} />
              {isPopupOpen && ele.popContent() && (
                <Popup popupTitle={ele.displayName}>
                  <ele.popContent />
                </Popup>
              )}
            </li>
          ))}
        </ul>
        <button>
          {isAuthenticated ? (
            <img src="/public/profile-1.png" className="w-8 h-8 rounded-full" />
          ) : (
            "Login"
          )}
        </button>
      </div>
      {isPopupOpen && (
        <>
          <div
            className=" opacity-20 absolute w-[100%] h-[100vh] top-[100%] left-0 z-40"
            onClick={() => {
              setSearchOpen(false); //to close any nav pop-up
              setBellOpen(false);
              setNotifOpen(false);
            }}
          />
        </>
      )}
    </nav>
  );
}

export default Nav;
