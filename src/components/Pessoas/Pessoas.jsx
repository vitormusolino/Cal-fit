function Pessoas({ InfoPessoas }) {
    return (
        <>
            {
                InfoPessoas.map(card => (
                    <a href={card.link} key={card.link} className="flex justify-center">
                        <img src={card.foto} alt="" className="max-w-[60px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-[100px]" />
                    </a>
                ))
            }
        </>
    );
}

export default Pessoas;
