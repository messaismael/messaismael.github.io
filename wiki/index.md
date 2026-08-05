# Wiki — messaismael.github.io

Base de connaissances de travail pour ce projet, pas le contenu du site (ça vit dans `src/`).
Process complet (quand/comment écrire une page, ingest, format) documenté dans
[`../CLAUDE.md`](../CLAUDE.md) — lu automatiquement en premier.

## Structure

```
wiki/
  index.md              -- ce fichier
  conventions/           -- le "comment" : patterns techniques du projet
    index.md
  decisions/              -- le "pourquoi" : décisions cross-cutting et leur rationale
    index.md
    log.md                 -- registre append-only de chaque mise à jour
```

## État actuel

Premières conventions et décisions capturées (design system couleurs,
customisation shadcn-svelte, structure des composants, i18n ; adoption
shadcn-svelte, langage graphique du hero). Le projet reste en tout début de
migration (voir `../../messaismael.github.io/_plans/sveltekit-rebuild.md`).
Sera enrichi au fur et à mesure des sessions.

- [Conventions](./conventions/index.md)
- [Décisions](./decisions/index.md)
