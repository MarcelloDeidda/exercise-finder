import classes from "./Title.module.css";

const Title = ({ text }: { text: string }) => {
    return <h2 className={classes.title}>{text}</h2>
}

export default Title;