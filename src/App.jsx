
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import players from './data/players.json';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PlayerCard from './components/PlayerCard';
import SelectedPlayer from './components/SelectedPlayer';
import Footer from './components/Footer';


const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  const handleAddCoins = () => {
    setCoins(prev => prev + 100);
    toast.success('100 coins added!');
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast.error('Player already selected!');
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error('Maximum 6 players allowed!');
      return;
    }

    if (coins < player.price) {
      toast.error('Not enough coins!');
      return;
    }

    setSelectedPlayers(prev => [...prev, player]);
    setCoins(prev => prev - player.price);
    toast.success(`${player.name} added to team!`);
  };

  const handleRemovePlayer = (player) => {
    setSelectedPlayers(prev => prev.filter(p => p.id !== player.id));
    setCoins(prev => prev + player.price);
    toast.info(`${player.name} removed from team`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
    
      <Navbar coins={coins}></Navbar>
      <Banner onAddCoins={handleAddCoins}></Banner>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end space-x-4 mb-6">
          <button
            onClick={() => setShowSelected(false)}
            className={`px-6 py-2 rounded-lg ${
              !showSelected ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setShowSelected(true)}
            className={`px-6 py-2 rounded-lg ${
              showSelected ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        {!showSelected ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map(player => (
              <PlayerCard
                key={player.id}
                player={player}
                onSelect={handleSelectPlayer}
                disabled={coins < player.price}
                selectedPlayers={selectedPlayers}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {selectedPlayers.map(player => (
              <SelectedPlayer
                key={player.id}
                player={player}
                onRemove={handleRemovePlayer}
              />
            ))}
            {selectedPlayers.length > 0 && (
              <button
                onClick={() => setShowSelected(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Add More Players
              </button>
            )}
          </div>
        )}
        <Footer></Footer>
      </main>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;
