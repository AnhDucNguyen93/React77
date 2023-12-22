import { useEffect, useState } from "react";
import RenderList from "./renderList";
import { json } from "react-router-dom";

function App() {

    const api = 'https://64e5ff9b09e64530d17f69b9.mockapi.io/userInfo'
    const [objInfo, setObjInfo] = useState([]);

    const callApi = () => {
        // axios.get(api)
        //     .then(response => {
        //         setObjInfo(response.data);
        //     })

        const result = fetch(api)
            .then(response => response.json())
            .then(json => {
                setObjInfo(json);
                console.log(json)
            })
            .catch(err => console.log(err, 'err'))
            .finally(() => {
                console.log("finally")
            })
    }

    useEffect(() => {
        return () => callApi();
    }, []);

    return (
        <RenderList objInfo={objInfo} />
    );
}

export default App;