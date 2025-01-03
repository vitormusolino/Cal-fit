import React from "react";
import { Helmet } from "react-helmet";

function PoliticaPrivacidade() {
    
    const seo = (
        <Helmet>
            <title>Política de Privacidade - FitCal</title>
            <meta name="description" content="Leia a nossa política de privacidade para entender como seus dados pessoais são coletados, usados e protegidos no FitCal." />
            <meta name="robots" content="index, follow" />
            <link rel="" href="https://fitcalai.app/privacidade" />
        </Helmet>
    );

    return (
        <>
        {seo}

        <div className="container mx-auto px-6 py-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
                Política de Privacidade
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-semibold text-center">
                Última atualização:{" "}
                <span className="font-normal">16 de Dezembro de 2024</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
                Esta Política de Privacidade descreve nossas políticas e procedimentos sobre a coleta, uso e divulgação
                de suas informações ao utilizar nosso Serviço, informando sobre seus direitos de privacidade e como a
                lei protege você. Utilizamos seus dados pessoais para fornecer e melhorar o Serviço. Ao utilizar o
                Serviço, você concorda com a coleta e o uso de informações de acordo com esta Política de Privacidade.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Interpretação e Definições</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Interpretação</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    As palavras cuja inicial está em maiúscula têm significados definidos nas condições descritas a
                    seguir. As definições terão o mesmo significado, independentemente de aparecerem no singular ou no
                    plural.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Definições</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>Conta:</strong> Uma conta única criada para você acessar nosso Serviço ou partes do Serviço.
                    </li>
                    <li>
                        <strong>Afiliada:</strong> Uma entidade que controla, é controlada por ou está sob controle comum
                        com uma das partes.
                    </li>
                    <li>
                        <strong>Empresa:</strong> Refere-se ao FitCal, com sede no Brasil.
                    </li>
                    <li>
                        <strong>Cookies:</strong> Pequenos arquivos colocados no seu dispositivo contendo informações
                        sobre seu histórico de navegação.
                    </li>
                    <li>
                        <strong>Dispositivo:</strong> Qualquer dispositivo que possa acessar o Serviço, como um
                        computador, celular ou tablet digital.
                    </li>
                    <li>
                        <strong>Serviço:</strong> Refere-se ao site e/ou aplicativo FitCal.
                    </li>
                    <li>
                        <strong>Você:</strong> O indivíduo que acessa ou usa o Serviço.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Coleta e Uso de seus Dados Pessoais</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tipos de Dados Coletados</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Ao usar nosso Serviço, podemos solicitar que você nos forneça informações pessoais identificáveis,
                    incluindo:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Endereço de e-mail</li>
                    <li>Nome e sobrenome</li>
                    <li>Número de telefone</li>
                    <li>Data de nascimento</li>
                    <li>Informações de endereço</li>
                    <li>Dados nutricionais informados por você</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Além disso, coletamos automaticamente Dados de Uso, como informações sobre seu dispositivo, tipo e
                    versão do navegador, páginas visitadas, e tempo gasto no Serviço.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tecnologias de Rastreamento e Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Usamos Cookies e tecnologias semelhantes para monitorar a atividade em nosso Serviço. Tipos de Cookies:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do Serviço.
                    </li>
                    <li>
                        <strong>Cookies de Funcionalidade:</strong> Melhoram a experiência do usuário.
                    </li>
                    <li>
                        <strong>Cookies de Análise:</strong> Coletam informações para análise de uso e desempenho.
                    </li>
                    <li>
                        <strong>Cookies de Aceitação de Política:</strong> Armazenam suas preferências sobre aceitação de termos.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Uso de seus Dados Pessoais</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Empresa pode usar os Dados Pessoais para diversas finalidades, incluindo:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Fornecer e manter o Serviço.</li>
                    <li>Gerenciar sua Conta e fornecer funcionalidades exclusivas.</li>
                    <li>Executar contratos e processar compras.</li>
                    <li>Contatá-lo sobre atualizações ou promoções.</li>
                    <li>Personalizar sua experiência no Serviço.</li>
                    <li>Realizar análises para melhorar o Serviço.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Compartilhamento de Dados Pessoais</h2>
                <p className="text-gray-700 leading-relaxed">
                    Seus dados pessoais podem ser compartilhados em situações como:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Com Fornecedores de Serviços.</li>
                    <li>Para Cumprir Obrigações Legais.</li>
                    <li>Com Afiliadas.</li>
                    <li>Em Caso de Fusões ou Aquisições.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Alterações nesta Política de Privacidade</h2>
                <p className="text-gray-700 leading-relaxed">
                    Podemos atualizar esta Política periodicamente. Recomendamos revisar esta página regularmente para
                    quaisquer alterações.
                </p>
            </section>

            <p className="text-center text-gray-700 mt-6">Obrigado por confiar no FitCal!</p>
        </div>
        </>
    );
}

export default PoliticaPrivacidade;
