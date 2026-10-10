import Link from "next/link";
import { pageConfig } from "../config";

export default function TermsPage() {
  return (
    <main className="page-shell">
      <header className="site-header legal-header">
        <Link className="back-link" href="/">← Voltar</Link>
        <span className="creator-name">{pageConfig.creatorName}</span>
      </header>
      <article className="legal-content">
        <h1>Termos de Uso</h1>
        <p>
          Esta página oferece uma apresentação breve da comunidade. Antes de
          participar, consulte na próxima etapa os detalhes, condições, conteúdos e
          plataformas envolvidos para decidir se deseja continuar.
        </p>
        <p>
          Dúvidas? Entre em contato pelo e-mail{" "}
          <a href={`mailto:${pageConfig.contactEmail}`}>{pageConfig.contactEmail}</a>.
        </p>
      </article>
    </main>
  );
}
