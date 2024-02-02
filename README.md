This is a simple weather app developed with [**React Native**](https://reactnative.dev). 

It uses [**OpenWeather**](https://openweathermap.org/forecast5) API to load the forecast for the next 5 days and display information in 3 hour intervals.  

# Project Structure

- **components:** React components.
- **mappers:** Object mapping.
- **repositories:** Data repositories.
- **services:** Code that implements business logic.
- **slices:** Redux slices used to alter application state.
- **store:** Redux store configuration. 
- **types:** Type definitions
- **utils:** Utility scripts

# Dependencies

The following dependencies where used to develop the application:

- [**Axios**](https://www.npmjs.com/package/axios): HTTP Client
- [**React Native Paper**](https://callstack.github.io/react-native-paper/): Collection of components following Google’s Material Design guidelines.
- [**React Redux**](https://react-redux.js.org/): State container for JavaScript applications.
- [**react-native-dotenv**](https://www.npmjs.com/package/react-native-dotenv): Babel plugin used to inject environment variables into JavaScript.
- [**react-navigation**](https://reactnavigation.org/): Routing and navigation between screens.


# Running the application

## Step 1: Obtain an api key

In order order to access OpenWeather API, it is necessary to create an account and generate an API key.

The key must be filled in the API_ID variable, on the .env file located in the project's root directory.

## Step 2: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ app:

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```



