"use client"

import classes from "./page.module.css";

const Error = (error: Error & { digest?: string }) => {
    return <p className={classes.error}>Couldn&apos;t find this resource!</p>
}

export default Error;