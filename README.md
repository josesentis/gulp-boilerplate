# Gulp boilerplate

This Gulp boilerplate provides a starter kit to compile SCSS and JS files and create your sites using TWIG.JS as a templating system. It supporting ES6 features.

## :sparkles: Features

- SCSS compilation
- SCSS minification
- SCSS Autoprefixer
- Font copy to dest folder
- Javascript ES6 transpilation
- Image optimization
- SVG minification
- Changes watcher
- CSS and JS Linterns
- Templating with TWIG.JS
- CRP styles creation
- Browsersync

## :computer: Getting Started

Clone the project and install using yarn or npm

```
$ git clone https://github.com/josesentis15/gulp-boilerplate.git your-repo-name
$ cd your-repo-name
$ yarn / npm install
$ yarn start / npm run start
```

## :file_folder: Folder Structure

- `src/assets` - Javascript, SCSS and fonts and image files
- `src/views` - Twig Files. Gulp compiles twigs found on `pages` folder.
- `dist/css` - Compiled and minified asset files.
- `dist/js`
- `dist/img`
