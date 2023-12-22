import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// uncontrolled component
function FormUser({ }) {
    // get param from url browser
    let { id } = useParams();
    const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/userInfo'

    // Dependency-- Phu thuoc
    useEffect(() => {
        if (id) {
            const detailItem = axios.get(api + `/${id}`)
                .then((res) => {
                    console.log(res, 'detail')
                    nameRef.current.value = res.data.name
                    ageRef.current.value = res.data.age
                    addressRef.current.value = res.data.address
                    infoRef.current.value = res.data.info;
                })
                .catch((err) => alert('Da co loi xay ra'));
            return () => detailItem;
        }
    }, []);

    const nameRef = useRef('');
    const ageRef = useRef('');
    const addressRef = useRef('');
    const infoRef = useRef('');
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const validateItem = () => {
        const newObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value,
            info: infoRef.current.value,
        }
        const { name, age, address, info } = newObj;

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
        const newobj = validateItem();
        axios
            .post(api, newobj)
            .then(res => {
                navigate('/userList')
            })
            .catch(err => {
                alert('Da co loi xay ra !')
            })
    }
    // Edit Item
    const editItem = () => {
        const newObj = validateItem();
        if (!newObj) {
            return;
        }
        axios
            .put(api + `/${id}`, newObj)
            .then(res => {
                navigate('/userList');
            })
            .catch(err => {
                alert('Da co loi xay ra !')
            });
    }

    // Reset Form
    const resetForm = () => {
        nameRef.current.value = '';
        ageRef.current.value = '';
        addressRef.current.value = '';
        infoRef.current.value = '';
        setErr(null);
    }

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
            <div className="mb-3">
                <label htmlFor="info" className="form-label">
                    info
                </label>
                <textarea
                    ref={infoRef}
                    className="form-control"
                    id="info"
                    rows="3"
                ></textarea>
            </div>

            {!id && (
                <button type="button" onClick={addItem} className="btn btn-primary text-regalBlue">
                    add item
                </button>
            )
            }

            {id && (
                <button
                    onClick={editItem}
                    type="button"
                    className="btn btn-primary ms-2 text-regalBlue"
                >
                    Edit
                </button>)
            }

            <Link to='/userListtai'>
                <button
                    type="button"
                    className="btn btn-primary ms-2 text-regalBlue"
                >
                    Cancel
                </button>
            </Link>

            <button
                type="button"
                onClick={resetForm}
                className="btn btn-primary ms-2 text-regalBlue"
            >
                reset
            </button>

            {err?.des && (
                <div className="alert alert-danger mt-2 " role="alert">
                    {err.des}
                </div>
            )}
        </div>
    );
}

export default FormUser;