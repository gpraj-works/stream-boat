# StreamBoat - Video Streaming

StreamBoat is a modern video streaming application developed using Next.js, Prisma, MongoDB, Redux Toolkit, and Tailwind CSS. It offers a seamless video streaming experience while providing user authentication through NextAuth with Google and GitHub.

## Features

- **User Authentication**: StreamBoat uses NextAuth to provide secure user authentication. Users can sign up and log in using their Google or GitHub accounts.

- **Video Streaming**: StreamBoat allows you to stream and watch videos seamlessly. Whether you're a content creator or a viewer, StreamBoat has you covered.

- **Responsive Design**: The application is built with a responsive design in mind, ensuring a great user experience on various devices, including mobile phones, tablets, and desktops.

## Technologies Used

- **Next.js**: A React framework for building fast and efficient web applications.

- **Prisma**: A database toolkit that simplifies database access and management.

- **MongoDB**: A NoSQL database used to store video data and user information.

- **Redux Toolkit**: A state management library that helps manage the application's global state.

- **Tailwind CSS**: A utility-first CSS framework for creating stylish and responsive designs with ease.

- **NextAuth**: A library for authentication in Next.js applications, integrated with Google and GitHub for user authentication.

## Getting Started

To get started with StreamBoat, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/streamboat.git
   ```

2. Install the dependencies:

   ```bash
   cd streamboat
   npm install
   ```

3. Set up your environment variables. You may need to create a `.env.local` file in the root directory with the following content:

   ```dotenv
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

   Replace `your-google-client-id`, `your-google-client-secret`, `your-github-client-id`, and `your-github-client-secret` with your own credentials from the respective developer platforms.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access StreamBoat.

## Acknowledgments

- Special thanks to the creators of Next.js, Prisma, MongoDB, Redux Toolkit, Tailwind CSS, and NextAuth for making this project possible.

- StreamBoat logo design by [GP RAJ].
