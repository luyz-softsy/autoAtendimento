import CardServiceNumberAva from '../../../components/CardServiceNumberAva';

const ProblemsAccessingDisciplineServiceNumber = () => {

    const numberService = localStorage.getItem('numero-servico')

    return (
        <div className='main-perform-accord'>
            <div className="rescue-checks">
                <CardServiceNumberAva
                    number={numberService}
                />
            </div>
        </div>
    );
};

export default ProblemsAccessingDisciplineServiceNumber;