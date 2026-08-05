# Design system — couleurs

> Convention technique

**Quoi** : les couleurs vivent uniquement comme tokens CSS sémantiques dans
`src/routes/layout.css` (le fichier `tailwind.css` référencé par `components.json`).
Deux blocs, `:root` (clair, non utilisé actuellement) et `.dark` (le seul thème
actif — `<html class="dark">` est posé en dur dans `src/app.html`), en OKLCH
monochrome pur :

- `--background: oklch(0 0 0)` / `--foreground: oklch(1 0 0)` — noir/blanc purs
- `--primary` / `--primary-foreground` — inversés (blanc/noir), pour les actions
  "pleines"
- `--muted-foreground: oklch(0.65 0 0)` — seul palier de gris utilisé pour tout
  texte secondaire (pitch, labels, nav, tags). Pas de dégradé d'opacités
  multiples (`/70`, `/50`, `/30`...) — un seul niveau de dimming.
- `--border: oklch(1 0 0 / 10%)` — hairline blanc à 10 %, la ligne de grille du
  design (nav, séparateurs de colonnes)
- `--radius: 0rem` — angles droits partout. C'est le token qui fait que **tout**
  composant shadcn (Button, et futurs Card/Badge/Input) hérite du style
  anguleux du design sans qu'aucun composant n'ait besoin de `rounded-none`.

**Comment l'appliquer** :

- Ne jamais écrire `text-white`, `text-white/60`, `border-white/10`, etc. dans
  un composant. Utiliser les classes Tailwind sémantiques : `text-foreground`,
  `text-muted-foreground`, `border` / `border-t` / `border-b` / `border-r`
  (la couleur de bordure est déjà posée globalement par
  `@layer base { * { @apply border-border } }` — pas besoin de préciser de
  couleur sur les utilitaires de bordure structurels).
- Pour ajouter une couleur (ex. un accent), suivre le pattern shadcn : définir
  la paire `--nom` / `--nom-foreground` dans `:root` **et** `.dark`, puis la
  déclarer dans le bloc `@theme` (`--color-nom: var(--nom)`). Ne jamais créer
  un second fichier de thème.
- Si un jour une bascule clair/sombre est ajoutée, `:root` devra être retravaillé
  (actuellement il garde les valeurs par défaut de shadcn, jamais visitées).

---
*Source : session directe du 05-08-2026 (mise en place initiale du design
system + shadcn-svelte).*
