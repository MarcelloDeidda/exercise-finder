import Title from "../UI/Title";
import classes from "./Welcome.module.css";

const Welcome = () => {
    return <div className={classes.welcome}>
        <Title text="Welcome, Fellow Fitness Fantastic!" />
        <p>Select the muscle group you&apos;d like to focus on during today&apos;s workout – whether it&apos;s your abs, arms, legs, or any other area, our web app offers exercises just for you.</p>
        <p>Once you&apos;ve made your choice, you&apos;ll discover a wide range of exercises designed to target that specific muscle group.</p>
        <p>Together, let&apos;s begin this incredible fitness journey, one repetition at a time!</p>
    </div>
}

export default Welcome;