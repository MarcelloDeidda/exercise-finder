export interface muscleInterface {
    id: number,
    name: string
}

export interface exerciseInterface {
    id: number,
    name: string,
    description: string,
    muscles: number[],
    secondaryMuscles: number[] | undefined
}