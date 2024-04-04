# DALL-E Clone

## Overview

DALL-E Clone is a web application that leverages the power of the OpenAI API to generate imaginative images based on textual prompts. Users can create unique images through a user-friendly interface and share them with the community. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and allows users to explore a collection of stunning and imaginative images generated by DALL-E AI.

## Features

- **Generate Images**: Create imaginative images by providing textual prompts.
- **Share with Community**: Share the generated images with the DALL-E Clone community.
- **Browse Image Collection**: Explore a collection of visually stunning images.
- **Search Functionality**: Easily find specific posts using the search feature.
- **Responsive Design**: The application is designed to work seamlessly on various devices.

## Installation

1. Clone the repository:
- git clone https://github.com/kumaarbalbir/dalle.git


2. Navigate to the `client` and `server` directories and install dependencies:
   ```bash
   cd dalle/client
   npm install

   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following environment variables:

   - `MONGODB_URL`: Your MongoDB connection URL.
   - `OPENAI_API_KEY`: Your OpenAI API key.
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key.
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.

4. Start the client and server:

   - In the `client` directory:
     ```bash
     npm run dev
     ```

   - In the `server` directory:
     ```bash
     npm start
     ```

5. Access the application in your web browser at `http://localhost:3000` or provided localhost:@port (for client and server)

## Usage

1. Visit the provided URL.

2. Generate Imaginative Images:
   - Provide a prompt for generating an image.
   - Click "Generate" to create the image.
   - Share your imaginative creations with the community.

3. Explore the Collection:
   - Browse through a collection of visually stunning images.

4. Search Posts:
   - Use the search bar to find posts by name or prompt.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- OpenAI API
- Cloudinary
- Vite (for client development)
- Tailwind CSS


## Acknowledgments

- Special thanks to the OpenAI team for providing access to the DALL-E API.
- Thanks to the open-source community for the libraries and tools used in this project.
