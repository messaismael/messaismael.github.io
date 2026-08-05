# Structure des composants — barrel imports

> Convention technique

**Quoi** : tout import de composant passe par un barrel `index.ts`, jamais par
le chemin direct du `.svelte`.

- Composants custom : `src/lib/components/index.ts` réexporte chaque
  composant (`export { default as Header } from './Header.svelte';`). Les
  pages importent `import { Header, Hero } from '$lib/components'`.
- Composants ui (shadcn) : voir
  [shadcn-svelte-usage.md](./shadcn-svelte-usage.md) — barrel par composant
  généré par le CLI, plus un barrel global `ui/index.ts` qui réexporte tout.

**Pourquoi ce détail compte** : sans barrel, chaque appelant doit connaître le
nom exact du fichier `.svelte` derrière chaque composant ; avec un barrel,
renommer/déplacer un fichier interne ne casse aucun import ailleurs dans le
projet.

**Comment l'appliquer** :

- Nouveau composant custom → l'ajouter à `src/lib/components/index.ts` en
  même temps que sa création.
- Nouveau composant ui (via `shadcn-svelte add`) → ajouter la ligne
  `export * from './<composant>';` dans `src/lib/components/ui/index.ts`.
- Ne jamais écrire `import X from '$lib/components/X.svelte'` ou
  `from '$lib/components/ui/<composant>/<composant>.svelte'` dans une page ou
  un autre composant.

---
*Source : session directe du 05-08-2026.*
