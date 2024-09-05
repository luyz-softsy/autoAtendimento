import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '../../../components/Footer';
import ListSubjectsCheck from '../../../components/ListSubjectsCheck';
import { useRA } from '../../../contexts/RAContext';
import { url_base_local } from '../../../services/url_base';
import './problemsAccessingDiscipline.css';

const ProblemsAccessingDiscipline = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [problems, setProblems] = useState([]);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    useEffect(() => {
        getProblemsAccessingDiscipline();
    }, [currentRA.ra]);

    async function getProblemsAccessingDiscipline() {
        MySwal.showLoading();
        try {
            const response = await axios.get(`${url_base_local}/disciplina/grade?aluno=${currentRA.ra}&obrigatoria=S`);
            const data = response.data;

            console.log(data);
            
            if (data.length > 0) {
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    aluno: item.aluno,
                    name: item.nomeCompleto,
                    codigo: item.disciplina
                }));
                setProblems(formattedData);
            } else {
                setProblems([])
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as disciplinas. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
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
        if (problems.length === 0) {
            navigate('/ava');
        } else if (selectedSubjects.length === 0) {
            MySwal.fire({
                icon: 'info',
                title: 'Erro',
                text: 'Você ainda não selecionou uma disciplina. Escolha uma para continuar.',
                confirmButtonText: 'OK'
            });
        } else {
            localStorage.setItem("disciplina-selecionada", selectedSubjectCodigo);
            navigate('abrir-demanda');
        }
    };

    return (
        <main className='main-problems-reviews'>
            <div className="problems-reviews">
                <div className='list-subjects'>
                    {problems.length > 0 ? (
                        <>
                            <h1 className='title'>Selecione a disciplina em que você está enfrentando problemas de acesso:</h1>
                            <ListSubjectsCheck
                                items={problems}
                                selectedSubjects={selectedSubjects}
                                onSelect={handleSubjectSelect}
                            />
                        </>
                    ) : (
                        <span>Desculpe, não foram encontrados dados correspondentes.</span>
                    )}
                </div>
            </div>
            <Footer text={problems.length === 0 ? "Voltar" : "Avançar"} onClick={handleNext} />
        </main>
    );
};

export default ProblemsAccessingDiscipline