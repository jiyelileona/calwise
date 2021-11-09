# Calwise

## App Insight
![home-page](https://user-images.githubusercontent.com/71301404/140842276-fd5880ce-afcc-4319-b5d4-1488cdede5d4.jpg)

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/Users/leo/code/svelte",
  "type": [
    "pwa"
  ],
  "name": "My App",
  "framework": "svelte",
  "template": "tabs",
  "bundler": "vite",
  "cssPreProcessor": "scss",
  "theming": {
    "customColor": true,
    "color": "#8067bb",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

