# messaismael.github.io

## Toujours lire le wiki en premier

Avant toute tâche sur ce projet (code, contenu, config, déploiement...), lire
[`wiki/index.md`](./wiki/index.md) d'abord. Il pointe vers les pages pertinentes
de `wiki/` — conventions techniques et décisions prises pendant la construction
du site. Ne pas re-dériver un pattern ou une rationale déjà capturée là.

Modèle inspiré du ["LLM Wiki" d'Andrej Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f),
simplifié : pas de sous-agents ici, un seul Claude travaille sur tout le projet.

## Ce que contient wiki/

Le wiki ne contient **pas** le contenu du site (bio, projets, articles — ça vit
dans `src/`, c'est publié). Il contient la connaissance de travail :

- `wiki/conventions/` — le **comment** : patterns techniques du projet une fois
  en place (structure des routes, pipeline markdown/frontmatter des posts,
  design system, workflow de déploiement...). Évite de re-dériver un pattern
  du code à chaque session.
- `wiki/decisions/` — le **pourquoi** : décisions prises pendant la construction
  du site (choix de stack, compromis de migration, choix de design) qui ne
  vivent dans aucun fichier de code et seraient sinon perdues après la session
  où elles ont été prises.

## Où écrire selon la demande

- Un pattern/une convention technique à suivre pour le futur → `wiki/conventions/<sujet>.md`,
  et **`wiki/conventions/index.md` doit être enrichi** (nouvelle entrée).
- Une décision et sa rationale ("pourquoi X plutôt que Y") → `wiki/decisions/<sujet>.md`,
  **`wiki/decisions/index.md` enrichi**, et une ligne ajoutée à `wiki/decisions/log.md`.
- En cas de doute entre les deux, demander plutôt que deviner.

## Ingest

1. Lire les sources disponibles (plan archivé dans `_plans/`, code, conversation)
   avant d'écrire quoi que ce soit.
2. Discuter avec l'utilisateur ce qui doit être capturé.
3. Créer/mettre à jour la page (voir "Page format" ci-dessous), et l'index du dossier concerné.
4. Si c'est une décision : ajouter une entrée à `wiki/decisions/log.md` (date, sujet, ce qui a changé).
5. **Attendre confirmation explicite avant d'écrire.** Ne jamais écrire en silence.

## Page format

```markdown
# Titre

> <Convention technique | Décision arrêtée le JJ-MM-AAAA>

**Quoi** (ou **Décision**) : ...
**Pourquoi** : ...
**Comment l'appliquer** : ...

⚠️ **Écart connu** (si applicable) : le code actuel diverge de ce qui est décrit ici — le dire, ne pas trancher unilatéralement.

---
*Source : <plan archivé / session directe du JJ-MM-AAAA>.*
```

## Query — répondre à "pourquoi X fonctionne comme ça" ou "comment on fait Y ici"

1. Lire `wiki/index.md` puis l'index du dossier pertinent (`conventions/index.md`
   ou `decisions/index.md`) pour repérer les pages.
2. Lire ces pages, les citer dans la réponse.
3. Si la réponse n'est pas dans le wiki mais s'avère utile, proposer de l'y ajouter
   (workflow Ingest ci-dessus) une fois confirmée avec l'utilisateur.

## Rules

- Noms de page en minuscules-avec-tirets : `<nom>.md`.
- Une page = un sujet. Si une page dépasse ~150 lignes, la scinder.
- Lien croisé relatif entre pages : `[texte](../decisions/stack-choice.md)`.
- Ne jamais réécrire un plan archivé (`_plans/`) — historique immuable.
- **Confirmation requise avant toute écriture dans `wiki/`.**
- Toujours mettre à jour l'`index.md` du dossier concerné après un changement.
