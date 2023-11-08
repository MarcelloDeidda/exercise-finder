import { ChangeEventHandler } from "react";

import classes from "./Select.module.css";

import { muscleInterface } from "@/lib/interfaces";

// Select component, will dinamically render an option for each muscle
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

    return <select data-cy="select" title="Muscle Group" onChange={changeHandler} className={classes.select} name="muscleId" value={value}>
        {options}
    </select>
}

export default Select;