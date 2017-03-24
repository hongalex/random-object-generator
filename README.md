# Random * Generator

Random * Generator / Random Object Generator is a web-based coin flipper, dice roller, and other 
random object generation built with Angular2. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Requirements

1. Install Angular CLI 

	```npm install -g @angular/cli```
2. Clone repo 

	```git clone https://github.com/hongalex/random-object-generator.git```

	```cd random-object-generator```
3. Install node modules 

	```npm install```

## Development 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Examples

Please enter each object requested separated by commas. Quantities may be entered to increase the number of objects 
generated of that type. 

Input: ```3 d4, 2 d6, 1 d10, color, horoscope```

Objects currently supported:

1. d4, d6, d10, d20
2. coins
3. horoscopes 
4. colors

Future objects that will be included:

1. hearthstone/other TCG cards
2. dates
3. strings
4. magic 8 ball 
5. range-based/set-based random generations

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests (TODO)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests (TODO)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).