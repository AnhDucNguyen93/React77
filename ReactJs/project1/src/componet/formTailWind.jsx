import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag, Button } from 'antd';
import { Link } from "react-router-dom";


function FormTaiWind() {

    const nameRef = useRef('');
    const priceRef = useRef('');
    const disPath = useDispatch();
    const stateTailWind = useSelector((state) => state.formTailWin);


    const editProduct = () => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        if (name.trim() === '' || price.trim() === '') {
            alert('Dữ liệu không được để trống')
            return
        }
        disPath(editPro(name, price));
    };

    useEffect(() => {
        nameRef.current.value = stateTailWind.name;
        priceRef.current.value = stateTailWind.price;
    }, [])

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
                        placeholder="Kids Jumpsuit"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Price
                    </label>
                    <input
                        ref={priceRef}
                        type="text"
                        className="form-control"
                        id="age"
                        placeholder="1000$"
                    />
                </div>
            </div>
            <Button type="primary" danger onClick={editProduct}>
                Edit
            </Button>
            <Link to='/detailUser'>
                <Button type="primary" danger>
                    Cancel
                </Button>
            </Link>
            <Link to='/editTailWind'>
                <Button type="primary" danger>
                    Reset
                </Button>
            </Link>
        </>
    )
};

export default FormTaiWind;