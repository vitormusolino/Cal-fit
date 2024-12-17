import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="my-20">
                <p className="text-center text-sm text-slate-500">
                    Copyright © 2024 Cal Fit
                </p>
                <p className="text-center text-xs text-slate-500 mt-3">
                    <Link to="/tos" className="mx-1 hover:underline">Termos de Serviço</Link> |
                    <Link to="/privacy" className="mx-1 hover:underline">Políticas de Privacidade</Link> |
                    <a href="mailto:suporte@fitcal.app" className="mx-1 hover:underline">Fale conosco</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;
