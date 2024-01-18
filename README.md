# Pokémon React App

Welcome to the Pokémon React App! This project showcases the usage of various technologies to create a simple application for fetching and displaying Pokémon data.
### Try it yourself



Try out the application at [PokeWorld](https://poke-world-9eyzmt31l-micu-alexs-projects.vercel.app/).


 We value your feedback and would appreciate it if you could report any issues or provide suggestions for improvements in the future,  
 [submit an issue](https://github.com/Micu-Alex/PokeWorld/issues) on our GitHub repository.

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

- [React Spring](https://react-spring.io/)

  - React Spring is a spring-physics based animation library for React. It allows you to create smooth animations and transitions in your application.

- [React Router](https://reactrouter.com/)
  - React Router is a popular routing library for React applications. It enables you to manage navigation and create multi-page applications.

## Project Structure

The project follows a modular structure to keep the code organized and maintainable:

- `src/`
  - `components/`: Contains React components used in the application.
  - `services/`: Houses the API client implementation (`APIClient`) and any other data-related logic.
  - `hooks/`: Custom React hooks used for data fetching (e.g., `usePokemon.ts`).
  - `pages/`: Contains page components that represent different pages of the application.
  - `index.tsx`: The entry point of the application.

