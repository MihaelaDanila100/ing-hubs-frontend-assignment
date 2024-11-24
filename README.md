## ING Hubs FrontEnd Assignment

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

The project is available at the address: [https://ing-hubs-assessment.vercel.app/](https://ing-hubs-assessment.vercel.app/).

To run the project locally, clone the repo and run:
```
npm install
npm run start
```

## About the project
The project uses as building blocks **lion web components** which are extends and costumized so that they adapt to the task.

## Features available

 **Authentication** works using the test credentials: `email: testuser@gmail.com` and `password: Parola`. Any other credentials are considered invalid and will result in a costumized invalid form error message.

Authentication form is programmed to be a dynamic form that automatically renders a given list of inputs. For validations, there were used validators provided by *lion web components library* in order to validate whether the given fields are correctly completed.

Further components such as header, footer, and user details page were coded by exting Lit components.

## Improvements for the future
* Tests could be added (in the end, due to time shortage the tests didn't get enough work).

## Reference
* Lion web components library: [https://lion.js.org/guides/](https://lion.js.org/guides/)

* Resource for loader SVG: [https://samherbert.net/svg-loaders/](https://samherbert.net/svg-loaders/)