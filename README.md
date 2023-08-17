# Tokopedia Play Clone

> 🎥 Your All-in-One Video Streaming and Shopping Experience 🛍️

Dive into the world of seamless entertainment and shopping with **Tokopedia Play Clone** - your gateway to captivating videos and exciting products, all in one place!

## Features 🚀

- 📺 **Video Extravaganza**: Explore a vast collection of YouTube videos right at your fingertips.
- 🎬 **Video Detail Delight**: Immerse yourself in the magic of each video with our immersive detail page.
- 💬 **Say it Loud**: Share your thoughts with the world! Engage in conversations and submit comments effortlessly.
- 🔮 **React Magic**: Enjoy the sleek and intuitive user interface powered by the enchanting Chakra UI.
- 🌐 **Seamless Navigation**: Glide through pages smoothly with the enchanting React Router.

## Additional Charms ✨

- 👑 **Personalized Kingdom**: Create an account, get recommendations tailored just for you, and mark favorites for later.
- ❤️ **Spread the Love**: Express your affection by liking videos and saving them for a future rendezvous.
- 🚀 **Stay in the Loop**: Receive real-time notifications for new videos and comments - never miss a moment!

## How to Embark on this Journey 🌟

1. 🧙‍♂️ **Summon the Project**:
   ```bash
   git clone https://github.com/your-username/tokopedia-play-clone.git
   ```

2. 🌍 **Enter the Realm**:
   ```bash
   cd tokopedia-play-clone
   ```

3. 📦 **Gather Artifacts**:
   ```bash
   npm install
   ```

4. 🔑 **Unlock Secrets**:
   - Create a `.env` file and add your MongoDB connection string as `MONGODB_URI`.

5. 🚀 **Launch the Adventure**:
   ```bash
   npm start
   ```

6. 🌌 **Embark on a Quest**:
   Open your browser and venture to `http://localhost:3000` to embark on your journey!

## The Scrolls of Database Magic 📜

Delve into the secrets of our MongoDB spellbook:

1. `videos` Collection:
   - `videoId`: 🎥 String (YouTube video ID)
   - `title`: 📜 String (Video title)
   - `description`: 📝 String (Video description)
   - `thumbnail`: 🖼️ String (URL to video thumbnail)

2. `comments` Collection:
   - `videoId`: 🎥 String (YouTube video ID)
   - `name`: 📛 String (User's name)
   - `text`: 💬 String (Comment text)
   - `timestamp`: 🕒 Date (Comment submission timestamp)

Unveil the full potential of our magical database schema with your creativity!
