"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const isThisHomePage = () => {
        return pathname === "/";
    }

    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        params.set("modal", "true");
        replace(`${pathname}?${params.toString()}`)
    }

    return <nav className={classes.navbar}>
        <Link href="/"><h1>Exercise Finder</h1></Link>
        <button onClick={handleClick} className={isThisHomePage() ? classes["button-hidden"] : ""}>
            <span>Muscle groups</span>
            <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
    </nav>
};

export default Navbar;