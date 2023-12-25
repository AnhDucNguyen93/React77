import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';


function RenderList({ objInfo, isLoading, deleteItem }) {

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
            ), [arr.length])

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
            {renderList(objInfo)}
        </div>
    );
}

export default RenderList;