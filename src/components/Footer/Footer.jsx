import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="my-20">
            <p className="text-center text-sm text-slate-500">
                Copyright © 2024 Fit Cal
            </p>
            <p className="text-center text-xs text-slate-500 mt-3">
                <Link to="/termos" className="mx-2 hover:underline">
                    Termos de Serviço
                </Link>
                |
                <Link to="/privacidade" className="mx-2 hover:underline">
                    Políticas de Privacidade
                </Link>
                |
                <Link to="/contato" className="mx-2 hover:underline">
                    Contato
                </Link>
            </p>
            <div className="flex flex-col items-center mt-4">
                <p className="text-center text-sm text-slate-500">
                    Contato:
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-center mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                        href="mailto:fittcalapp@gmail.com"
                        className="text-xs text-slate-500 hover:underline"
                    >
                        fittcalapp@gmail.com
                    </a>
                    <p className="text-xs text-slate-500">+55 11 96853-3521</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
