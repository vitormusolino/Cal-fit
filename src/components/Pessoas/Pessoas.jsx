function Pessoas({ InfoPessoas }) {

    return ( <>
                {
                    InfoPessoas.map(card=> (
                        <a href={card.link}><img src={card.foto} alt="" className="max-w-24" /></a>
                    ))}
            </> );
}

export default Pessoas;