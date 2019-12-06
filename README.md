# ProductsRestAngular

This application was build to finish the Web Application Development discipline of ADSGE course at IFTM Udi Centro. It uses a fake rest API (json server on db.js file) simulating the [products-rest-api](https://github.com/isaquebrb/products-rest-api) to manage products, it's categories and orders. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Getting Started

Open the terminal, go to the project folder, run command:

`npm install bootstrap jquery popper.js json-server --save`

Start json server

`json-server --watch server/db.json` or
`npx json-server --watch server/db.json` if you don't have json-server installed globally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Resources:

Angular 8.2, Json Server, Bootstrap 4.4, JQuery 3.4, Popper.js 1.16.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
