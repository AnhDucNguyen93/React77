import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';


function RenderList({ objInfo }) {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
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
            // render: (_, item, index) => {
            //   // to do something
            //   console.log('item', count++);
            //   return (
            //     <>
            //       <Button
            //         type="primary"
            //         danger
            //         onClick={() => deleteItem(item, index)}
            //       >
            //         Delete
            //       </Button>

            //       <Link to={`editUser/${item.id}`}>
            //         <Button>Edit</Button>
            //       </Link>
            //     </>
            //   );
            // },
        },
    ];

    const renderList = (arr) => {
        <Table columns={columns} dataSource={arr}
        // rowKey={(el) => el.id}
        />;
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