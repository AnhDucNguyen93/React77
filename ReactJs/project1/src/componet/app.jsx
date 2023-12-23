import { useEffect, useState } from "react";
import RenderList from "./renderList";
// import { json } from "react-router-dom";
import axios from 'axios';


function App() {

    const api = 'https://64e5ff9b09e64530d17f69b9.mockapi.io/userInfo'
    const [objInfo, setObjInfo] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const callApi = () => {
        setLoading(true);
        const resultAxios = axios
            .get(api)
            .then((response) => {
                setObjInfo(response.data);
            })
            .catch((err) => console.log(err, 'err'))
            .finally(() => {
                setLoading(false);
            });
        // const result = fetch(api)
        //     .then(response => response.json())
        //     .then(json => {
        //         setObjInfo(json);
        //         console.log(json)
        //     })
        //     .catch(err => console.log(err, 'err'))
        //     .finally(() => {
        //         console.log("finally")
        //     })
    }

    useEffect(() => {
        return () => callApi();
    }, []);

    const deleteItem = (item, index) => {
        axios
            .delete(`${api}/${item.id}`)
            .then(el => {
                alert('Đã xóa thành công :)))');
                callApi();
            })
            .catch(err => alert("Đã có lỗi xảy ra: " + err))
            .finally(() => console.log('finally'))
    }

    return (
        <RenderList objInfo={objInfo} isLoading={isLoading} deleteItem={deleteItem} />
    );
}

export default App;