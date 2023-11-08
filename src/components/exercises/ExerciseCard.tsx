import parse from "html-react-parser";

import classes from "./ExerciseCard.module.css";

const ExerciseCard = ({
    name,
    description,
    trainedMuscles
}: {
    name: string,
    description: string,
    trainedMuscles: string
}) => {
    return <div data-cy="exercise-card" className={classes["exercise-card"]}>
        <h3>{name}</h3>
        {/*Parse description prop in case it contains HTML*/}
        <div className={classes["exercise-card__description"]}>{parse(description)}</div>
        {
            trainedMuscles ?
                <p className={classes["exercise-card__muscles"]}>
                    <strong>Muscles trained:</strong> {trainedMuscles}
                </p> :
                ""
        }
    </div>
}

export default ExerciseCard;