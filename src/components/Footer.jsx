import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">
            ✦
          </span>
          <span className="brand__text">
            PHOENIX <em>2026</em>
          </span>
        </div>

        <p className="site-footer__org">NIBM IEEE Student Branch — Robotics and IoT Exhibition</p>

        <nav className="site-footer__links">
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#highlights">Highlights</a>
          <a href="#register">Register</a>
        </nav>

        <p className="site-footer__copy">© 2026 NIBM IEEE Student Branch. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
