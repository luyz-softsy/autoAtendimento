import ListArrow from '../../../components/ListArrow';

const Diplomas = () => {

    const list = [
        {
            id: 1,
            name: 'Diploma Impreso',
            detalhes: 'Serviço exclusivo para o(a) aluno(a) de GRADUAÇÃO que já recebeu o diploma digital e deseja ter a impressão da via física do documento, em papel especial, para fins de apresentação decorativa. A retirada deverá ser realizada exclusivamente pelo aluno (portanto documento oficial com foto), ou pelo procurador (mediante apresentação de Procuração Pública), no endereço do atendimento da Sede. A retirada deve ser feita imprescindivelmente em até 60 dias APÓS A NOTIFICAÇÃO da disponibilidade.',
            text_button: 'Solicitar'
        },
        {
            id: 2,
            name: 'Colação de Grau Especial',
            detalhes: 'Anexar em 1 único PDF: RG, Cert. Nascimento ou Casamento, *Histórico Escolar do Ensino Médio com Certificado de Conclusão; *Boletim de Ocorrência (Referente a perda ou roubo do Diploma); * Caso tenha solicitado "Aproveitamento de Estudos", também deverá ser anexado o Histórico Escolar da outra Instituição de Ensino Superior. É de total responsabilidade do(a) aluno(a), os dados pessoais que constarão no Diploma, pois estarão de acordo com os documentos anexados.',
            text_button: 'Solicitar'
        },
        {
            id: 3,
            name: 'Segunda via de Diploma',
            detalhes: 'O Diploma em pele da Sumaré é confeccionado em pele de carneiro de forma artesanal seguindo os modelos de certificado mais tradicionais e sofisticados.',
            text_button: 'Solicitar'
        }
    ];

    return (
        <>
            <main className="perform-payment">
                <div className='list-subjects'>
                    <h1 className='title'>Selecione 1 das opção abaixo:</h1>
                    <ListArrow items={list} />
                </div>
            </main>
            <footer className='footer-container'>
                <div className='footer-payment'>
                    <button className='title-footer' > Próximo </button>
                </div>
            </footer>
        </>

    );

};

export default Diplomas