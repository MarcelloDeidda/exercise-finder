import Title from "@/components/UI/Title";
import ExerciseCard from "@/components/exercises/ExerciseCard";
import { exerciseInterface, muscleInterface } from "@/lib/interfaces";
import classes from "./page.module.css";
import Modal from "@/components/UI/Modal";
import { getExerciseList, getMuscleList } from "@/lib/fetchers";
import { getExerciseCards, getMuscleName } from "@/lib/exerciseHelpers";

const ExercisePage = async ({
    params
}: {
    params: { muscle: string }
}) => {
    const muscleList: muscleInterface[] = await getMuscleList()
    const { muscle }: { muscle: string } = params;
    const muscleName = getMuscleName(parseInt(muscle), muscleList);

    const exercises: exerciseInterface[] = await getExerciseList(parseInt(muscle));
    const exerciseList = getExerciseCards(parseInt(muscle), muscleList, exercises);

    const sortedMuscleList = muscleList
        .sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));

    return <>
        <Modal muscleList={sortedMuscleList} />
        <div className={classes["exercise-page"]}>
            <Title text={`${muscleName} Exercises`} />
            {exerciseList}
        </div>
    </>
}

export default ExercisePage;