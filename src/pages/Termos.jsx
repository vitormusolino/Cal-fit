import React from "react";

function TermosCondicoes() {
    return (
        <div className="container mx-auto px-6 py-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
                Termos e Condições do FitCal
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-semibold text-center">
                Última Atualização:{" "}
                <span className="font-normal">16 de Dezembro de 2024</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
                Por favor, leia cuidadosamente estes Termos e Condições antes de utilizar nosso aplicativo e serviços.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Interpretação e Definições</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Interpretação</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    As palavras cuja letra inicial está em maiúsculo têm significados definidos nas condições a seguir.
                    As definições a seguir terão o mesmo significado, independentemente de aparecerem no singular ou no plural.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Definições</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>Afiliada:</strong> Uma entidade que controla, é controlada ou está sob controle comum de uma das partes.
                    </li>
                    <li>
                        <strong>País:</strong> Brasil.
                    </li>
                    <li>
                        <strong>FitCal:</strong> Referido como "Empresa", "Nós", "Nos" ou "Nosso" neste acordo.
                    </li>
                    <li>
                        <strong>Dispositivo:</strong> Qualquer dispositivo que possa acessar o Serviço, como um computador, celular ou tablet.
                    </li>
                    <li>
                        <strong>Serviço:</strong> O aplicativo móvel FitCal e o site acessível em <a href="https://fitcal.app" className="text-blue-600 hover:underline">fitcal.app</a>.
                    </li>
                    <li>
                        <strong>Você:</strong> O indivíduo acessando ou usando o Serviço.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Reconhecimento</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Estes Termos e Condições regem o uso do FitCal e estabelecem os direitos e obrigações de todos os usuários em relação ao Serviço.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>Aceitação dos Termos:</strong> Ao acessar ou usar o FitCal, Você concorda em se vincular a estes Termos.
                    </li>
                    <li>
                        <strong>Requisitos de Idade:</strong> Você declara que tem mais de 18 anos de idade. O FitCal não permite que menores de 18 anos usem o Serviço.
                    </li>
                    <li>
                        <strong>Política de Privacidade:</strong> Seu acesso e uso também estão condicionados à aceitação da nossa{" "}
                        <a href="https://fitcal.app/politica-de-privacidade" className="text-blue-600 hover:underline">
                            Política de Privacidade
                        </a>.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Funcionalidades e Permissões</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>Permissão de Câmera e Biblioteca de Fotos:</strong> Necessária para analisar imagens de alimentos e calcular calorias.
                    </li>
                    <li>
                        <strong>Dados Pessoais:</strong> Nome, e-mail e telefone são coletados para comunicação e marketing, garantindo segurança.
                    </li>
                    <li>
                        <strong>Consentimento Explícito:</strong> Todas as permissões são solicitadas de forma clara, conforme a LGPD.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Rescisão</h2>
                <p className="text-gray-700 leading-relaxed">
                    Podemos encerrar ou suspender seu acesso ao FitCal imediatamente, sem aviso prévio, caso Você viole estes Termos ou faça mau uso do Serviço.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Limitação de Responsabilidade</h2>
                <p className="text-gray-700 leading-relaxed">
                    A responsabilidade total do FitCal será limitada ao valor pago por Você pelo Serviço ou R$500, caso não tenha havido pagamento.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Alterações aos Termos e Condições</h2>
                <p className="text-gray-700 leading-relaxed">
                    Reservamo-nos o direito de modificar estes Termos a qualquer momento. Avisaremos sobre mudanças significativas com pelo menos 30 dias de antecedência.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                    Se tiver dúvidas sobre estes Termos e Condições, entre em contato conosco:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <strong>E-mail:</strong> <a href="mailto:suporte@fitcal.app" className="text-blue-600 hover:underline">suporte@fitcal.app</a>
                    </li>
                    <li>
                        <strong>Site:</strong> <a href="https://fitcal.app" className="text-blue-600 hover:underline">fitcal.app</a>
                    </li>
                </ul>
                <p className="text-center text-gray-700 mt-6">Obrigado por usar o FitCal!</p>
            </section>
        </div>
    );
}

export default TermosCondicoes;
