import { Link, Outlet } from "react-router-dom";
import { MessageOutlined } from '@ant-design/icons';
import { useContext, useState } from "react";
import RootRightCmp from './rootRight';


// import contetx
import { ThemeContext } from '../main';

export default function Root() {
    const [dark, setDark] = useState(true);

    return (
        <ThemeContext.Provider value={dark}>
            <div id="sidebar">
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
                        <div id="search-spinner" aria-hidden hidden={true} />
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                    <button onClick={() => setDark(!dark)}>
                        <MessageOutlined />
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/userList">User List</Link>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <RootRightCmp />

        </ThemeContext.Provider>

    );
}
