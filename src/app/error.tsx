"use client"

import classes from "./page.module.css";

// Not-found error catch
const Error = (error: Error & { digest?: string }) => {
    return <p className={classes.error}>There has been an error!</p>
}

export default Error;