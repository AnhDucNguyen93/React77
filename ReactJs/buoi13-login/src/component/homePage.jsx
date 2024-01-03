import { useContext } from 'react';
import { ThemeContext } from './../main'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { changeState } from '../reducer/counterReducer'
function HomePage() {
    const themeContext = useContext(ThemeContext);
    // Use redux
    const initStateRedux = useSelector((state) => state.counterSlice);
    // console.log('initStateRedux', initStateRedux)

    const dispath = useDispatch();

    return (
        <>
            <>Homepage</>
            <h3>title: {initStateRedux.title}</h3>
            <div>count: {initStateRedux.value}</div>

            <Button onClick={() => dispath(changeState())}>change title</Button>
        </>
    );
};

export default HomePage;