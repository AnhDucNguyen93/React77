import './App.css'
import RenderArrObj from './component/renderArrObj';
import FormUser from './component/formUserComponent';
import { useState } from 'react';
function App() {
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
      id: '3',
      address: 'Ha Noi',
    }
  ];

  const [arrObj, setArrObj] = useState(test);
  const [detailUser, setDetailUser] = useState(null)

  // Add Object
  const renderArrObj = (newArr) => {
    setArrObj(newArr)
  }

  const editItem = (el, index) => {
    setDetailUser({
      user: el,
      index: index
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <RenderArrObj objInfo={arrObj} renderArrObj={renderArrObj} editItem={editItem} />
          </div>
          <div className="col">
            <FormUser ojbInfo={arrObj} renderArrObj={renderArrObj} detailUser={detailUser} />
          </div>

        </div>
      </div>
    </div>

  )
}

export default App
