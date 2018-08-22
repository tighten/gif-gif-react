# Gif Gif

Because there's really only one way to pronounce it...

## Introduction

This is the React version of the Vue code written by [Samantha Geitz](https://twitter.com/samanthageitz) at Laracon 2018 during her talk ["Jest Do It"](https://www.youtube.com/watch?v=AxlqFgY0BGY). You can find the Vue version of this project [here](https://github.com/tightenco/gif-gif-vue).

It is a basic React/Laravel application with some tests written in [Jest](https://jestjs.io/) and [Enzyme](http://airbnb.io/enzyme/) written to test front-end functionality.

Currently, this project is using an in-development version of [Laravel Jest Presets](https://github.com/tightenco/laravel-preset-jest/). This package is *NOT ON PACKAGIST AND PROBABLY NOT PRODUCTION READY*, but you can use it if you are interested in trying out Jest easily in your Laravel applications! 

## Installation Instructions for a New React/Laravel/Jest Project

Run `$ laravel new gif-gif-react`

Optionally, install a CSS/UI framework like Tailwind CSS (if you are doing the latter, the [Laravel Frontend Preset for Tailwind CSS](https://github.com/laravel-frontend-presets/tailwindcss) package is highly recommended, although it will require additional config of your `webpack.mix.js` to match this project).

For easy installation of React and Jest, add the following to your `composer.json` file and run `$ composer update`:

```
"repositories": [
    {
        "type": "vcs",
        "url": "https://github.com/tightenco/laravel-preset-jest"
    }
],
"require": {
    "tightenco/laravel-preset-jest": "@dev"
},
```

To install React, do the following:

`$ php artisan fe-preset react`

This will install React, Jest and Enzyme (which can optionally be used for testing), the Babel presets you need, and update your `webpack.mix.js` file for React.



