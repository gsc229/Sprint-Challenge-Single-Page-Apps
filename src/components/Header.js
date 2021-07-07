import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Link to="/">Welcom Page</Link>
      <Link to="/character-list">Characters</Link>
    </header>
  );
}
