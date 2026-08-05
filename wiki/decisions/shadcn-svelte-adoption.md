# Adoption de shadcn-svelte + thème dark forcé + polices auto-hébergées

> Décision arrêtée le 05-08-2026

**Décision** : shadcn-svelte est la bibliothèque de composants frontend du
projet (`npx shadcn-svelte@latest init`, preset `vega`, base `neutral`,
icônes `@lucide/svelte`). Le site est en thème sombre **permanent**
(`<html class="dark">` codé en dur dans `src/app.html`, pas de toggle). Les
polices (Inter, Chakra Petch) sont auto-hébergées via des paquets Fontsource
plutôt que chargées depuis le CDN Google Fonts.

**Pourquoi** :

- **shadcn-svelte** : demandé explicitement par l'utilisateur ("installe
  shadcn-svelte pour les composants frontend"). Le preset `vega` (Lucide +
  Inter, "le look shadcn/ui classique") a été choisi comme base neutre,
  ensuite fortement personnalisée (voir
  [shadcn-svelte-usage.md](../conventions/shadcn-svelte-usage.md) et
  [design-system-colors.md](../conventions/design-system-colors.md)) plutôt
  que gardée telle quelle.
- **Dark forcé** : tout le langage graphique du site (voir
  [design-language-fashion-preview.md](./design-language-fashion-preview.md))
  est pensé en noir/blanc pur dès le départ — un mode clair n'aurait aucun
  sens avec le design actuel. Forcer `.dark` évite aussi qu'un composant
  shadcn ajouté plus tard rende par erreur en thème clair (tokens
  `:root` non utilisés).
- **Polices auto-hébergées** : shadcn a lui-même tiré `@fontsource-variable/inter`
  en dépendance à l'init. Pour éviter d'avoir deux sources de police (CDN
  Google Fonts + paquet npm) et une requête réseau externe évitable sur un
  site par ailleurs statique, Chakra Petch a été basculée vers
  `@fontsource/chakra-petch` (paquet existant) pour rester cohérent.

**Comment l'appliquer** : ne pas réintroduire de lien `<link>` vers Google
Fonts ou un autre CDN de polices — passer par un paquet Fontsource (ou
équivalent auto-hébergé) si une nouvelle police est nécessaire.

⚠️ **Écart connu** : si une bascule clair/sombre est demandée un jour, cette
décision (dark forcé) devra être révisée en même temps que les tokens
`:root` dans `layout.css` (actuellement jamais visités).

---
*Source : session directe du 05-08-2026.*
