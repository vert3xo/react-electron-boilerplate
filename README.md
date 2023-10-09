# Create React App
This project is using `create-react-app` which is not really recommended anymore. Maybe I'll make something similar for Vite.

# React Electron Boilerplate

[electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) was a little too complex so I made my own :)

# Get Started

Disclaimer: This project uses `yarn` do **NOT** use `npm`

1. Install packages with `yarn install`
2. Start the development server with `yarn start`
3. Build the optimized production version with `yarn build`
4. Package the application with `yarn package`

# Packaging

`yarn package` creates a package for the platform you're currently using.

To build for other platforms use `yarn package:<platform>` or `yarn package:all`

# Folder Structure

- `build` contains compiled code for both React and Electron (`yarn build`)
- `dist` contains packaged Electron application (`yarn package`)
- `electron` contains all Electron code
- `public` React public files
- `src` contains all React code
- `webpack` Webpack configuration

# TODO

- [x] Webpack Bundle Analyzer
- [x] Webpack Terser Plugin
- [x] Mini CSS Extract Plugin
- [x] CSS Minimizer Webpack Plugin
