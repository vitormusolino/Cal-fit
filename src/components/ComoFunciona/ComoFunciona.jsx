import ImgInfo from '../../assets/FotosInfos.png';

function ComoFunciona() {
    return (
        <div className="bg-cinza-bg py-14 px-5 md:px-10 m-12 lg:mx-72 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-10">
                <div className="flex flex-col text-center lg:text-left self-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
                        Como o Fit Cal funciona?
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-cinza-texto font-medium max-w-full lg:max-w-lg">
                        Ao tirar uma foto com o Fit Cal, o sensor de profundidade do seu celular calcula o volume da sua comida. 
                        Com essas informações, nosso modelo de IA, treinado com milhares de imagens de alimentos, separa sua refeição 
                        em diferentes componentes e suas proporções. Por fim, nosso modelo de IA multimodal analisa todos os dados e 
                        entrega os resultados finais: calculando as calorias, proteínas, carboidratos e gorduras da sua refeição.
                    </p>
                </div>
                <img
                    src={ImgInfo}
                    alt="Ilustração explicando o Fit Cal"
                    className="max-w-full lg:max-w-[400px] xl:max-w-[400px] w-[70%] lg:w-auto rounded-md"
                />
            </div>
        </div>
    );
}

export default ComoFunciona;