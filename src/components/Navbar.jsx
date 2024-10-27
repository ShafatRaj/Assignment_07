/* eslint-disable react/prop-types */



import logo from '../assets/logo.png';
import icon from '../assets/icons8-coin-48.png';
const Navbar = ({coins}) => {
    return (
        <div className='items-center'>
            <div className='flex justify-between w-11/12 mx-auto'>
                <div>
                    <img className='h-14' src={logo} alt="" />
                        
                </div>
                <div className='flex gap-3 font-bold text-xl'>
                    <p>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                    <div className='flex gap-1 border border-x-2 border-y-2 h-8 rounded-md px-2'>
                    <p>{coins}</p>
                    <p>Coin</p>
                    <img className='h-6' src={icon} alt="" />
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;