# React News Application
A responsive news application built with React, Redux Toolkit, and Tailwind CSS. This application fetches news articles from the NewsAPI and allows users to filter articles based on categories, search by keywords, and paginate through the articles. It also includes a feature to save articles as favorites using local storage.

## Features
Fetch news articles from the NewsAPI.
Filter articles by categories.
Search for articles by keywords.
Pagination to navigate through articles.
Save articles to favorites (persisted with local storage).
Responsive design with Tailwind CSS.
Loading animation using Lottie.
Getting Started
Prerequisites
Node.js and npm installed on your machine.
NewsAPI API key. You can get one by signing up at NewsAPI.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/react-news-app.git
cd react-news-app
Install the dependencies:

npm install
Create a .env file in the root directory and add your NewsAPI key:

REACT_APP_NEWS_API_KEY=your_news_api_key_here
Running the Application
To run the application in development mode, use:

npm start
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

Building for Production
To build the app for production, use:

bash
Copy code
npm run build
This will create a build folder with the production build of your application.


## Dependencies
React: A JavaScript library for building user interfaces.
Redux Toolkit: The official, recommended way to write Redux logic.
Axios: A promise-based HTTP client for the browser and Node.js.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Lottie-react: A library to render Lottie animations in React.
lottie-web: A library to load and render animations exported as JSON.
Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

##Acknowledgements
NewsAPI for providing the news data.
LottieFiles for providing the Lottie animations.
