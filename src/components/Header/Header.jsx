import { useState } from "react";
import FitCal from "../../assets/FitCal.svg";

function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="p-10">
            {/* Container Flexível */}
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <img src={FitCal} alt="FitCal Logo" className="max-w-24 md:max-w-32" />

                {/* Menu Desktop Centralizado */}
                <div className="hidden md:flex justify-center flex-1">
                    <nav>
                        <ul className="flex gap-10">
                            <li
                                className="relative cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <span className="flex items-center gap-2">
                                    Funcionalidades
                                    <span
                                        className={`transition-transform duration-200 ${
                                            isDropdownVisible ? "rotate-180" : ""
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </span>
                                <ul
                                    className={`absolute left-0 top-full bg-white shadow-lg border rounded-lg mt-1 w-48 transition-opacity duration-200 ${
                                        isDropdownVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                                        <a
                                            href="#como-funciona"
                                            className="block w-full h-full"
                                            onClick={() => setIsDropdownVisible(false)}
                                        >
                                            Como o Fit Cal funciona?
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                                        <a
                                            href="#precisao"
                                            className="block w-full h-full"
                                            onClick={() => setIsDropdownVisible(false)}
                                        >
                                            O quão preciso é o Fit Cal?
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Botão do Menu Hambúrguer */}
                <button
                    className="md:hidden text-black focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>

                {/* Botão Download (mantido à direita) */}
                <div className="hidden md:block">
                    <a href="" className="text-white bg-black py-3 px-7 rounded-sm font-semibold ">
                        Download
                    </a>
                </div>
            </div>

            {/* Menu Mobile */}
            <nav
                className={`md:hidden bg-white shadow-md transition-transform duration-300 ${
                    isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
            >
                <ul className="flex flex-col mt-5 items-center space-y-4 py-4 gap-5">
                    <li>
                        <a
                            href="#como-funciona"
                            className="text-black hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Como o Fit Cal funciona?
                        </a>
                    </li>
                    <li>
                        <a
                            href="#precisao"
                            className="text-black hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            O quão preciso é o Fit Cal?
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className="text-white bg-black py-3 px-7 rounded-sm font-semibold"
                        >
                            Download
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
