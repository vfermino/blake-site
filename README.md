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
