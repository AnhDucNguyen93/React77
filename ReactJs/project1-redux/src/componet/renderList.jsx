import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthDataUser } from '../reducer/getDataUser';

function RenderList({ objInfo, isLoading, deleteItem }) {
    useEffect(() => { dispatch(fecthDataUser()) }, [])

    const dispatch = useDispatch();

    const getDataUser = useSelector((state) => state.getDataUser)
    // console.log(getDataUser, 'action');

    const userInfo = getDataUser.dataUser;
    console.log(userInfo, 'đây nữa');


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
                return (
                    <>
                        <Button
                            type="primary"
                            danger
                            onClick={() => deleteItem(item, index)}
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