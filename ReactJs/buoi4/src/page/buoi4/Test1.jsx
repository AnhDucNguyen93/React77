import Test2 from "./Test2";

function Buoi4() {
    const test = [
        {
            name: 'Anh Duc',
            age: 18,
            address: 'Ha Tinh',
            id: '1'
        },
        {
            name: 'Duc Manh',
            age: 28,
            address: 'Ha Tay',
            id: '2',
        },
        {
            name: 'Hoang Son',
            age: 38,
            address: 'Ha Noi',
            id: '3',
        }
    ];

    return (
        <Test2 objInfo={test} />
    );
}

export default Buoi4;