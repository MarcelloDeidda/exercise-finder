import Title from "@/components/UI/Title";
import Modal from "@/components/UI/Modal";
import classes from "./page.module.css";

import { getExerciseList, getMuscleList } from "@/lib/fetchers";
import { getExerciseCards, getMuscleName } from "@/lib/exerciseHelpers";
import { exerciseInterface, muscleInterface } from "@/lib/interfaces";

const ExercisePage = async ({
    params
}: {
    params: { muscle: string }
}) => {
    // Get muscle list and main muscle name
    const muscleList: muscleInterface[] = await getMuscleList()
    const { muscle }: { muscle: string } = params;
    const muscleName: string = getMuscleName(parseInt(muscle), muscleList);

    // Get exercise list and exercise components
    const exercises: exerciseInterface[] = await getExerciseList(parseInt(muscle));
    const exerciseList: React.ReactNode = getExerciseCards(parseInt(muscle), muscleList, exercises);

    const sortedMuscleList: muscleInterface[] = muscleList
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