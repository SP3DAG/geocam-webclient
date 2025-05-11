# GeoCam Web Client

A Vue 3 frontend for the GeoCam iPhone application that automatically geotags photos.

## Project Structure

```
geocam-webclient/
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   ├── components/           # Reusable Vue components
│   │   ├── camera/           # Camera capture components
│   │   ├── common/           # Shared utilities
│   │   ├── gallery/          # Photo gallery components
│   │   ├── map/              # Map visualization
│   │   └── ui/               # UI elements (buttons, cards)
│   ├── composables/          # Vue composition API functions
│   ├── router/               # Vue router configuration
│   ├── stores/               # Pinia state management
│   ├── utils/                # Utility functions
│   │   ├── api.js            # API communication
│   │   └── geolocation.js    # Location services
│   ├── views/                # Page components
│   │   ├── HomeView.vue
│   │   ├── CaptureView.vue
│   │   ├── GalleryView.vue
│   │   └── MapView.vue
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
- Mapbox GL JS (for maps)
- Axios (for API calls)

### Environment Variables
Create a `.env` file with:
```
VUE_APP_MAPBOX_TOKEN=your_mapbox_access_token
VUE_APP_API_BASE_URL=your_api_base_url
```

## Installation
```bash
git clone https://github.com/SP3DAG/geocam-webclient.git
cd geocam-webclient
npm install
npm run dev
```

## Development Scripts
```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run lint    # Run linter
```
