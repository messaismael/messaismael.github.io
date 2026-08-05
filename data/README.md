# data/

Contenu réutilisable migré depuis l'ancien portfolio Jekyll
(`../../messaismael.github.io/`), en attente d'intégration dans les routes
SvelteKit (voir `../../messaismael.github.io/_plans/sveltekit-rebuild.md`).
Copie brute, non transformée — le fichier source garde son contenu Liquid/Jekyll
tel quel, la conversion se fait à l'étape "Migrer le contenu" du plan.

```
data/
  articles/    -- 6 posts .md, frontmatter Jekyll inchangé, nom de fichier
                  identique a l'original (= le slug d'URL a preserver)
  about/       -- about.md (ex aboutme.md)
  projects/    -- projects.md
  images/      -- article1..article6/ (cover + images inline, mapping 1:1 avec
                  articles/ par ordre chronologique) + images sitewide
                  (avatar*.png, bgimage.png, thumb.png)
  site/        -- site.yml : title, avatar, liens sociaux, GA id, shortname
                  Disqus, home (ex index.html), 404 page -- extrait de
                  _config.yml/index.html/404.html, pas une copie brute
               -- CNAME (messaismael.com), favicon.ico
```

## Volontairement exclu

- `2020-02-28-sample-markdown.md` (post de démo du thème, pas du vrai contenu
  — décision actée dans le plan : redirigé vers `/`, pas migré).
- Reste de `_config.yml` (options Jekyll/thème sans équivalent utile côté
  SvelteKit).

## À savoir avant de migrer vers les routes

- 2 articles (`2022-03-29-...typescript.md`, `2022-04-11-...serverless-in-aws.md`)
  utilisent encore la syntaxe Liquid `{% highlight lang %}...{% endhighlight %}`
  au lieu de blocs de code fences — à convertir mécaniquement (voir plan).
- Les chemins d'image dans le frontmatter (`cover-img`, `thumbnail-img`) et le
  corps des articles pointent vers `/assets/img/...` — à réécrire vers le
  chemin final choisi dans `static/` de l'app SvelteKit.
