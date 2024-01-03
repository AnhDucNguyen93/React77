import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthDataUser, deleteUser } from '../reducer/getDataUser';

function RenderList({ objInfo, isLoading, }) {

    const dispatch = useDispatch();
    // const [userInfo, setUserInfo] = useState('');

    const getDataUser = useSelector((state) => state.getDataUser)
    // console.log(getDataUser, 'action');
    const userInfo = getDataUser.dataUser;
    // const callData = () => {
    //     setUserInfo(getDataUser.dataUser)
    // }

    useEffect(() => {
        dispatch(fecthDataUser());
        // return callData();
    }, [])

    // Delete user
    const deleteItem = (user) => {
        dispatch(deleteUser(user));
        dispatch(fecthDataUser());
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <a style={{ color: 'red' }}>{name}!!!</a>
            ),
            with: '5px',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item, index) => {
                // to do something
                // console.log(item)
                const id = item.id;
                return (
                    <>
                        <Button
                            type="primary"
                            danger
                            onClick={() => deleteItem(id)}
                        >
                            Delete
                        </Button>
                        <Link to={`/formUser/${item.id}`}>
                            <Button>Edit</Button>
                        </Link>

                    </>
                );
            },
        },
    ];


    const renderList = (arr) => {
        const rederMemoList = useMemo(
            () => (
                <Table columns={columns} dataSource={arr} loading={isLoading}
                    rowKey={(el) => el.id}
                    size={'medium'}
                />
            ), [arr])

        return rederMemoList;
    }


    return (
        <div>
            <div className="flex justify-between">
                <h4 className="italic text-regalBlue text-bold">
                    Danh sách người dùng
                </h4>
                {/* <Link to="/addUser">
                    <button>Add new Item</button>
                </Link> */}
            </div>
            {renderList(userInfo)}
        </div>
    );
}

export default RenderList;