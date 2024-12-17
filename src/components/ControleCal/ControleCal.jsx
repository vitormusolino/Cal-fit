import BotaoIOS from '../../assets/BotaoIOS.png'
import BotaoAndroid from '../../assets/BotaoAndroid.png'
import ImgCelulares from '../../assets/ImgCelulares.png'

function ControleCal() {
    return ( 
        <>
            <div className='container mx-auto px-7 lg:px-5 lg:max-w-[1270px] lg:mx-auto lg:py-10 flex flex-col lg:flex-row justify-around items-center gap-10'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-5'>Controle suas calorias com somente uma foto!</h1>
                    <p className='text-base sm:text-lg lg:text-xl text-cinza-texto font-medium mb-5'>
                        Conheça o Fit Cal, o app inteligente que torna mais fácil acompanhar suas calorias. Basta tirar uma foto ou escanear um código de barras, 
                        e ele calcula na hora as calorias e os nutrientes. Com insights personalizados e lembretes inteligentes, 
                        você se mantém no foco e alcança suas metas de forma mais rápida!
                    </p>
                    <div className='flex gap-5 justify-center lg:justify-start'>
                        <a href=""><img src={BotaoIOS} alt="Botão iOS" className='max-w-[150px] sm:max-w-[180px] lg:max-w-[200px]' /></a>
                        <a href=""><img src={BotaoAndroid} alt="Botão Android" className='max-w-[150px] sm:max-w-[180px] lg:max-w-[200px]' /></a>
                    </div>
                </div>
                <img src={ImgCelulares} alt="Imagem de celulares" className='max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] mt-8 lg:mt-0' />
            </div>
        </>
    );
}

export default ControleCal;
