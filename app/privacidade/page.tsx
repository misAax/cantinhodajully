import Link from "next/link";
import { pageConfig } from "../config";

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <header className="site-header legal-header">
        <Link className="back-link" href="/">← Voltar</Link>
        <span className="creator-name">{pageConfig.creatorName}</span>
      </header>
      <article className="legal-content">
        <h1>Política de Privacidade</h1>
        <p>
          Esta página não solicita informações pessoais, não carrega pixels de
          publicidade e não envia eventos analíticos para servidores por padrão.
          Ela emite eventos locais no navegador para permitir uma integração futura.
          Ao continuar, somente os parâmetros UTM permitidos (origem, meio, campanha,
          termo e conteúdo) presentes no endereço podem ser encaminhados à próxima etapa.
        </p>
        <p>
          Para dúvidas sobre privacidade, escreva para{" "}
          <a href={`mailto:${pageConfig.contactEmail}`}>{pageConfig.contactEmail}</a>.
        </p>
      </article>
    </main>
  );
}
