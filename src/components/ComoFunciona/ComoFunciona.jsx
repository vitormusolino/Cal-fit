import ImgInfo from '../../assets/FotosInfos.png'

function ComoFunciona() {
    return ( <>
                <div className='flex bg-cinza-bg py-14 mx-72 px-10 rounded-lg justify-around'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-5xl font-bold mb-10'>Como o Fit Cal funciona?</h1>
                        <p className='text-base max-w-lg text-cinza-texto font-medium'>Ao tirar uma foto com o Fit Cal, o sensor de profundidade do seu celular calcula o volume da sua comida. Com essas informações, nosso modelo de IA, treinado com milhares de imagens de alimentos, separa sua refeição em diferentes componentes e suas proporções. Por fim, nosso modelo de IA multimodal analisa todos os dados e entrega os resultados finais: calculando as calorias, proteínas, carboidratos e gorduras da sua refeição.</p>
                    </div>
                    
                    <img src={ImgInfo} alt="" className='max-w-96' />
                </div>
            </> );
}

export default ComoFunciona;