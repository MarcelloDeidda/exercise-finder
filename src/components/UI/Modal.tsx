"use client"

import ReactDOM from "react-dom";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import Form from "../form/Form";
import classes from "./Modal.module.css";

import { muscleInterface } from "@/lib/interfaces";

// Modal Backdrop component
const Backdrop = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    // Remove modal param to close modal
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

// Modal Body component
const ModalOverlay = ({ muscleList }: { muscleList: muscleInterface[] }) => {
    return <div className={classes.modal}>
        <Form muscleList={muscleList} />
    </div>
}

// Modal component
const Modal = ({ muscleList }: { muscleList: muscleInterface[] }) => {
    // Check current pathname to conditionally render modal
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