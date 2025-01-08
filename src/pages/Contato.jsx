import Telefone from '../assets/Telefone.png';
import Whatsapp from '../assets/Whatsapp.png';
import Email from '../assets/Email.png';

function Contato() {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Como encontrar a gente</h2>
            <p className="text-gray-600 mb-6">
                Caso tenha alguma dúvida, ou queira entrar em contato conosco, basta entrar em contato através de nosso email ou celular
                <span className="block text-sm text-gray-500">(Responderemos somente durante dias de semana)</span>
            </p>

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <img src={Telefone} alt="Ícone Telefone" className="w-6 h-6" />
                    <p className="text-gray-800">+55 11 96853-3521</p>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={Whatsapp} alt="Ícone Whatsapp" className="w-6 h-6" />
                    <p className="text-gray-800">+55 11 96853-3521</p>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={Email} alt="Ícone Email" className="w-6 h-6" />
                    <p className="text-gray-800">fittcalapp@gmail.com</p>
                </div>
            </div>

            <div className="mt-6">
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Segunda à Sexta:</span> 9:00 - 18:00
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Feriados:</span> fechado
                </p>
            </div>
        </div>
    );
}

export default Contato;