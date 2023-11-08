import { muscleInterface, exerciseInterface } from "./interfaces";

export const getMuscleList = async () => {
    try {
        const res = await fetch("https://wger.de/api/v2/muscle/");
        const data = await res.json();

        return data.results.map((muscle: any): muscleInterface => {
            return {
                id: muscle.id,
                name: muscle.name_en || muscle.name
            }
        })
    } catch (e) {
        throw new Error("Couldn't fetch muscle list!");
    }
}

export const getExerciseList = async (id: number) => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exercise/?muscles=${id}&language=2&limit=60`);
        const data = await res.json();

        return data.results.map((exercise: any): exerciseInterface => {
                return {
                    id: exercise.id,
                    name: exercise.name,
                    description: exercise.description,
                    muscles: exercise.muscles as number[],
                    secondaryMuscles: exercise["muscles_secondary"]
                }
            })
    } catch (e) {
        throw new Error("Couldn't fetch exercise list!");
    }
}