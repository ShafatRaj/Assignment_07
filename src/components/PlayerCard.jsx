/* eslint-disable react/prop-types */

const PlayerCard = ({ player, onSelect, disabled, selectedPlayers }) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);
  
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
        <div className="space-y-1 mb-4">
          <p className="text-gray-600">Country: {player.country}</p>
          <p className="text-gray-600">Role: {player.role}</p>
          <p className="text-gray-600">Batting: {player.batting}</p>
          <p className="text-gray-600">Bowling: {player.bowling}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">{player.price} coins</span>
          <button
            onClick={() => onSelect(player)}
            disabled={disabled || isSelected}
            className={`px-4 py-2 rounded-lg ${
              disabled || isSelected
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSelected ? "Selected" : "Select Player"}
          </button>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;
  