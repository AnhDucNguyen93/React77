import { useEffect, useRef, useState } from "react";

function FormUser({ ojbInfo, renderArrObj, detailUser }) {
    const nameRef = useRef('');
    const ageRef = useRef('');
    const addressRef = useRef('');
    const [err, setErr] = useState(null);

    const validateItem = () => {
        const idObj = ojbInfo.lenght + 1 + Math.random();
        const newObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            id: idObj
        }
        const { name, age, address } = newObj;

        if (name.trim() === '' || !age || address.trim() === '') {
            setErr({
                des: 'Dữ liệu không được để trống, vui lòng kiểm tra lại',
            });
            return;
        }
        return newObj;
    }

    // Add Item
    const addItem = () => {
        const newObj = validateItem();
        // Check dữ liệu đầu vào có để trống khi ấn nút add không
        if (newObj) {
            const newArrObj = [...ojbInfo];
            newArrObj.push(newObj);
            renderArrObj(newArrObj);
            resetForm();
        }
        // return;
    }
    // Edit Item
    const editItem = () => {
        const newObj = validateItem();
        if (detailUser && newObj) {
            const newArr = [...ojbInfo];
            newArr[detailUser.index] = newObj;
            renderArrObj(newArr);
            resetForm();
        }
        // return;
    }

    // Reset Form
    const resetForm = () => {
        nameRef.current.value = '';
        ageRef.current.value = '';
        addressRef.current.value = '';
        setErr(null);
    }

    useEffect(() => {
        if (detailUser) {
            const { name, age, address } = detailUser.user;
            nameRef.current.value = name;
            ageRef.current.value = age;
            addressRef.current.value = address;
            setErr(null)
        }
    }
        , [detailUser]);

    return (
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
            <button type="button" onClick={addItem} className="btn btn-primary">
                add item
            </button>

            <button
                onClick={editItem}
                type="button"
                className="btn btn-primary ms-2"
            >
                Edit
            </button>

            <button
                type="button"
                onClick={resetForm}
                className="btn btn-primary ms-2"
            >
                reset
            </button>

            {err?.des && (
                <div className="alert alert-danger mt-2" role="alert">
                    {err.des}
                </div>
            )}
        </div>
    );
}

export default FormUser;