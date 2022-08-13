import React from "react";
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const renderAuthNavbar = (userName) => (
  <React.Fragment>
    <li className={styles.navlink}>
      <a className="nav-link" href="/">Statistics {userName}</a>
    </li>
    <li className={styles.navlink}>
      <a className="nav-link" href="/">Sign out</a>
    </li>
  </React.Fragment>
);

const renderNoAuthNavbar = () => (
  <li className={styles.navlink}>
    <a className="nav-link" href="/login">Sign in</a>
  </li>
);

function Header(props) {

  const {user} = props;

	return (
		<header className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Typwriter</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {(user && renderAuthNavbar(user)) || renderNoAuthNavbar()}
            </ul>
          </div>
        </div>
      </nav>
    </header>
	)
}

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;