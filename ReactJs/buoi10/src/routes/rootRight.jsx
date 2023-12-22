import { useContext } from 'react';
import { ThemeContext } from '../main';
import { Outlet } from 'react-router-dom';

const RootRightCmp = () => {
    const dark = useContext(ThemeContext);
    return (
        <div id="detail" className={dark ? 'dark' : 'light'}>
            <Outlet></Outlet>
        </div>
    );
};

export default RootRightCmp;
