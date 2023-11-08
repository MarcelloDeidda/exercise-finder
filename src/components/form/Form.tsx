"use client"

import Link from "next/link";
import { SetStateAction, useState } from "react";

import Select from "./Select";
import classes from "./Form.module.css";

import { muscleInterface } from "@/lib/interfaces";

// Controlled form component with state passed down to Select component
const Form = ({ muscleList }: { muscleList: muscleInterface[] }) => {
    const [muscleId, setMuscleId] = useState("6");

    const changeHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMuscleId(e.target.value);
    }

    return <form className={classes.form}>
        <Select changeHandler={changeHandler} value={muscleId} muscleList={muscleList} />
        <Link data-cy="form-button" href={`/exercise/${muscleId}`}>Find Exercises</Link>
    </form>
}

export default Form;