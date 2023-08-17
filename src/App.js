// App.js
import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import YouTubeVideoCard from './components/YoutubeVideoCard';
import VideoPage from './components/VideoPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Navbar />
          <Container maxW="6xl" mt={8}>
            <Routes>
              <Route path="/" element={<YouTubeVideoCard />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
