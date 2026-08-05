# Langage graphique repris d'un preview "Future Fashion"

> Décision arrêtée le 05-08-2026

**Décision** : le hero du portfolio reprend tel quel le langage graphique
d'un mockup de landing e-commerce mode/tech fourni par l'utilisateur
(`static/assets/preview.png` / `Desktop - 1.png`) — grille éditoriale à 3
colonnes avec liserés fins (hairlines), typographie display géométrique
(Chakra Petch) + corps de texte Inter, palette monochrome noir/blanc, visuel
d'ambiance en plein bleed derrière tout le hero.

**Mapping contenu preview → portfolio** (grille à 3 colonnes, 2 lignes) :

| Zone du preview | Contenu portfolio |
| --- | --- |
| Nav (Collection/Menu/Search/Panier) | Logo/nom + liens Blog/Work/About/Contact |
| Titre "FUTURE FASHION" (haut-gauche) | Titre empilé "FROM/IDEA/TO/AUTONOMOUS/SYSTEMS" |
| Description + "Discover" (bas-gauche) | Positionnement + bouton "View My Work" |
| Photo mannequin + carrousel 01/04 (haut-droite) | Placeholder "Case study preview" (motif diagonal, honnête sur son statut de placeholder) |
| Carte produit "LumaFlex Bodysuit" (bas-droite) | Carte projet "Hermes AI" (catégorie, tags stack, "Explore Case Study") |
| Silhouette encapuchonnée (centre) | `background-monochome.png` en placeholder, en attendant un visuel dédié |

**Pourquoi** : l'utilisateur voulait "caler ce langage graphique" existant
plutôt que d'en concevoir un nouveau — le mockup avait déjà le ton
(sombre, éditorial, tech) recherché pour le portfolio.

**Comment l'appliquer** : toute nouvelle section du site devrait respecter la
même grammaire visuelle (grille à hairlines, Chakra Petch pour les titres,
monochrome) plutôt que d'introduire un nouveau style. Voir
[design-system-colors.md](../conventions/design-system-colors.md) pour les
tokens qui portent cette palette.

⚠️ **Écart connu** : la cellule "Case study preview" et l'image de fond du
centre sont des placeholders explicites — à remplacer par de vrais visuels
(screenshot Hermes AI, image dédiée au portfolio) quand disponibles. Il n'y a
encore qu'un seul projet (Hermes AI) pour justifier le compteur `01/04`.

---
*Source : session directe du 05-08-2026.*
