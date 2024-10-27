/* eslint-disable react/prop-types */


const SelectedPlayer = ({ player, onRemove }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src={player.image} 
            alt={player.name} 
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold">{player.name}</h3>
            <p className="text-gray-600">{player.role}</p>
            <p className="text-blue-600 font-bold">{player.price} coins</p>
          </div>
        </div>
        <button
          onClick={() => onRemove(player)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    );
  };
  
  export default SelectedPlayer;
  