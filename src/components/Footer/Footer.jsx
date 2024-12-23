import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="my-20">
                <p className="text-center text-sm text-slate-500">
                    Copyright © 2024 Fit Cal
                </p>
                <p className="text-center text-xs text-slate-500 mt-3">
                    <Link to="/tos" className="mx-1 hover:underline">Termos de Serviço</Link> |
                    <Link to="/privacidade" className="mx-1 hover:underline">Políticas de Privacidade</Link> |
                    <a href="mailto:suporte@fitcal.app" className="mx-1 hover:underline">Email |</a>
                    <a href="tel:+551196853-3521 ">Telefone</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;
