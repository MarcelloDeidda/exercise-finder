import ExerciseCard from "@/components/exercises/ExerciseCard";
import { exerciseInterface, muscleInterface } from "./interfaces";
import { notFound } from "next/navigation";

export const getMuscleName = (muscleId: number, muscleList: muscleInterface[]): string => {
    const mainMuscle = muscleList.find(muscleElem => muscleElem.id === muscleId);

    if (mainMuscle === undefined) {
        notFound();
    } else {
        return mainMuscle.name;
    }
}

export const getExerciseCards = (
    muscleId: number,
    muscleList: muscleInterface[],
    exercises: exerciseInterface[]
) => {
    const exerciseList = exercises
        .filter(exercise => exercise.muscles.includes(muscleId))
        .map(exercise => {
            const trainedMuscles = exercise.muscles.concat(exercise.secondaryMuscles as number[])
                .map(id => {
                    const trainedMuscle = muscleList.find(muscleElem => muscleElem.id === id);
                    if (trainedMuscle === undefined) {
                        notFound();
                    } else {
                        return trainedMuscle.name;
                    }
                })
                .join(" - ");

            return <ExerciseCard
                key={exercise.id}
                name={exercise.name}
                description={exercise.description}
                trainedMuscles={trainedMuscles}
            />
        });

    return exerciseList;
}