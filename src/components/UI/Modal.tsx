"use client"

import ReactDOM from "react-dom";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import Form from "../form/Form";
import classes from "./Modal.module.css";

import { muscleInterface } from "@/lib/interfaces";

const Backdrop = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("modal");
        replace(`${pathname}?${params.toString()}`)
    }
    
    return <div
        className={classes.backdrop}
        onClick={handleClick}
    />
}

const ModalOverlay = ({ muscleList }: { muscleList: muscleInterface[] }) => {
    return <div className={classes.modal}>
        <Form muscleList={muscleList} />
    </div>
}

const Modal = ({ muscleList }: { muscleList: muscleInterface[] }) => {
    let searchParams = useSearchParams();
    let params = new URLSearchParams(searchParams);
    let modal = params.get("modal");

    let portalElement = document.getElementById("overlays") as Element;

    return <>
        {portalElement && modal && ReactDOM.createPortal(<Backdrop />, portalElement)}
        {portalElement && modal && ReactDOM.createPortal(
            <ModalOverlay muscleList={muscleList} />,
            portalElement
        )}
    </>
}

export default Modal;