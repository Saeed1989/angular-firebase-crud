# # Breaking-news-app-admin-panel

This is an Angular web app project. [Live Link](https://breakingnewsbangla-5e365.web.app/)

## About

This SPA is the admin panel of the Android app "Everyday Top News" for updating data on the cloud server. Firebase is used as cloud server. User authentication is also done by firebase.<br/><br/>
![](demo.gif)
<br/><br/>
![](demo2.gif)

## Technology stack

As the name suggests, this repository is built on top of Angular, however in the implementation detail other supporting technologies will be found as well.

#### Client side

- [Angular](https://angular.io/) - A JavaScript framework for building user interfaces
- [AngularMaterial](https://material.angular.io/) - Material Design components for Angular
- [Jasmine](https://jasmine.github.io/) - A JavaScript test framework
- [AngularFirestore](https://github.com/angular/angularfire) - Promise based HTTP client for the browser and Firebase Firestore database
- [AngularFireStorage](https://github.com/angular/angularfire/blob/master/docs/storage/storage.md) - Promise based HTTP client for the browser and Firebase file storage

#### Server side

- [CloudFirestore](https://firebase.google.com/products/firestore) - A NoSQL document database in the Firebase cloud
- [CloudFireStorage](https://firebase.google.com/docs/storage) - A file storage service in the Firebase cloud

## Development server

##### Prerequisites

- Node.js : To run npm packages

##### Steps

- Run `npm install` to install all required dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --include='**/app/<Folder loacatioon of the file>/*.spec.ts` to execute test of a single file

## Alpha testing

For testing use the following test credentials.<br/>
User ID: test@testmail.com<br/>
Password: testPassword<br/>
(Note that cloud update will not be successful for test user)

## License

[MIT](https://choosealicense.com/licenses/mit/)
