import React from "react";

function Header() {
  const styles = {
      background: `url("https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg") no-repeat center`,
      backgroundSize: "cover"
  }

  return (
      <div className="header-container" style={styles}>
          <div className="header-text-container">
              <h1>Clean Blog</h1>
              <p>A Blog Theme by Start Bootstrap</p>
          </div>
      </div>
  )
}
export default Header;
