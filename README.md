# Clepher Frontend Test

This project is a test for Clepher Frontend Developer position.

## Instructions

- Clone this repository
- Install the dependencies by running `npm install`
- Create a `.env` file in the root of the project and add the following environment variables:
  - `VITE_ALPHA_API_KEY` - Your API key from [Alphavantage](https://www.alphavantage.co/support/#api-key)
  - `VITE_ALPHA_API_URL` - The URL to the Alphavantage API. [https://www.alphavantage.co](https://www.alphavantage.co)
  - `VITE_ALPHA_API_USE_MOCK` - Set to `true` to use the mocked data or `false` to use the Alphavantage API.

- To start the project, run `npm run dev`
- To run the tests, run `npm run test`
- To build the project, run `npm run build`

## Requirements

- Node.js version 20 or higher for better performance.
- The project was developed using React^18 (19 still not a stable version), TypeScript, and Vite.
- This project uses Tailwind CSS for styling.
- Also the UI components are built using the Daisy UI library (based on Tailwind).
- The data are mocked by default, but you can use the Alphavantage API by setting the environment variables.

- (Not SWC usage for better compatibility with who is going to review the project)
- (Not using Redux or any other state management library)
- (Not using NextJS for a unique page application)

## Features

- The project has a simple layout with a header and a main content area.
- We are consuming the [Alphavantage API](https://www.alphavantage.co/documentation/) for the stock data.

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [ApexCharts](https://apexcharts.com/)

## Demo

This project will be available at [Live Link](https://clepher-9d4f0.web.app/) until the end of the test and process.
