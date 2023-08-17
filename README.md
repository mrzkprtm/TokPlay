<<<<<<< HEAD
# Project Title

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>
=======
```markdown
# Tokopedia Play Clone

A clone of Tokopedia Play, bringing together video streaming and product selling in one platform.

## Features

- 📺 Browse and watch YouTube videos seamlessly.
- 📋 Video detail page with an embedded YouTube video, product listings, comments, and an interactive comment submission form.
- 🎨 User-friendly and visually appealing UI, powered by Chakra UI.
- 🌐 Efficient navigation between pages with React Router.
- ⚛️ Custom React hooks for streamlined API data fetching.
- 💬 Easy comment submission with minimal user input.

## Additional Features

- 🔐 User authentication and personalized user profiles.
- 🔍 Intelligent video recommendations based on user preferences.
- ❤️ Like and save videos for convenient future access.
- 🔔 Real-time notifications for new videos and comments.

## How to Install & Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mrzkprtm/tokplay.git
   ```

2. **Navigate to the project directory:**
>>>>>>> f530b0680b5f838685f6c6429e17d8d20b4514d2

   ```bash
   cd tokopedia-play-clone
   ```

<<<<<<< HEAD
## Getting Started <a name = "getting_started"></a>
=======
3. **Install dependencies:**
>>>>>>> f530b0680b5f838685f6c6429e17d8d20b4514d2

   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string as `MONGODB_URI`.

5. **Run the development server:**

   ```bash
   npm start
   ```

6. **Open your browser:**
   - Go to `http://localhost:3000` to access the app.

## Schema Database

We utilize MongoDB as the database. Below is an overview of the collections:

1. **`videos` Collection:**
   - `videoId`: String (YouTube video ID)
   - `title`: String (Video title)
   - `description`: String (Video description)
   - `thumbnail`: String (URL to video thumbnail)

<<<<<<< HEAD
And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.
=======
2. **`comments` Collection:**
   - `videoId`: String (YouTube video ID)
   - `name`: String (User's name)
   - `text`: String (Comment text)
   - `timestamp`: Date (Comment submission timestamp)
>>>>>>> f530b0680b5f838685f6c6429e17d8d20b4514d2
