import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './problemsReviews.css';

const ProblemsReviews = () => {

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [problems, setProblems] = useState([]);
    const navegation = useNavigate();
    const MySwal = withReactContent(Swal);

    const { currentRA } = useRA();

    useEffect(() => {
        getProblemsAccessingDiscipline();
    }, [currentRA]);

    async function getProblemsAccessingDiscipline() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/disciplinaMatriculada/${currentRA.ra}`);
            const data = response.data;

            const formattedData = data.map((item, index) => ({
                id: index + 1,
                aluno: item.aluno,
                name: item.nomeDisciplina,
                codigo: item.disciplina
            }));

            setProblems(formattedData);
        } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
        }

        MySwal.close();
    }

    const handleSubjectSelect = (id, multiple) => {
        if (multiple) {
            setSelectedSubjects(prevSelected => {
                const index = prevSelected.indexOf(id);
                if (index !== -1) {
                    return prevSelected.filter(subjectId => subjectId !== id);
                } else {
                    return [...prevSelected, id];
                }
            });
        } else {
            setSelectedSubjects([id]);
        }
    };

    const selectedSubjectCodigo = problems.find(problem => problem.id === selectedSubjects[0])?.codigo;

    const handleNext = () => {
        if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você não selecionou nenhuma disciplina.',
                confirmButtonText: 'OK'
            });
        } else {
            localStorage.setItem("disciplina-selecionada", selectedSubjectCodigo);
            navegation('/ava/problemas-nas-avaliacoes/escolha');
        }
    };

    return (
        <main className='main-problems-activities'>
            <div className="problems-activities">
                <div className='list-subjects'>
                    <h1 className='title'>Em qual disciplina você está com problemas?</h1>
                    {problems.length > 0 ?
                        <ListSubjectsCheck
                            items={problems}
                            selectedSubjects={selectedSubjects}
                            onSelect={handleSubjectSelect}
                        />
                        : 'Carregando disciplinas...'
                    }
                </div>
            </div>
            <Footer text="Avançar" onClick={handleNext} />
        </main>
    )
}

export default ProblemsReviews