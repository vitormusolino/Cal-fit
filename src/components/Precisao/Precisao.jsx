import ImgGrafico from '../../assets/GraficoFitCal.png';

function Precisao() {
    return (
        <>
            <div className="bg-cinza-escuro-bg py-14 px-5 md:px-10 m-12 lg:mx-72 rounded-lg">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-10">
                    <div className="flex flex-col text-center lg:text-left self-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
                            O quão preciso é o Fit Cal?
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-cinza-texto font-medium max-w-full lg:max-w-lg">
                            A funcionalidade de escaneamento de imagens da Cal AI é geralmente 90% precisa. Dito isso, se você escanear um alimento com ingredientes ocultos, como um smoothie ou uma sopa, pode ser mais difícil para o sistema. Para esses alimentos, é melhor usar nossa funcionalidade de descrição, que permite que você digite exatamente o que comeu, com todas as informações relevantes. Você também pode usar nossa funcionalidade de escaneamento de código de barras ou de rótulo de alimentos. Caso o resultado seja impreciso, você pode sempre clicar no botão &#39;corrigir resultados&#39; para descrever o que estava errado, para que nossa IA possa corrigir. Isso também nos ajuda a melhorar!
                        </p>
                    </div>

                    <img
                        src={ImgGrafico}
                        alt="Gráfico explicando a precisão do Fit Cal"
                        className="max-w-full lg:max-w-[400px] xl:max-w-[400px] w-[70%] lg:w-auto rounded-md"
                    />
                </div>
            </div>
        </>
    );
}

export default Precisao;
