import { useState } from 'react';
import Header from '../components/Header/Header';
import DestinationList from '../components/DestinationList/DestinationList';
import { destinations as initialDestinations } from '../data/destinations';

function Home() {
  const [destinations, setDestinations] = useState(initialDestinations);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setDestinations(initialDestinations);
      return;
    }

    const filtered = initialDestinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDestinations(filtered);
  };

  return (
    <div className="main-content">
      <Header onSearch={handleSearch} />
      <DestinationList destinations={destinations} />
    </div>
  );
}

export default Home;