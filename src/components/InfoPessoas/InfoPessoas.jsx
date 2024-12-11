import FotoInsta from '../../assets/InstaImg.png'
import Pessoas from '../Pessoas/Pessoas';

function InfoPessoas() {
    const infoPessoas = [
        { 
            foto: FotoInsta, 
            link: 'https://www.instagram.com/enzosegattoc/'
        },
        {
            foto: FotoInsta, 
            link: 'https://www.instagram.com/enzosegattoc/'
        },
        {
            foto: FotoInsta, 
            link: 'https://www.instagram.com/enzosegattoc/'
        },
        {
            foto: FotoInsta, 
            link: 'https://www.instagram.com/enzosegattoc/'
        },
    ];

    return (
        <>
            <div className='flex flex-col my-16'>
                <h2 className='text-center text-cinza-texto text-xl font-medium mb-10'>Pessoas incríveis que usam o Fit Cal:</h2>
                <div className='flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20'>
                    <Pessoas InfoPessoas={infoPessoas}/>
                </div>
            </div>
        </>
    );
}

export default InfoPessoas;
