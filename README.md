# Presell 01 + Presell 02

Funil curto e mobile-first feito com Next.js App Router, TypeScript, Tailwind CSS e Lucide React.

## Executar localmente

Requer Node.js 18.17 ou superior:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/entrada` ou `http://localhost:3000/acesso`. A raiz redireciona para `/entrada`.

## Personalizar

Edite `app/config.ts` para mudar nome, foto e enquadramento, mensagens, benefícios, cores, endereço de contato e URL final. Coloque a foto autorizada em `public/images/julinha-profile.jpg` ou altere `creatorPhoto`.

A Presell 01 (`/entrada`) mantém o puzzle dos três corações; o botão só habilita após completar e navega para `/acesso`. A Presell 02 exibe o aviso de conteúdo adulto e pede uma confirmação declaratória de maioridade. Ao confirmar, mostra uma mensagem breve e redireciona automaticamente à URL ServerFlow configurada em `telegramUrl`, sem outra interação.

Preços, periodicidade, renovação, cancelamento e período de acesso não foram fornecidos. Nenhuma cobrança começa neste site. A confirmação de idade é declaratória, não é verificação técnica de idade. **A página não integra um serviço de verificação etária**; não use a declaração como substituta caso um serviço seja exigido pela legislação aplicável. Integre uma solução apropriada antes de disponibilizar a oferta no território relevante.

As etapas emitem eventos distintos (`presell01_*` e `presell02_age_declaration_confirmed`) como `presell:analytics` no navegador. Nenhum evento é enviado a um servidor nem pixel é carregado por padrão. `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` e `utm_id` são encaminhados sem valores com mais de 200 caracteres. Na URL final, UTMs de origem sobrescrevem os valores correspondentes do template com `URLSearchParams.set`, preservando as macros não substituídas e evitando duplicatas.
