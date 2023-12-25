import { Outlet, Link } from "react-router-dom";
import { AlertOutlined } from '@ant-design/icons'
import { BgContext } from "../main";
import { useState } from "react";
import RootRight from "./rootRight";

export default function Root() {

    const [initialContext, setInitialContext] = useState({
        theme: false,
        title: "Comback"
    });

    const changeBackG = () => {
        setInitialContext({
            ...initialContext,
            theme: !initialContext.theme
        })
    }

    return (
        <>
            <BgContext.Provider value={initialContext}>
                <div id="sidebar" className={initialContext.theme ? "dark" : "light"}>
                    <h1>React Router Contacts</h1>
                    <div>
                        <form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={true}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </form>
                        <form method="post">
                            <button type="submit">New</button>
                        </form>
                        <button onClick={changeBackG}>
                            <AlertOutlined />
                        </button>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={`/userlist`}>User list</Link>
                            </li>
                            <li>
                                <Link to={`/detailUser`}>Detail User</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
                <RootRight />
            </BgContext.Provider>

        </>
    );
}