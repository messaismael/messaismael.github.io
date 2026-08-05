# shadcn-svelte — customisation et usage

> Convention technique

**Quoi** : shadcn-svelte fournit les composants UI (`components.json` à la
racine, style `vega`, base `neutral`, icônes `@lucide/svelte`). Le CLI a
lui-même posé un skill agent dans `.agents/skills/shadcn-svelte/SKILL.md`
(tracké par `skills-lock.json`) — le lire avant toute manipulation de
composant (ajout, mise à jour, style).

**Règle centrale — customiser à la source, pas à l'appel** : quand le rendu
par défaut d'un composant ne correspond pas au design (couleurs, variantes,
typographie des boutons...), on édite le fichier source dans
`src/lib/components/ui/<composant>/` (ex. `button.svelte`, variante `outline`
réécrite pour l'inversion blanc/noir au hover, `uppercase tracking-wide`
ajouté à la base commune). On ne rajoute **pas** de classes d'override au
call site pour du style ou de la couleur.

**Exception tolérée** : une classe passée au call site pour du pur
positionnement/espacement (`class="mt-8"`) reste normale — ce n'est pas du
style de composant, c'est du layout de la page qui l'utilise.

**Barrel imports systématiques** :

- Chaque composant shadcn a son propre barrel (`ui/button/index.ts`, généré
  par le CLI) — jamais d'import direct vers le `.svelte`.
- `src/lib/components/ui/index.ts` réexporte tous les composants ui
  (`export * from './button';`, etc.) — après chaque
  `npx shadcn-svelte@latest add <composant>`, ajouter la ligne correspondante
  ici. Les appelants importent depuis `$lib/components/ui`, jamais depuis
  `$lib/components/ui/<composant>` directement.
- Voir aussi [component-structure.md](./component-structure.md) pour le
  barrel des composants custom (`Hero`, `Header`...).

**Comment l'appliquer** :

1. Ajouter un composant : `npx shadcn-svelte@latest add <nom> -y` (le flag
   `-y` évite le prompt interactif de confirmation).
2. Ajouter la ligne d'export dans `ui/index.ts`.
3. Si le rendu par défaut ne colle pas au design, éditer le `.svelte` du
   composant (variantes `tailwind-variants`), pas le call site.
4. Après un `update` du CLI, relire le `git diff` (le CLI peut réécrire les
   fichiers customisés).

---
*Source : session directe du 05-08-2026.*
