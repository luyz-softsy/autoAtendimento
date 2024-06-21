import './listSubjectsCheck.css'

const ListSubjectsCheck = ({ items, selectedSubjects, onSelect }) => {
    const handleClick = (id) => {
        onSelect(id);
    };

    return (
        <ul className='list-check'>
            {items.map(subject => (
                <li key={subject.id} className='topics'>
                    <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject.id)}
                        onChange={() => handleClick(subject.id)}
                    />
                    <label onClick={() => handleClick(subject.id)}>
                        {subject.name}
                    </label>
                </li>
            ))}
        </ul>
    );
};


export default ListSubjectsCheck