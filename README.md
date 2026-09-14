# Site de divulgação — Blake Academic IDE

Landing page estática, sem build. Publicável em GitHub Pages, Netlify ou Vercel.

## Rodar localmente

```bash
cd site
python3 -m http.server 8080
# abra http://localhost:8080
```

## Deploy (GitHub Pages)

O site vive no repo público **vfermino/blake-site** e é servido em https://vfermino.github.io/blake-site/

Para publicar alterações feitas nesta pasta:

```bash
./deploy.sh "mensagem do commit"   # na primeira vez, clona o repo de deploy sozinho
```

O script sincroniza o conteúdo desta pasta para `/tmp/blake-site` (clone do repo público), commita e faz o push. O Pages publica em ~1 minuto.

> O diretório `updates/` nesse repo **não é do site**: é o feed de atualizações
> automáticas do app (`updates/stable.json` e `updates/beta.json`), publicado
> pelo CI do repo `vfermino/Blake` a cada tag `v*`. O `deploy.sh` o exclui do
> rsync justamente para não apagá-lo.

## Estrutura

- `index.html` — página única; textos bilíngues via atributos `data-pt` / `data-en`
  - Hero com posicionamento e screenshot real do app
  - Faixa de prova social linkando a tese de exemplo (FEUSP/USP, Biblioteca Digital)
  - `#demo` — vídeo/GIF da âncora PDF→citação + capturas do popover e da âncora
  - `#recursos` — bento de 8 recursos
  - `#compare` — tabela vs. Word+Zotero / Obsidian / Overleaf
  - `#precos` — Core grátis para sempre · Pro R$ 49/mês (em breve) · Enterprise (cotação)
  - `#universidades` — pilotos para PPGs e bibliotecas
  - `#revistas` — Programa Revista Parceira
  - `#baixar` — releases (Windows/macOS/Linux) + guia de instalação
    (Gatekeeper/SmartScreen, `xattr`, deb/rpm/AppImage), baseado em
    `docs/INSTALACAO.md` do repo principal
- `style.css` — tokens espelhados de `DESIGN.md` (dark basalto + light pergaminho)
- `script.js` — alternador de idioma e tema (preferências salvas em `localStorage`)
- `assets/` — logo, imagem Open Graph (1200×630) e `assets/app/` com as capturas

## Assets do app (`assets/app/`)

Capturas reais do Blake rodando com a tese de exemplo (FEUSP/USP) e a edição
crítica de *Ulysses* (Gabler, Garland 1984) como fonte PDF:

| Arquivo | Uso |
|---|---|
| `demo-blake.mp4` / `demo-blake.gif` / `demo-blake.webm` | Vídeo da demo (mp4 no site; gif é o fallback; webm é o master) |
| `editor-introducao-dark.png` | Hero (modo escuro) |
| `editor-introducao-light.png` | Seção Universidades (modo claro) |
| `popover-metadata.png` | Card da demo (popover da citação) |
| `pdf-ancora.png` | Card da demo + base da OG image (âncora na p. 422) |
| `time-machine.png` | Reserva (não usado na página) |
| `export-modal.png` | Reserva (não usado na página) |
| `linter.png` | Reserva (não usado na página) |

> Regra do projeto: **não mencionar o assistente de IA interno do app no site**
> — nem em textos, comentários ou nomes de arquivo. A citarem, o termo não existe aqui.

## Links usados na página

| O quê | URL |
|---|---|
| Instaladores (todas as plataformas) | `https://github.com/vfermino/blake-site/releases` — **sem** `/latest`: enquanto houver beta (pre-release), `/latest` dá 404 |
| Waitlist / avisos / oficinas (Tally) | `https://tally.so/r/J94bpX` |
| Tese de exemplo | `https://teses.usp.br/teses/disponiveis/48/48140/tde-23012026-092321/` |
| Contato | `victors@alumni.usp.br` |

> Fonte do texto de instalação: `docs/INSTALACAO.md` no repo principal. Quando
> sair a primeira versão estável, dá para trocar o link para `/releases/latest`.
