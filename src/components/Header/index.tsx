import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function isActive(location: any, pathname: string) {
  const names = location.pathname.split("/");
  const path_root = names.length > 1 ? names[1] : "/";

  return `/${path_root}` === pathname || `/${path_root}s` === pathname;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Link to="/">
          <p>ListPokemons</p>
        </Link>

        <div>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/items"
          >
            Items
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/locations">Locations</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/">Pokemons</NavLink>
        </div>
      </nav>
    </header>
  );
}
