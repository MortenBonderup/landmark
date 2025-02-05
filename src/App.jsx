import { useState } from 'react';
import './App.css'
import Footer from './Footer'
import Header from './Header'
import LandmarkList from './LandmarkList'
import LandmarkDetail from './LandmarkDetail';
import About from './About';

function App() {
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const landmarks = [
    {
      name: "Eiffel Tower",
      description: "An iconic symbol of Paris, France.",
      image: "https://picsum.photos/seed/picsum/200/300",
      details: {
        history: "The Eiffel Tower was constructed in 1889 as the entrance arch for the 1889 World's Fair.",
        facts: "It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
      }
    },
    {
      name: "Great Wall of China",
      description: "A historic wall stretching across northern China.",
      image: "https://picsum.photos/200/300?grayscale",
      details: {
        history: "The Great Wall was built over several dynasties, starting as early as the 7th century BC.",
        facts: "It is the longest wall in the world, stretching over 13,000 miles."
      }
    },
    {
      name: "Statue of Liberty",
      description: "A symbol of freedom in New York, USA.",
      image: "https://picsum.photos/200/300.jpg",
      details: {
        history: "The Statue of Liberty was a gift from France to the United States, dedicated in 1886.",
        facts: "It was designed by French sculptor Frédéric Auguste Bartholdi and built by Gustave Eiffel."
      }
    }
  ]

  function handleCardClick(landmark) {
    setSelectedLandmark(landmark);
  }

  function handleCloseDetail() {
    setSelectedLandmark(null);
  }

  return (
    <>
      <Header />
      <LandmarkList landmarks={landmarks} onCardClick={handleCardClick} />
      {selectedLandmark && (
        <LandmarkDetail
          open={Boolean(selectedLandmark)}
          onClose={handleCloseDetail}
          landmark={selectedLandmark}
        />
      )}
      <About />
      <Footer />
    </>
  )
}

export default App;
