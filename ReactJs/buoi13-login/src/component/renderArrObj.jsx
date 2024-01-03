import { Space, Table, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';


function RenderArrObj({ objInfo, onRemove, isLoading }) {

    const deleteItem = (el, index) => {
        onRemove(el, index)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (
                <a style={{ color: 'red' }} key={name}>
                    {name} ***
                </a>
            ),
            with: '25%',
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
                return (<>
                    <Button type="primary"
                        danger
                        onClick={() => deleteItem(item, index)}>
                        Delete
                    </Button>

                    <Link to={`/editUser/${item.id}`}>
                        <Button type="primary" className='text-regalBlue'>Edit</Button>
                    </Link>
                </>)
            }
        },
    ]
    // console.log(objInfo)
    const renderList = (arr) => {
        return (
            <Table columns={columns}
                dataSource={arr}
                rowKey={(el) => el.id}
                loading={isLoading}
                size={'small'}
            />
        );
    };
    return (
        <>
            <div className="flex justify-between">
                <h4 className="italic text-regalBlue text-bold">
                    Danh sách người dùng
                </h4>
                <Link to="/addUser">
                    <button>Add new Item</button>
                </Link>
            </div>
            {renderList(objInfo)}
        </>
    );
}

export default RenderArrObj;

// const objInfo = [
//   {
//     name: 'Anh Duc',
//     age: 18,
//     address: 'Ha Tinh',
//     info: [1, 2, 3, 4],
//   },
//   {
//     name: 'Duc Manh',
//     age: 28,
//     address: 'Ha Tay',
//     info: [4, 0, 1, 4],
//   },
//   {
//     name: 'Hoang Son',
//     age: 38,
//     address: 'Ha Noi',
//     info: [1, 4, 3, 4],
//   },
// ];
