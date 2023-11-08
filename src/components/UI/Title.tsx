import classes from "./Title.module.css";

// Page title component
const Title = ({ text }: { text: string }) => {
    return <h2 className={classes.title}>{text}</h2>
}

export default Title;