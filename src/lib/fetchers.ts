import { muscleInterface, exerciseInterface } from "./interfaces";

// Send HTTP GET request to fetch list of muscles
export const getMuscleList = async () => {
    try {
        const res = await fetch("https://wger.de/api/v2/muscle/");
        const data = await res.json();

        return data.results.map((
            muscle: { id: number, name: string, name_en: string }
        ): muscleInterface => {
            return {
                id: muscle.id,
                name: muscle.name_en || muscle.name
            }
        })
    } catch (e) {
        throw new Error("Couldn't fetch muscle list!");
    }
}

// Send HTTP GET request to fetch list of exercises filtered by muscles and language
export const getExerciseList = async (id: number) => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exercise/?muscles=${id}&language=2&limit=60`);
        const data = await res.json();

        return data.results.map((
            exercise: {
                id: number,
                name: string,
                description: string,
                muscles: number[],
                "muscles_secondary": number[]
            }): exerciseInterface => {
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
