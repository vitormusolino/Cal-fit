import BotaoIOS from '../../assets/BotaoIOS.png'
import BotaoAndroid from '../../assets/BotaoAndroid.png'
import ImgCelulares from '../../assets/ImgCelulares.png'

function ControleCal() {
    return ( <>
                <div className='flex py-10 mx-72 justify-around items-center gap-10'>
                    <div>
                        <h1 className='text-5xl font-bold mb-5'>Controle suas calorias com somente uma foto!</h1>
                        <p className='text-base max-w-lg text-cinza-texto font-medium mb-5'>Conheça o Fit Cal, o app inteligente que torna mais fácil acompanhar suas calorias. Basta tirar uma foto ou escanear um código de barras, e ele calcula na hora as calorias e os nutrientes. Com insights personalizados e lembretes inteligentes, você se mantém no foco e alcança suas metas de forma mais rápida!</p>
                        <div className='flex gap-5'>
                            <a href=""><img src={BotaoIOS} alt="" className='max-w-72' /></a>
                            <a href=""><img src={BotaoAndroid} alt="" className='max-w-72' /></a>
                        </div>
                    </div>
                    <img src={ImgCelulares} alt="" className='max-w-2xl'/>
                </div>
            </> );
}

export default ControleCal;