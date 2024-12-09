import ImgGrafico from '../../assets/GraficoFitCal.png'

function Precisao() {
    return ( <>
            <div className='flex bg-cinza-escuro-bg py-12 mx-72 px-10 rounded-lg mt-20 justify-around mb-20'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-5xl font-bold mb-10 max-w-[30rem]'>O quão preciso é o Fit Cal?</h1>
                        <p className='text-base max-w-lg text-cinza-texto font-medium'>
                            A funcionalidade de escaneamento de imagens da Cal AI é geralmente 90% precisa. Dito isso, se você escanear um alimento com ingredientes ocultos, como um smoothie ou uma sopa, pode ser mais difícil para o sistema. Para esses alimentos, é melhor usar nossa funcionalidade de descrição, que permite que você digite exatamente o que comeu, com todas as informações relevantes. Você também pode usar nossa funcionalidade de escaneamento de código de barras ou de rótulo de alimentos. Caso o resultado seja impreciso, você pode sempre clicar no botão &#39;corrigir resultados&#39; para descrever o que estava errado, para que nossa IA possa corrigir. Isso também nos ajuda a melhorar!
                        </p>

                    </div>
                    
                    <img src={ImgGrafico} alt="" className='max-w-96' />
                </div>
            </> );
}

export default Precisao;