import React from "react";

function Header(props) {
	return (
		<header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Typwriter</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Sign out</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Statistics</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
	)
}

export default Header;