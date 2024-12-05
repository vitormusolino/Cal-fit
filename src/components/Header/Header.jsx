import { useState } from 'react';
import FitCal from '../../assets/FitCal.svg';

function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="flex justify-around items-center p-10 font-regular mx-0">
            <img src={FitCal} alt="" className="max-w-32" />

            <div>
                <ul className="flex gap-10">
                    <li 
                        onClick={toggleDropdown} 
                        className="cursor-pointer relative flex items-center gap-2"
                    >
                        Funcionalidades
                        {/* Seta rotacionada */}
                        <span 
                            className={`transition-transform duration-200 ${
                                isDropdownVisible ? 'rotate-180' : ''
                            }`}
                        >
                            ▼
                        </span>
                        {/* Dropdown sempre no DOM */}
                        <ul 
                            className={`absolute left-0 top-full bg-white shadow-lg border rounded-lg mt-1 w-48 transition-opacity duration-200 ${
                                isDropdownVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                        >
                            <li className="p-2 hover:bg-gray-200 cursor-pointer">Seção 1</li>
                            <li className="p-2 hover:bg-gray-200 cursor-pointer">Seção 2</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <a href="" className="text-white bg-black py-3 px-7 rounded-sm font-semibold">Download</a>
            </div>
        </div>
    );
}

export default Header;
