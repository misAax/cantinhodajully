import { pageConfig } from "../app/config";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-note">{pageConfig.footerNote}</p>
      <nav className="footer-links" aria-label="Links legais">
        <a href="/privacidade">Privacidade</a>
        <span aria-hidden="true">·</span>
        <a href="/termos">Termos</a>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${pageConfig.contactEmail}`}>Contato</a>
      </nav>
    </footer>
  );
}
