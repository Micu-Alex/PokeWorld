# Pokémon React App

Welcome to the Pokémon React App! This project showcases the usage of various technologies to create a simple application for fetching and displaying Pokémon data.

## Technologies Used

- [React](https://reactjs.org/)

  - A JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.

- [TypeScript](https://www.typescriptlang.org/)

  - TypeScript is a superset of JavaScript that adds static types to your code. It enhances code quality, provides better tooling support, and helps catch errors during development.

- [Axios](https://axios-http.com/)

  - Axios is a promise-based HTTP client for making API requests in the browser and Node.js. It simplifies data fetching and response handling.

- [React Query](https://react-query.tanstack.com/)

  - React Query is a data-fetching library for React applications. It provides tools for caching, fetching, and updating remote data seamlessly. It also supports optimistic updates and invalidation.

- [PokéAPI](https://pokeapi.co/)

  - The PokéAPI is a RESTful API that provides comprehensive information about Pokémon species, their abilities, types, and more. This project uses the API to fetch Pokémon data.

- [Material-UI](https://mui.com/)
  - Material-UI is a popular React UI framework that provides pre-designed components following the Material Design guidelines. It enables you to create visually appealing and responsive user interfaces.

## Project Structure

The project follows a modular structure to keep the code organized and maintainable:

- `src/`
  - `components/`: Contains React components used in the application.
  - `services/`: Houses the API client implementation (`APIClient`) and any other data-related logic.
  - `hooks/`: Custom React hooks used for data fetching (e.g., `useGames`).
  - `App.tsx`: The main application component.
  - `index.tsx`: The entry point of the application.

## Getting Started

1. Clone this repository: `https://github.com/Micu-Alex/PokeWorld.git`
2. Navigate to the project directory: `cd PokeWorld`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

The app will be accessible at [http://localhost:5173](http://localhost:5173).
