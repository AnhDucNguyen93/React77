function Test1({ obj, onDelete, onEdit }) {

    const deleteItem = (obj, index) => {
        onDelete(obj, index)
    }

    const editItem = (ojbItem, index) => {
        onEdit(ojbItem, index)
    }

    const renderList = (item) => {
        return (
            item?.map((el, index) => {
                return (
                    <ul key={el.id}>
                        <li>Ten: {el.name}</li>
                        <li>Tuoi: {el.age}</li>
                        <li>Dia chi: {el.address}</li>
                        <button onClick={() => deleteItem(el, index)}
                            className="btn btn-primary"
                        >delete</button>
                        <button onClick={() => editItem(el, index)}
                            className="btn btn-primary ms-2"
                        >Edit</button>
                    </ul>)
            })
        )
    };

    return (
        <div>
            <h1>Thông tin danh sách</h1>
            <div>
                {renderList(obj)}
            </div>

        </div>
    );
}

export default Test1;