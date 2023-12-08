function RenderArrObj({ objInfo, renderArrObj, editItem }) {

    const deleteItem = (el, index) => {
        const newArr = [...objInfo];
        newArr.splice(index, 1);
        renderArrObj(newArr)
    }



    const renderList = (list) => {
        return (
            list.map((el, index) => {
                return (
                    <ul key={el.id}>
                        <li>Tên: {el.name} </li>
                        <li>Tuổi: {el.age}  </li>
                        <li>Địa chỉ: {el.address} </li>
                        <button onClick={() => deleteItem(el, index)}
                            className="btn btn-primary"
                        >Delete</button>
                        <button onClick={() => editItem(el, index)}
                            className="btn btn-primary ms-2"
                        >Edit</button>
                    </ul>)
            })
        )
    };
    return (
        <>
            <h5>Thông tin danh sách</h5>
            {renderList(objInfo)};
        </>
    );
}

export default RenderArrObj;