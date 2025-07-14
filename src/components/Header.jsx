function Header({color}) {
    return (
      <div id="header">
        <div className="logo" style={{ color: color }}>
          YUNIFOLIO
        </div>
        <nav>
          <a href="#cover" style={{ color: color }}>Home</a>
          <a href="#about" style={{ color: color }}>About</a>
          <a href="#portfolio" style={{ color: color }}>Portfolio</a>
          <a href="#contact" style={{ color: color }}>Contact</a>
        </nav>
      </div>
    );
  }
  
  export default Header;
  