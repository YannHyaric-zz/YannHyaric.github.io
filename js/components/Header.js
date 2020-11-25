import React from "react";

function Header() {
  return (
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <div className="language">
        <a href="../EN/index.html" lang="en" hreflang="en">
          English-EN
        </a>
        <a href="../FR/index.html" lang="fr" hreflang="fr">
          Français-FR
        </a>
        <a href="../ES/index.html" lang="es" hreflang="es">
          Español-ES
        </a>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              Sobre Mim
            </a>
          </li>
          <li className="nav-item">
            <a href="skills.html" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              Trabalhos
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
