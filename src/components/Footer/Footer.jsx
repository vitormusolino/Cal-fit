import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="my-20">
                <p className="text-center text-sm text-slate-500">
                    Copyright © 2024 Fit Cal
                </p>
                <p className="text-center text-xs text-slate-500 mt-3">
                    <Link to="/termos" className="mx-1 hover:underline">Termos de Serviço</Link> |
                    <Link to="/privacidade" className="mx-1 hover:underline">Políticas de Privacidade</Link> 
                </p>
                <div className='flex flex-col justify-center'>
                    <p className='text-center text-sm text-slate-500 mt-3'>Contato:</p>
                    <div className='flex justify-center mt-2'>
                            <a href="mailto:fittcalapp@gmail.com" className='text-center text-xs text-slate-500 mx-2 hover:underline'> fittcalapp@gmail.com </a>
                            <p className='text-center text-xs text-slate-500 mx-2'> +55 11 96853-3521</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
