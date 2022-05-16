---
slug: "add-fonts-to-gatsbyjs-with-or-without-tailwindcss"
title: "Add Fonts to GatsbyJS + TailwindCSS"
description: "How to add free Google fonts to the GatsbyJS project with or without the famous TailwindCSS"
thumbnail: "./add-fonts-gatsbyjs.jpg"
category: "GatsbyJS"
tags: 
    - "GatsbyJS"
    - "Fonts"
language: "en"
type: "blog"
created: "2022-03-12"
last-update: "2022-03-14"
---

# Add Fonts to GatsbyJS with or without TailwindCSS

There are 2 ways how to add custom fonts to GatsbyJS project

## Option 1: Using NPM package (preffered)
1. Select a font in [Fontsource](https://fontsource.org/)
2. Install the selected font using command `npm install [font-name]`
3. Import the font to the `gatsby-browser.js` using `import @fontsource/[font-name]`

```javascript
// gatsby-browser.js

/** 
 * FONTS
*/
import "@fontsource/lexend-deca/300.css";
import "@fontsource/lexend-deca/500.css";
```

4. Use the font-family property in your CSS file.

```css
h1 {
	font-family: 'Lexend Deca', 'Arial', sans-serif;
	font-weight: 300;
}
```
### TailwindCSS
If we want to use TailwindCSS there is one more step in order to make our font available across our CSS.

1. Edit `tailwind.config.js`

```javascript
// tailwind.config.js
theme: {
    fontFamily: {
      'sans': ['Lexend Deca', 'Arial', 'sans-serif'],
    },
}
```

2. Call the font anywhere in the CSS

```css
body {
    font-family: theme('fontFamily.sans');
}
```

## Option 2: Import directly to CSS

1. Select a font on Google Fonts page
2. Import it to the `styles.css`

```css
/* styles.css */
	
/** 
 * FONTS
*/
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

3. Use the font-family property in the CSS file

```css
h1 {
	font-family: 'Roboto', 'Arial', sans-serif;
}
```

### TailwindCSS
Using TailwindCSS with a Google Font requires to import the font AFTER the TailwindCSS styles.

1. Make sure that TailwindCSS styles are loaded first

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/** 
 * FONTS
*/
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

2. Edit the `tailwind.config.js`

```javascript
// tailwind.config.js
theme: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
    },
}
```

We can also use extend option.

```javascript
// tailwind.config.js
extend: {
  fontFamily: {
	'main': ['Roboto', 'Arial', 'sans-serif'],
  },
}
```

3. Call the font anywhere in the CSS

```css
body {
    font-family: theme('fontFamily.sans');
}
```


