import { notFound } from "next/navigation";

import ExerciseCard from "@/components/exercises/ExerciseCard";
import { exerciseInterface, muscleInterface } from "./interfaces";
import { ReactNode } from "react";

// Find muscle by id from list
export const getMuscleName = (muscleId: number, muscleList: muscleInterface[]): string => {
    const mainMuscle = muscleList.find(muscleElem => muscleElem.id === muscleId);

    if (mainMuscle === undefined) {
        notFound();
    } else {
        return mainMuscle.name;
    }
}

// Filter exercises, return an ExerciseCard component for each
export const getExerciseCards = (
    muscleId: number,
    muscleList: muscleInterface[],
    exercises: exerciseInterface[]
): ReactNode => {
    const exerciseList = exercises
        .filter(exercise => exercise.muscles.includes(muscleId))
        .map(exercise => {
            // Get list of exerted muscles and join them in a string
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
