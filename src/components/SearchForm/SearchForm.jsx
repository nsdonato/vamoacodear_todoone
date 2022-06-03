import Button from '../Button/Button';
import './SearchForm.css';

const SearchForm = ({ search }) => {
    return (
        <form onSubmit={search}>
            <input name="task" type="text" placeholder="Agrega una tarea" />
            <Button type="submit">Agregar</Button>
        </form>
    )
}

export default SearchForm;