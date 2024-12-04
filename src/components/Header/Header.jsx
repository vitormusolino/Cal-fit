import { useState } from 'react';
import FitCal from '../../assets/FitCal.svg';

function Header() {
    // Estado para controlar a visibilidade do dropdown
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Função para alternar a visibilidade do dropdown
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="flex justify-around items-center p-10 text-lg font-regular">
            <img src={FitCal} alt="" className='max-w-40'/>

            <div>
                <ul className='flex gap-10'>
                    {/* Item de funcionalidades com click para mostrar/ocultar a lista */}
                    <li 
                        onClick={toggleDropdown} 
                        className="cursor-pointer relative">
                        Funcionalidades
                        {/* Exibir dropdown se isDropdownVisible for true */}
                        {isDropdownVisible && (
                            <ul className="absolute bg-white shadow-lg border rounded-lg mt-2 w-48">
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Seção 1</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Seção 2</li>
                            </ul>
                        )}
                    </li>
                    <li>Blog</li>
                </ul>
            </div>

            <div>
                <a href="" className='text-white bg-black py-2 px-7 rounded-lg font-semibold'>Download</a>
            </div>
        </div>
    );
}

export default Header;
