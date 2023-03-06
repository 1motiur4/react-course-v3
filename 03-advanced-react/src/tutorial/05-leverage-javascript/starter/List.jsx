import { people } from "../../../data";
import Person from "./Person";

const List = () => {
    return (
        <div>
            <h2>List of people</h2>
            <div>
                {people.map((person) => {
                    return (
                        <Person key={person.name} {...person} />
                    )
                })}
            </div>
        </div>
    )
}

export default List;