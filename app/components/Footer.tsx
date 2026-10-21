export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <h2 className="footer-cta" data-i18n="footer.cta">
            Bora construir algo incrível?
          </h2>
          <a
            href="https://www.linkedin.com/in/paulaallemand/"
            target="_blank"
            rel="noopener"
            className="btn btn-red"
            data-i18n="footer.contact"
          >
            Fale comigo
          </a>
          <div className="social-links-row footer-social">
            <a
              href="https://github.com/paulaisdev"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <img src="/img/social_icons/github.svg" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulaallemand/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <img src="/img/social_icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
