# uk-tube-line-status-react-app

A simple single page application which shows the current tube line status, by consuming TFL unified-api

## Prerequisites

Nodejs v16.16.0 +
Yarn globally
docker-compose [optional, if you are using docker way of running]

## Run the application in your local

1. Change the API key in `app\.env`
   To get the api key - First subscribe the Line API (https://api-portal.tfl.gov.uk/product#product=2357355709892). Then take Primary key from the https://api-portal.tfl.gov.uk/profile

### Without Docker

1. `cd app`
2. `yarn install`
3. `yarn run dev`

The local dev server will be available on 3000 port
If you want to access it in mobile with the same network http://192.168.1.3:3000

### Docker way

1. `docker-compose up --force-recreate`

## Other commands

1. To run the application in production mode in dev
   `yarn run build`
   `yarn run preview`

   The vite preview command will boot up local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment. (https://stackoverflow.com/questions/71703933/what-is-the-difference-between-vite-and-vite-preview)

2. To run the unit test cases
   `yarn run test`

3. To get the test coverage
   `yarn run coverage`

4. To check the lint issues
   `yarn run lint`

5. To build the production artifacts
   `yarn run build`
   By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.

## Assumptions

1. API will return http 200 status code for valid response
2. Application is only for UK country , lang="en-GB"
3. statusSeverity in the api response will be ascending order, means less statusSeverity need to list first
4. lineStatuses array will always contains one single element . using the first elemnt in the array as current status

## External libraries

1. vite - Vite is a build tool (https://vitejs.dev/guide/ , https://vitejs.dev/guide/why.html)
2. typescript - https://www.npmjs.com/package/typescript
3. sass - A pure JavaScript implementation of
4. react-test-renderer - This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
5. jest - JavaScript Testing library
6. react testing library - Testing APIs for working with React components.
7. govuk-frontend - GOV.UK Frontend (css utility classes)
8. jest-axe - for testing accessibility

## Screenshots

![laptop view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/laptop.png?raw=true)

![tab view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/tab.png?raw=true)

![mobile view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/mobile.png?raw=true)

![expanded view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/expanded-view.png?raw=true)

![accessibility check](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/accessibility.png?raw=true)

![lighthouse score](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/lighthouse.png?raw=true)

![unit-test](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/unit-test.png?raw=true)

![coverage](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/coverage.png?raw=true)

![tsc-lint-error](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/tsc-lint-error.png?raw=true)
