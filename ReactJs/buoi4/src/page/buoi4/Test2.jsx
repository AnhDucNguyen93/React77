import { useRef, useState } from "react";
import Test3 from "./Test3";


function Test2({ objInfo }) {

    // const objInfo2 = [...objInfo]
    const [objChild, setOjbChild] = useState(objInfo);
    // Delete funcion
    const deleteItem = (index) => {
        const newArr = [...objChild];
        newArr.splice(index, 1);
        setOjbChild(newArr)
    }
    //Add Object
    const nameRef = useRef('')
    const ageRef = useRef('')
    const addressRef = useRef('')
    const newId = (objChild.lenght + 1) + Math.random()
    const [err, setErr] = useState(null)


    const addObj = () => {
        const newObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            id: newId
        }
        const { name, age, address } = newObj;
        // Validate
        if (name.trim() === '' || !age || address.trim() === '') {
            setErr({
                des: 'Dữ liệu không được để trống, vui lòng kiểm tra lại',
            })
            return;
        }
        setErr(null)
        const newArr1 = [...objChild];
        newArr1.push(newObj);
        setOjbChild(newArr1)

        nameRef.current.value = '';
        ageRef.current.value = '';
        addressRef.current.value = '';

    }
    // Edit Object
    const editItem = (element) => element

    //render list
    const renderList = (arrList) => {
        return (
            arrList.map((el, index) => {
                return (
                    <div key={el.id}>
                        <p>Tên: {el.name}</p>
                        <p>Tuổi: {el.age}</p>
                        <p>Địa chỉ: {el.address}</p>
                        <button onClick={() => deleteItem(index)}
                            className="btn btn-primary"
                        >Ẩn</button>
                        <button onClick={() => editItem(el)}
                            className="btn btn-primary"
                        >Sửa</button>
                    </div>
                )
            })
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Thông tin danh sách</h3>
                        {renderList(objChild)}
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Tên
                            </label>
                            <input
                                ref={nameRef}
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                                Tuổi
                            </label>
                            <input
                                ref={ageRef}
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="0978899xxx"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Địa chỉ
                            </label>
                            <textarea
                                ref={addressRef}
                                className="form-control"
                                id="address"
                                rows="3"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={addObj}
                        >
                            Create Info
                        </button>
                        {err?.des && (
                            <div className="alert alert-danger mt-2" role="alert">
                                {err.des}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Test3 el={editItem} />
        </div>
    );
}

export default Test2;