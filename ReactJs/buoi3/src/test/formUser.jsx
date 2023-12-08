import { useState, useRef, useEffect } from "react";

function FormUserComponent({ objInfo, renderData, detailUser }) {
    const nameRef = useRef('');
    const addressRef = useRef('');
    const ageRef = useRef('');
    const [err, setErr] = useState(null);

    const validateItem = () => {
        const objInfoLenght = (objInfo.length + 1) + Math.random();

        const newObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            id: objInfoLenght,
        };
        // ..B2 Validate
        const { name, age, address } = newObj;
        if (name.trim() === '' || !age || address.trim() === '') {
            // nếu như name nhập vao là không có gì, hoặc chưa tồn tại age, hoặc address chưa được nhâp
            setErr({
                des: 'Dữ liệu không được để trống, vui lòng kiểm tra lại',
            });
            // stop fruntion
            return;
        }
        return newObj;
    }

    // Add item
    const addNewItem = () => {
        const newObj = validateItem();
        const cloneArr = [...objInfo];
        cloneArr.push(newObj);
        renderData(cloneArr);
        // clear old input
        resetForm();
    }
    // Edit item
    const editItem = () => {
        const newObj = validateItem();
        if (detailUser && (detailUser.index || detailUser.index == 0)) {

            const newArruser = [...objInfo];
            newArruser[detailUser.index] = newObj;
            renderData(newArruser);
            resetForm()
        };
    }
    const resetForm = () => {
        nameRef.current.value = '';
        ageRef.current.value = '';
        addressRef.current.value = '';
        setErr(null);
    }

    // - dependency-- phu thuoc
    useEffect(() => {
        // kiem tra detaiUser
        if (detailUser && (detailUser.index || detailUser.index == 0)) {
            const { name, age, address } = detailUser.user;
            nameRef.current.value = name;
            ageRef.current.value = age
            addressRef.current.value = address;
            // delete error quen user click
            setErr(null);
        }
    }, [detailUser?.index,
    detailUser?.user.name,
    detailUser?.user.age,
    detailUser?.user.address,]);

    return (
        <>
            <div className="col">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        name
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
                        age
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
                        address
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
                    onClick={addNewItem}
                    className="btn btn-primary ms-2"
                >
                    Create Info
                </button>
                <button
                    type="button"
                    onClick={editItem}
                    className="btn btn-primary ms-2"
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-primary ms-2"
                >
                    Reset Form
                </button>
                {err?.des && (
                    <div className="alert alert-danger mt-2" role="alert">
                        {err.des}
                    </div>
                )}
            </div>
        </>
    );
}

export default FormUserComponent;