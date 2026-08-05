# Conventions

Le **comment** : patterns techniques du projet, une fois en place. Une page par
sujet (structure des routes, pipeline markdown/frontmatter, design system,
workflow de déploiement...). Évite de re-dériver un pattern du code à chaque
session.

Voir "Où écrire selon la demande" dans [`../../CLAUDE.md`](../../CLAUDE.md).

## Pages

- [design-system-colors.md](./design-system-colors.md) — tokens de couleur (OKLCH monochrome, `.dark` forcé, `--radius: 0`), classes sémantiques à utiliser
- [shadcn-svelte-usage.md](./shadcn-svelte-usage.md) — customiser les composants shadcn à la source, pas au call site ; skill agent `.agents/skills/shadcn-svelte/`
- [component-structure.md](./component-structure.md) — barrel imports systématiques (composants custom et `ui/`)
- [i18n.md](./i18n.md) — paraglide-js, `messages/{locale}.json`, stratégie cookie (pas de route `/fr`)
