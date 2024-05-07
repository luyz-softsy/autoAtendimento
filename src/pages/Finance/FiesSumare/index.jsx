import './fiesSumare.css'
import ListSubjects from '../../../components/ListSubjects';

const FiesSumare = () => {
    const list = [
        {
            id: 1,
            name: 'Fies',
            route: '/financeiro/outros-assuntos/fies-sumare/fies'
        },
        {
            id: 2,
            name: 'Serviços',
            route: '/financeiro/outros-assuntos/fies-sumare/sumare'
        }
    ]

    return (
        <div className="fies-sumare">
            <div className='list-subjects'>
                <h1 className='title'>Sobre qual assunto deseja falar?</h1>
                <ListSubjects itens={list} />
            </div>
        </div>
    )
}

export default FiesSumare