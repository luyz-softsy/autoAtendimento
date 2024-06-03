import { useState } from 'react';
import ListCheckButton from '../../../components/ListCheckButton'
import './substituteProof.css'
import Footer from '../../../components/Footer';

const SubstituteProof = () => {
    const list = [
        {
            id: 1,
            name: 'Disciplina 1'
        },
        {
            id: 2,
            name: 'Disciplina 2'
        }
    ]

    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    return (
        <>
            <main className="substitute-proof">
                <div className='list-subjects'>
                    <h1 className='title'>De qual disciplina?</h1>
                    <h4 className='title'>Se já houver solicitacao da disciplina aberta, levar para a tela de senha com a opção de abrir demanda</h4>
                    <ListCheckButton
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSelect}
                        text="Não achou a disciplina que está procurando?"
                    />
                </div>
            </main>
            <Footer text='Avançar' route='/' />
        </>

    )
}

export default SubstituteProof