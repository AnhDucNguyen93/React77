import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { pushUser } from "../reducer/formUser";

function FormUser() {

    let { id } = useParams();

    const nameRef = useRef('');
    const ageRef = useRef('');
    const addressRef = useRef('');
    const infoRef = useRef('');

    const dispath = useDispatch();
    const initEditAdd = useSelector((state) => state.editAddUser);


    useEffect(() => {
        if (id) {
            dispath(pushUser(id));
            nameRef.current.value = initEditAdd.name;
            ageRef.current.value = initEditAdd.age;
            addressRef.current.value = initEditAdd.address;
            infoRef.current.value = initEditAdd.info;
        }
    }, [])

    // useEffect(() => {
    //     if (id) {
    //         const detailUser = axios
    //             .get(api + `/${id}`)
    //             .then(res => {
    //                 nameRef.current.value = res.data.name;
    //                 ageRef.current.value = res.data.age;
    //                 addressRef.current.value = res.data.address;
    //                 infoRef.current.value = res.data.info;
    //             })
    //             .catch(err => console.log(err, 'Lỗi rồi'))
    //     }
    // }, []);

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
            {/* <Button
                type="primary"
                danger
            onClick={() => editUser(item, index)}
            >
                Delete
            </Button> */}
        </>
    );
}

export default FormUser;