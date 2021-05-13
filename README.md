## Introduction

You should have link to the design and requirements about what needs to be done.
If you do not have them then please contact us and we will provide them.

This codebase is setup based on what is our FE stack in eAgronom.
As you can see we use:

- React with Redux
- Typescript
- SCSS

It would be awesome if you complete this homework with this stack.

As you might be more comfortable with different stack then it is okay to use:

- JS instead of TS
- CSS, styled-components etc instead of SCSS

Have fun and godspeed!

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all the dependencies that are needed for developing.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
Assignment
├─ cypress
│  ├─ fixtures
│  │  └─ example.json
│  ├─ integration
│  │  └─ dropdown.spec.js
│  ├─ plugins
│  │  └─ index.js
│  ├─ support
│  │  ├─ commands.js
│  │  └─ index.js
│  ├─ utils
│  │  └─ selector_creator.ts
│  └─ videos
│     └─ dropdown.spec.js.mp4
├─ cypress.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  └─ dropdown
│  │     ├─ dropdown.module.scss
│  │     ├─ dropdown.tsx
│  │     ├─ dropdown_link
│  │     │  ├─ dropdown_link.module.scss
│  │     │  └─ dropdown_link.tsx
│  │     └─ dropdown_panel
│  │        ├─ dropdown_panel.module.scss
│  │        └─ dropdown_panel.tsx
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ store
│  │  ├─ action
│  │  │  ├─ ActionTypes.ts
│  │  │  ├─ dropdown.ts
│  │  │  └─ index.ts
│  │  ├─ configure_store.ts
│  │  └─ reducer
│  │     └─ dropdown.ts
│  └─ stylesheets
│     ├─ base.scss
│     ├─ index.scss
│     └─ variables
│        ├─ index.scss
│        └─ _colors.scss
├─ tsconfig.json
├─ types.d.ts
└─ yarn.lock

```
