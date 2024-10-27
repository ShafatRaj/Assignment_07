/* eslint-disable react/prop-types */

const Banner = ({ onAddCoins }) => {
    return (
      <div className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto text-center px-4">
        <div>
          <img src="../assets/banner-main.png" alt="" />
        </div>
        
          <h2 className="text-4xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="mb-6">Beyond Boundaries Beyond Limits</p>
          <button
            onClick={onAddCoins}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  