# Exercise Finder

&#10024; Welcome, Fellow Fitness Fantastic! &#10024;

This is a TypeScript and Next.js web application that allows users to retrieve information about physical exercises filtered by muscle groups. It queries an external API to provide exercise details. This README will guide you through the installation, setup, and usage of the app.

**This project is deployed and can be tried [here](https://exercise-finder.marcellodeidda.com/)!**

- [Exercise Finder](#exercise-finder)
  - [Development](#development)
    - [Platform Choice and deployement](#platform-choice-and-deployement)
    - [More ideas](#more-ideas)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)

## Development

### Platform Choice and deployement

I have chosen to develop this web application with Typescript to enforce strict data typing, which enhanced code quality and the developer experience.

The UI was built with React framework Next.js. Server-side-rendering allowed me to create a high-performance, SEO-friendly web application. Most of the components in the page are Server Side Components, apart from Navbar and Form (and children nodes).

I have styled the interface using CSS modules and Flexbox. The pages are fully responsive and have been tested on Chrome, Firefox, Safari, Edge for compatibility. Performance, SEO and Accessibility have been checked and improved with the help of Lighthouse.

I have added an E2E test suite with Cypress. These tests check the elements of the Home and Exercise pages, as well as testing the form functionality. These tests have been added to a build/test pipeline with GitHub Actions.

**I have deployed the app through Vercel, and it is available under my domain: [Exercise Finder](https://exercise-finder.marcellodeidda.com/).**

### More ideas

The app functionality is quite basic at the moment: it sends a request to an external API to fetch a list of physical exercises filtered by muscle group, and displays them in the UI.

I think that a good feature to add would be more specific info about each exercise, such as number of reps/sets suggested, some images to show clearly posture during activity, as well as series of different exercises. I would also add a user database and authentication to enable users to save specific exercises, or series of exercises.

When sending a request to the API I have specified language filter, but the response contains some exercises in Spanish (saved with an English language index). To apply an ulterior filter, I would use a language-detection library. It might also be a good idea giving the user the choice of the language, to expand the user base.

I would also add more testing, mocking the API calls and verifying the exercise list output. Due to restricted time I have hard-coded the muscle list in the test suite, but a better way would be to simulate the API call and make sure the UI matches the given muscle/exercise list.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- An internet connection to access the external API.

## Installation

1. Clone this repository to your local machine:
    ```
    git clone https://github.com/MarcelloDeidda/exercise-finder.git
    ```
2. Navigate to the project directory:
   
   ```
   cd exercise-finder
   ```

3. Install project dependencies

    ```
    npm install
    ```
    
## Usage

To start the development server and run the application, use the following command:

```
npm run dev
```

The app will be accessible in your web browser at http://localhost:3000. You can start searching for exercises by muscle group right away.

To run the cypress test suite, use the following command:

```
npm run test
```
