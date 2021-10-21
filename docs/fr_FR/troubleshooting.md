---
title: Problèmes et dépannage
---

{% include toc title="Table of Contents" %}

## Unlaunch
### Unlaunch plante à `MISMATCH IN FAT COPIES` ?
twlnf a un bug critique où il ne met pas correctement à jour la NAND entière après l'avoir modifié, ce qui fait que certains homebrews (comme l'installateur d'Unlaunch) montrent une erreur.

Bien qu'il soit possible d'y remédier, la méthode pour le faire n'est pas fixée et varie largement d'un système à l'autre. Une méthode consiste à supprimer tous les titres DSiWare installé via twlnf dans le passé, mais il a également été signalé que leur déplacement à *tous* sur la carte SD et de nouveau sur le système peut aider dans certains cas.

Si vous avez rétrogradé le système dans le passé, la mise à jour vers la version 1.4.5 (ou 1.4.6 si votre région DS est chinoise ou coréenne) peut également résoudre ce problème.

### Il n'y a pas de son ou de chargement de démarrage lors du lancement de "LAUNCHER" en utilisant Unlaunch

Le développeur de Unlaunch (nocash) a intentionnellement désactivé le fond sonore et le chargement de démarrage par défaut. Vous pouvez récupérer ces effets en [réinstallant Unlaunch](/installing-unlaunch) avec TWiLight Menu++.
