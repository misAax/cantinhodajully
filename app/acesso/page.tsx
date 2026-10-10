import { ShieldAlert } from "lucide-react";
import AgeRedirectConfirmation from "../../components/AgeRedirectConfirmation";
import CreatorProfile from "../../components/CreatorProfile";
import SiteFooter from "../../components/SiteFooter";
import { pageConfig } from "../config";

export default function AccessPage() {
  return (
    <main className="page-shell access-page">
      <div className="main-content">
        <section className="intro access-intro" aria-labelledby="access-title">
          <CreatorProfile />
          <div className="decorative-hearts" aria-hidden="true">
            <span className="heart-one">♥</span>
            <span className="heart-two">♥</span>
          </div>
          <h1 id="access-title">{pageConfig.accessTitle}</h1>
          <p>{pageConfig.accessSubtitle}</p>
        </section>

        <section className="adult-notice" aria-label="Aviso de conteúdo adulto">
          <ShieldAlert size={20} aria-hidden="true" />
          <strong>{pageConfig.adultNotice}</strong>
        </section>

        <AgeRedirectConfirmation />
      </div>
      <SiteFooter />
    </main>
  );
}
