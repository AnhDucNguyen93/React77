import { useContext } from 'react';
import { ThemeContext } from './../main'

function HomePage() {
    const themeContext = useContext(ThemeContext);
    console.log('themeContext', themeContext);

    return <>Homepage</>;
}

export default HomePage;