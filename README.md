# Site de divulgação — Blake Academic IDE

Landing page estática, sem build. Publicável em GitHub Pages, Netlify ou Vercel.

## Rodar localmente

```bash
cd site
python3 -m http.server 8080
# abra http://localhost:8080
```

## Deploy (GitHub Pages)

```bash
cd site
git subtree push --prefix site origin gh-pages   # ou use a action oficial de Pages
```

Alternativa mais simples: nas configurações do repositório, aponte o GitHub Pages para a pasta `/site` da branch `main`. Netlify/Vercel: apenas selecione a pasta `site/` como diretório de publicação (sem comando de build).

## Antes de publicar, troque os placeholders

| Onde | O quê |
|---|---|
| `index.html` (`og:url`, `canonical`, `og:image`) | Domínio real do site |
| `index.html` (seção waitlist) | Link do Tally já configurado: `https://tally.so/r/J94bpX` |
| `index.html` (footer) | URLs reais de GitHub, LinkedIn e e-mail de contato |

## Estrutura

- `index.html` — página única; textos bilíngues via atributos `data-pt` / `data-en`
- `style.css` — tokens espelhados de `DESIGN.md` (dark basalto + light pergaminho)
- `script.js` — alternador de idioma e tema (preferências salvas em `localStorage`)
- `assets/` — logo do app e imagem Open Graph (1200×630, usada no preview do LinkedIn)
