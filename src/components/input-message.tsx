import { FormEventHandler } from "react";

export default function InputMessage(props: any) {

    return (
        <>
            <form onSubmit={props.handleMessage} className="w-100">
                <div className="input-group">
                    <input type="text" required id="message" name="message" className="form-control inp-message" placeholder="Type your messages" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="input-group-text btn-send btn-primary" type="submit">
                        Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill ms-3" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </>
    )
}