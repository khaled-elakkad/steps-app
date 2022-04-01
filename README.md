# Steps App

This a web app that provides basic workflow management of a contract creation steps.
The most prominent components in the app:

- **Side Panel:** Contains buttons for adding a new step and generating a JSON showing all the step data in the state in addition to all the steps listed in order with the ability to reorder them and select any of them for editing or deleting.

- **Main Panel:** Displays either the steps JSON, an edit/delete form for a selected step or an add form for a new step.

## Running the Web App

To run and use the app:

- clone the repo with `git clone git@github.com:khaled-elakkad/steps-app.git`
- navigate into the project directory with `cd steps-app`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
    src
    ├── App.css # Styles for the app.
    ├── App.js # The root of the app. Encapsulates the app with the Material UI theme, the react-dnd provider as well as the React context provider that manages the state.
    ├── DefaultTheme.js # The MaterialUI theme with few customizations.
    ├── ItemTypes.js # A Card type that assists in the react-dnd.
    |
    ├── providers
    |   ├── StepProvider # Flux like state management using React context and useReducer
    |   └── MyBooks
    |
    ├── components # contains the child componets of the main components
    |   ├── AddStep
    |   ├── AllSteps
    │   ├── BurgerButton
    |   ├── common
    |   ├── EditStep
    |   ├── JSONDisplay
    |   ├── Step
    |   ├── StepsToolbar
    |   └── TextInput
    |
    ├── layout # The big components in the app
    │   ├── AppBar
    │   ├── MainPanel
    │   └── SidePanel
```

## State Management

No external libraries were used for state management. What was used was a Flux like state management using React context and useReducer that contains details about the what the MainPanel is displaying, the steps array and the currently selected step.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Improvements

Further enhancement can be done to the drag and drop component and overall look and feel of the app as well as the responsiveness.

## Credits

Packages and libraries used in the app.

- [`mui`](https://mui.com/) for UI components, styles and theme.

- [`react-dnd`](https://react-dnd.github.io/react-dnd) for the drag and drop steps reorder feature.

- [`uuid`](https://github.com/uuidjs/uuid) for generating new step IDs.
