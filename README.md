# Blog Post WebApp

## Overview

The Blog Post App is a web application developed using React.js, Redux, and Context API. It allows users to view a list of blog posts, add new posts, view post details, edit existing posts, delete posts, and like posts. The application aims to provide a seamless and intuitive user experience for managing blog posts.

### Use of redux tool kit
State management is done through Redux toolkit and Context API. The blog states are managed through Redux (Redux Toolkit).

### Use of context-API
Like state of each blog is managed through Context API.


## Features

- **View Blog Posts**: Users can see a list of blog posts on the homepage.
- **View Post Details**: Users can click on a post to view its details, including title, content, author, and number of likes.
- **Add New Post**: Users can create and publish new blog posts with a title, content, and author name.
- **Edit Post**: Users can edit the content of existing blog posts.
- **Delete Post**: Users can delete blog posts they no longer want to keep.
- **Like Post**: Users can like a post, and the number of likes will be updated in real-time.

## Technology Used

- **React.js**: Frontend library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Context API**: Alternative state management solution provided by React for managing local state.
- **CSS**: Styling is done using CSS to enhance the user interface.

## Prerequisites

- Node.js installed on your local machine.
- Basic understanding of React.js and Redux.
- Familiarity with HTML, CSS, and JavaScript.

## Steps to Configure Locally

1. Clone the repository: git clone https://github.com/satyam131/blog-post-app.git 
2. Navigate to the project directory: cd blog-post-app
3. Install dependencies using npm : npm install
4. Start the development server : npm start
5. Access the application in your web browser at `http://localhost:3000`.



## Deployment on Surge

Follow these steps to deploy your application on Surge:

1. Build the project: npm run build  
2. Install Surger globally: npm install -g surge
3. Run Surge: surge
4. Enter your email and password, and mention the path till the build folder.
5. You will receive a URL, which you can include in your README or in a separate file for sharing with others.

## Additional Notes

- This project utilizes both Redux and Context API for managing state, providing flexibility and scalability.
- Custom styling is applied to enhance the user interface and improve user experience.
- Unit tests and integration tests can be added using testing frameworks like Jest and Enzyme to ensure code quality and reliability.

Feel free to modify and expand upon this README as needed for your project.
