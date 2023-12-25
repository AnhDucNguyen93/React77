import { useEffect, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Space, Table, Tag, Button } from 'antd';

import axios from 'axios';


function FormUser() {
    const api = 'https://64e5ff9b09e64530d17f69b9.mockapi.io/userInfo'
    let { id } = useParams();

    const nameRef = useRef('');
    const ageRef = useRef('');
    const addressRef = useRef('');
    const infoRef = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const detailUser = axios
                .get(api + `/${id}`)
                .then(res => {
                    nameRef.current.value = res.data.name;
                    ageRef.current.value = res.data.age;
                    addressRef.current.value = res.data.address;
                    infoRef.current.value = res.data.info;
                })
                .catch(err => console.log(err, 'Lỗi rồi'))
        }
    }, []);
    // Validate
    const validateUser = () => {
        const newObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            info: infoRef.current.value,
        }
        const { name, age, address, info } = newObj;
        if (name.trim() === '' || !age || address.trim() === '' || info.trim() === '') {
            alert('Dữ liệu không được để trống');
            return false;
        };
        return newObj;
    }

    // Edit User
    const editUser = () => {
        const newObj = validateUser();
        if (!newObj) {
            return;
        }
        axios
            .put(api + `/${id}`, newObj)
            .then(res => navigate('/userlist'))
            .catch(err => {
                alert(err + '  Đã có lỗi xảy ra')
            })
    }

    // Add User
    const addUser = () => {
        const newObj = validateUser();
        if (!newObj) {
            return;
        }
        axios
            .post(api, newObj)
            .then(res => navigate('/userlist'))
            .catch(err => alert('Lỗi:   ' + err))
    }

    // Reset Form
    const resetForm = () => {
        nameRef.current.value = '';
        ageRef.current.value = '';
        addressRef.current.value = '';
        infoRef.current.value = '';
    }

    return (
        <>
            <div className="col">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Name
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
                        Age
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
                        Address
                    </label>
                    <textarea
                        ref={addressRef}
                        className="form-control"
                        id="address"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="info" className="form-label">
                        Info
                    </label>
                    <textarea
                        ref={infoRef}
                        className="form-control"
                        id="info"
                        rows="3"
                    ></textarea>
                </div>
            </div>
            {id &&
                <Button type="primary" danger onClick={editUser}>
                    Edit
                </Button>}
            {!id &&
                <Button type="primary" danger onClick={addUser}>
                    Add
                </Button>}

            <Button type="primary" danger onClick={resetForm}>
                Reset
            </Button>
            <Link to="/userlist">
                <Button type="primary" danger >
                    Cancel
                </Button>
            </Link>
        </>
    );
}

export default FormUser;