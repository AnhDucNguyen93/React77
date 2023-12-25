import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { BgContext } from "../main";

function RootRight() {

    const themeContext = useContext(BgContext)

    return (
        <div id="detail" className={themeContext.theme ? 'dark' : 'right'}>
            <Outlet />
        </div>
    );
}

export default RootRight;