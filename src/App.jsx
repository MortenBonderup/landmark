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
      image: "https://cdn.pixabay.com/photo/2023/02/04/20/32/man-7768120_1280.jpg",
      details: {
        history: "The Eiffel Tower was constructed in 1889 as the entrance arch for the 1889 World's Fair.",
        facts: "It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
      }
    },
    {
      name: "Great Wall of China",
      description: "A historic wall stretching across northern China.",
      image: "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg",
      details: {
        history: "The Great Wall was built over several dynasties, starting as early as the 7th century BC.",
        facts: "It is the longest wall in the world, stretching over 13,000 miles."
      }
    },
    {
      name: "Statue of Liberty",
      description: "A symbol of freedom in New York, USA.",
      image: "https://cdn.pixabay.com/photo/2019/04/29/20/41/amsterdam-4167026_640.png",
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
