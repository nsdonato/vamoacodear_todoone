import ListItem from "./ListItem";
import Button from "../Button/Button";
import "./List.css";

const List = ({ tasks, deleteTask }) => (
    <section>
        <ul>
            {tasks.map((task) => (
                <div className="wrapper--list" key={task.id}>
                    <ListItem id={task.id} value={task.value} />
                    <Button click={() => deleteTask(task.id)}>Borrar</Button>
                </div>
            ))}
        </ul>
    </section>
)

export default List