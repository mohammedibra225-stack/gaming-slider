# 🎮 Gaming Image Slider — Site Web

Un site web gaming animé avec un **slider d'images interactif** et des **sections scroll animation**, construit en HTML / CSS / JavaScript vanilla .

---

## 📁 Structure du projet

```
projet/
│
├── index.html        ← Structure HTML complète
├── style.css         ← Styles (slider + sections animées)
├── script.js         ← Logique slider + animations au scroll
│
└── images/
    ├── 1.jpg         ← Watch Dogs
    ├── 2.jpg         ← Tomb Raider
    ├── 3.jpg         ← Assassin's Creed Unity
    └── 4.jpg         ← Ghost of Tsushima
```

---

## ✨ Fonctionnalités

### 🎠 Image Slider (Hero)
- Slider plein écran (`100vh`) avec 4 jeux
- Navigation **suivant / précédent** via boutons fléchés
- **Miniatures cliquables** en bas de l'écran
- Animation d'entrée du contenu (titre, type, description, bouton) avec effet **blur + slide**
- Animation de transition des images (zoom depuis la miniature)
- Désactivation des boutons pendant l'animation pour éviter les conflits

### 🃏 Section « Dernières Sorties »
- Grille responsive de **4 cartes jeux**
- Effet **zoom image** au survol
- Overlay avec tag, titre, description et lien « Découvrir » animé
- Apparition au scroll avec **délai en cascade** (stagger) par carte

### 📊 Section « Stats »
- 3 compteurs animés : **joueurs actifs**, **titres disponibles**, **% satisfaction**
- Les chiffres montent de 0 jusqu'à la cible avec un effet **ease-out cubic**
- Déclenché automatiquement quand la section entre dans la fenêtre

### 🌄 Section « À Propos » avec Parallax
- Image de fond avec effet **parallax** (défilement à vitesse réduite)
- Texte de présentation avec bouton d'appel à l'action
- Apparition progressive des éléments au scroll

---

## 🛠️ Technologies utilisées

| Technologie | Usage |
|---|---|
| **HTML5** | Structure sémantique |
| **CSS3** | Animations, transitions, keyframes, variables CSS |
| **JavaScript Vanilla** | Slider, IntersectionObserver, parallax, compteur |
| **Google Fonts** | Bebas Neue (titres) + Barlow (corps) |

Aucune dépendance externe, aucun framework — **100% natif**.

---

## ⚙️ Comment ça marche

### Le Slider
```
Clic "next"
  → sliderList.appendChild(premier item)   ← passe en dernier
  → thumbnail.appendChild(première miniature)
  → slider.classList.add("next")           ← déclenche les @keyframes CSS
  → animationend → classList.remove("next")
```

### Le Scroll Reveal
```
IntersectionObserver surveille chaque .scroll-reveal
  → quand 15% de l'élément est visible :
      element.classList.add("in-view")
      → transition CSS : opacity 0→1, translateY 50px→0
  → observer déconnecté (animation one-shot)
```

### Le Compteur
```
IntersectionObserver sur .stat__num
  → quand visible à 50% :
      requestAnimationFrame en boucle
      → progress = temps écoulé / 2000ms
      → eased = ease-out cubic
      → textContent = Math.floor(eased * target)
```

---

## 🎨 Palette de couleurs

| Nom | Valeur | Usage |
|---|---|---|
| Rouge principal | `#ff1414cb` | Accents, boutons, tags |
| Noir profond | `#000000` | Fond body |
| Sombre | `#111115` | Section jeux |
| Très sombre | `#1a1a1f` | Section about |
| Texte atténué | `#6a6a7a` | Sous-titres, labels |

---

## 📱 Responsive

| Breakpoint | Adaptations |
|---|---|
| `≤ 678px` | Nav centrée, police réduite, grille 2 colonnes |
| `≤ 480px` | Grille 1 colonne, padding ajusté |

---

## 🚀 Lancement

1. Cloner ou télécharger le projet
2. Placer les images dans le dossier `images/`
3. Ouvrir `index.html` dans un navigateur

> ⚠️ Les images doivent être nommées exactement `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`.

---

## 🔧 Personnalisation rapide

### Changer un jeu
Dans `index.html`, modifier le `.item` correspondant :
```html
<div class="type">NOM DU JEU</div>
<img src="./images/tonImage.jpg" alt="" />
```

### Ajouter une carte dans la grille
Copier un bloc `.card` dans la section `.cards-grid` et ajuster `--delay` :
```html
<div class="card scroll-reveal" style="--delay: 0.6s">
  ...
</div>
```

### Modifier les stats
Changer la valeur `data-target` :
```html
<span class="stat__num" data-target="5000000">0</span>
```

### Changer l'image parallax (section About)
Dans `style.css`, ligne `.about-parallax` :
```css
background: ..., url('./images/tonImage.jpg') center/cover no-repeat;
```

---

## 👤 Auteur

Projet réalisé en HTML / CSS / JS .
