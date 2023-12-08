import { useState, useRef } from "react";
import Test1 from "./test1";
import FormUserComponent from "./formUser";

function Test() {
    const test = [
        {
            name: 'Anh Duc',
            age: 18,
            address: 'Ha Tinh',
            id: '1'
        },
        {
            name: 'Duc Manh',
            age: 28,
            address: 'Ha Tay',
            id: '2',
        },
        {
            name: 'Hoang Son',
            age: 38,
            id: '3',
            address: 'Ha Noi',
        }
    ];

    const [objInfo, setObjInfo] = useState(test);

    // detail when edit
    const [detailUser, setDetailUser] = useState(null)

    // Delete 
    const onRemove = (itemDetail, index) => {
        const newArr = [...objInfo];
        newArr.splice(index, 1);

        setObjInfo(newArr);
    };

    // Edit 
    const onEdit = (itemUser, index) => {
        // setState detail user and index
        setDetailUser({
            user: itemUser,
            index: index,
        })
    }

    const reSetData = (newArrUser) => {
        setObjInfo(newArrUser);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Test1 obj={objInfo} onDelete={onRemove} onEdit={onEdit} />
                    </div>
                    <FormUserComponent objInfo={objInfo} renderData={reSetData}
                        detailUser={detailUser}
                    />
                </div>
            </div>
        </div>
    );
}
export default Test;