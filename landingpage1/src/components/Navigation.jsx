import { Heart, ShoppingCart, Search } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <nav className="nav-top">
        <div>
          <img id="logo-jordan" src="/images/jordan.svg" alt="logo-jordan" />
        </div>
        <div>
          <ul className="nav-top-menu">
            <li>Find a Store</li>
            <li id="menu-gap">|</li>
            <li>Help</li>
            <li id="menu-gap">|</li>
            <li>Join Us</li>
            <li id="menu-gap">|</li>
            <li>Sign In</li>
          </ul>
        </div>
      </nav>

      <nav className="nav-mid">
        <div className="logo">
          <img id="logo-img" src="/images\logo.png" alt="logo" />
        </div>

        <ul className="menus">
          <li href="#">Featured</li>
          <li href="#">Men</li>
          <li href="#">Women</li>
          <li href="#">Kids</li>
          <li href="#">Sale</li>
        </ul>

        <div className="nav-right">
          <button id="search">
            {" "}
            <Search size={20} stroke="black" strokeWidth={1.5} /> Search
          </button>
          <Heart
            id="nav-icon-right"
            size={24}
            color="black"
            strokeWidth={1.5}
          />
          <ShoppingCart
            id="nav-icon-right"
            size={24}
            stroke="black"
            fill="white"
            strokeWidth={1.5}
          />
        </div>
      </nav>

      <nav className="nav-low">
        <div id="text-1">
          <>No matter what you feel like doing today, It’s better as a Member</>
          <br />
          <div id="join-us">Join Us</div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
