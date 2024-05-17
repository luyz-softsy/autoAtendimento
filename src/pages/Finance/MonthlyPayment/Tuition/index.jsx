import ListSubjectsCheck from '../../../../components/ListSubjectsCheck';
import Footer from '../../../../components/Footer';
import { useState } from 'react';

const TuitionMonthlyService = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const list = [
        {
            id: 1,
            name: 'Mensalidade Janeiro 2023'
        },
        {
            id: 2,
            name: 'Mensalidade Fevereiro 2023'
        }
    ];

    const handleSubjectSelect = (id) => {
        setSelectedSubjects(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(subjectId => subjectId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };
    
    return (
        <main className='main-perform-accord'>
            <div className="perform-accord">
                <div className='list-subjects'>
                    <h1 className='title'>Selecione qual as opções que deseja:</h1>
                    <ListSubjectsCheck
                        items={list}
                        selectedSubjects={selectedSubjects}
                        onSelect={handleSubjectSelect} />
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Avançar" route="/financeiro/realizar-acordo/teste"/>
            </div>
        </main>

    );

};

export default TuitionMonthlyService;