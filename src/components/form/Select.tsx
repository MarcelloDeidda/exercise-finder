import { ChangeEventHandler } from "react";

import classes from "./Select.module.css";

import { muscleInterface } from "@/lib/interfaces";

const Select = ({
    muscleList,
    value,
    changeHandler
}: {
    muscleList: muscleInterface[],
    value: string,
    changeHandler: ChangeEventHandler<HTMLSelectElement>
}) => {
    const options = muscleList.map(muscle => {
        return <option key={muscle.id} value={muscle.id}>{muscle.name}</option>
    })

    return <select title="Muscle Group" onChange={changeHandler} className={classes.select} name="muscleId" value={value}>
        {options}
    </select>
}

export default Select;