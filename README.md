# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# VR Art Gallery Project

A virtual reality art gallery experience built with React and Vite.

## Features

- Immersive 3D gallery room
- Hanging frame wall to display digital artwork
- Interactive navigation
- Responsive design works on desktop and VR headsets

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Project Structure

- `src/components/` - Contains core React components like GalleryRoom
- `public/` - Houses all artwork image assets
- Configuration via `vite.config.js`

## Customization

To add your own artwork:

1. Place image files in `public/` directory
2. Update the artwork references in `GalleryRoom.jsx`
3. Three.js/WebGL can be extended for more complex 3D scenes

## Contributing

Pull requests welcome. For major changes, please open an issue first.

## License

This project is currently unlicensed - contact owner for usage permissions.
