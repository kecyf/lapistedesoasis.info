# 📦 Legacy Site Archive

Ce dossier contient l'archive complète du site legacy `lapistedesoasis.info` récupéré via FTP.

## Structure attendue (après récupération FTP)

```
legacy/
├── www/                    # Racine du site
│   ├── index.html/php      # Page d'accueil
│   ├── pages/              # Pages de contenu (popups Highslide)
│   ├── images/             # Assets images
│   ├── photos/             # Galeries photos
│   ├── videos/             # Embeds ou fichiers vidéo
│   ├── docs/               # PDFs (programmes, livres photo)
│   ├── css/                # Styles
│   ├── js/                 # JavaScript (Highslide, etc.)
│   └── ...
└── README.md               # Ce fichier
```

## Notes d'accès FTP

- **Logiciel** : FileZilla
- **Documentation** : Voir doc PDF fourni par Cap au Sud
- **Racine** : `www/`

## ⚠️ Important

- Ce dossier est une **archive de référence uniquement**
- **NE PAS** modifier ces fichiers
- Utilisé pour :
  - Inventaire du contenu à migrer
  - Référence visuelle
  - Extraction des textes/images

## Prochaines étapes

1. [ ] Obtenir les credentials FTP complets (host + username)
2. [ ] Télécharger l'intégralité du site
3. [ ] Inventorier le contenu
4. [ ] Identifier les assets à migrer

---
*Archive créée pour le projet de migration vers Next.js/Supabase - Décembre 2024*

