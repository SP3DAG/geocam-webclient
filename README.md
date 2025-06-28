<<<<<<< HEAD

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======
﻿# GeoCam Web Client

A Vue 3 frontend for the GeoCam iPhone application that automatically geotags photos.

![title_image](/src/assets/readme_title.png)

## Project Structure

```
geocam-webclient/
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   ├── components/           # Reusable Vue components
│   ├── router/               # Vue router configuration
│   ├── stores/               # Pinia state management
│   ├── utils/                # Utility functions
│   ├── views/                # Page components
│   ├── App.vue               # Root component
│   └── main.js               # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## Requirements

### System Requirements
- Node.js v16+
- npm v8+
- Git

### Development Requirements
```bash
npm install -g @vue/cli
```

### Project Dependencies
- Vue 3
- Pinia (state management)
- Vue Router
- Leaflet (for maps)
- Axios (for API calls)
- Bootstrap CSS framework
-

## Installation

```bash
git clone https://github.com/SP3DAG/geocam-webclient.git
cd geocam-webclient
npm install
npm run dev

```

## Development Scripts
```bash
npm run serve     # Start development server
npm run build     # Create production build
```

## Publish

For publishing, the project needs to be build using `npm run build`. 
The production version will then be created in the ./dist/ directory by default.
This folder can then be copied to the desired publishing server.
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
