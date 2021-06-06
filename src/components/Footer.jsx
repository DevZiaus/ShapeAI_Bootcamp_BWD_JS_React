import React from "react";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright @ {currYear} &nbsp;
        <a href="https://www.devziaus.ga" target="_blank">
          DevZiaus
        </a>
      </p>
    </footer>
  );
}

export default Footer;
