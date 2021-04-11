# SRC Folder

## polyfills.ts

A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers

`https://remysharp.com/2010/10/08/what-is-a-polyfill/` - More details and definitions

## styles.css

You can add global styles to this file, and also import other style files

## bootstrapping the app

### - index.html loads first

- angular core libs
- third party libs

### - the entrypoint - main.ts

this is defined by angular.json:

```
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ToDoList",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]                
          
```

On main.ts, the root module is loaded

### - the root module - app.module.ts


