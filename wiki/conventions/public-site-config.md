# Configuration publique du site

> Convention technique

**Quoi** : les valeurs publiques nécessaires au site sont regroupées dans
`src/lib/site.config.ts` et exportées via `siteConfig`.

**Pourquoi** : ces valeurs sont intégrées au bundle client et ne sont donc pas
des secrets. Un fichier TypeScript versionné rend leur emplacement explicite,
évite de dépendre d’un fichier `.env` local pendant le build statique et permet
de modifier une configuration publique depuis un seul endroit.

**Comment l’appliquer** : importer `siteConfig` via `$lib/site.config`. Ne jamais
y placer de mot de passe, clé privée ou secret serveur. Après une modification,
relancer le build avant le déploiement GitHub Pages.

---
*Source : session directe du 07-08-2026.*
