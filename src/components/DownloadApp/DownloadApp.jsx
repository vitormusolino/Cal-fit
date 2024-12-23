function DownloadApp() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-black my-20 px-6 py-16 md:px-20 md:py-24 mx-4 lg:mx-20 xl:mx-80 rounded-lg">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    Use o Fit Cal hoje.
                </h2>
                <p className="text-base text-cinza-claro-texto mt-4 text-center text-[1rem] font-semibold">
                    Controle suas calorias somente com uma foto
                </p>
                <a
                    href="#"
                    className="py-3 px-8 md:px-10 bg-white rounded mt-8 font-bold text-black text-center"
                >
                    Download
                </a>
            </div>
        </>
    );
}

export default DownloadApp;
