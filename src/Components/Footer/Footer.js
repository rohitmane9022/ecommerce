
import "../Footer/Footer.css";
import logo from "../../image/logo.jpg";


export function Footer() {
  

  return (
    <footer className="footer__container">
      <div className="container brand__contianer">
        <div className="logo__container">
          <img src={logo} alt="logo" width="50px" height="50px"/>
          <h1 style={{color:"black"}}>Nike</h1>
        </div>
      </div>
      <div className="container copyright__contianer">
        <div>
          <h3>© Nike 2023</h3>
          <p>
            Built with ❤️
          </p>
        </div>
      </div>
      
      <div className="container socials__contianer">
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/itz_rohitmane/" target="/">
          Instagram
        </a>
        <a href="https://twitter.com/RohitMane0" target="/">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/rohit-mane-89b180207/" target="/">
          LinkedIn
        </a>
      </div>

    </footer>
  );
}
