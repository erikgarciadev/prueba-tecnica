import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Jumper from "../Jumper";
import styles from "./Header.module.css";

export function isActive(location: any, pathname: string) {
  const names = location.pathname.split("/");
  const path_root = names.length > 1 ? names[1] : "/";

  return `/${path_root}` === pathname || `/${path_root}s` === pathname;
}

export default function Header() {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);
  const iconRef = useRef<any>();
  const jumperRef = useRef<any>();
  useEffect(() => {
    const onScroll = (e: Event) => {
      let top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 200) {
        jumperRef.current.style.display = "flex";
      } else {
        jumperRef.current.style.display = "none";
      }
      if (activeNavbar) {
        setActiveNavbar(false);
        iconRef?.current?.classList.remove("fa-times");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeNavbar]);
  return (
    <>
      <Jumper jumperRef={jumperRef} />
      <header className={styles.header}>
        <nav className="container">
          <Link to="/">
            <p>ListPokemons</p>
          </Link>
          <div
            className={styles.icon}
            onClick={() => setActiveNavbar(!activeNavbar)}
          >
            {!activeNavbar ? (
              <FaBars color="#383b4f" fontSize={"25px"} />
            ) : (
              <FaTimes color="#383b4f" fontSize={"25px"} />
            )}
          </div>
          <div
            onClick={() => setActiveNavbar(false)}
            className={activeNavbar ? styles.show : ""}
          >
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/items"
            >
              Items
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/locations"
            >
              Locations
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/"
            >
              Pokemons
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
