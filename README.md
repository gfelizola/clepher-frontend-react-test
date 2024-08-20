# Clepher Frontend Test

This project is a test for Clepher Frontend Developer position.

## Instructions

- Clone this repository
- Install the dependencies by running `npm install`
- Create a `.env` file in the root of the project and add the following environment variables:
  - `VITE_ALPHA_API_KEY` - Your API key from [Alphavantage](https://www.alphavantage.co/support/#api-key)
  - `VITE_ALPHA_API_URL` - The URL to the Alphavantage API. (https://www.alphavantage.co)

- To start the project, run `npm run dev`
- To run the tests, run `npm run test`
- To build the project, run `npm run build`

## Requirements

- Node.js version 20 or higher for better performance.
- The project was developed using React^18 (19 still not a stable version), TypeScript, and Vite.
- This project uses Tailwind CSS for styling.
- Also the UI components are built using the Daisy UI library (based on Tailwind).
- The project uses Jest for testing.

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
- [ApexCharts](https://apexcharts.com/)