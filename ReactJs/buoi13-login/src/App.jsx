import './App.css'
import RenderArrObj from './component/renderArrObj';
import { useEffect, useState } from 'react';
//axios call api
import axios from 'axios';
function App() {

  const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/userInfo'
  const [objInfo, setObjInfo] = useState([]);

  const callApi = () => {
    setLoading(true);
    // promise
    const result = fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setObjInfo(json);
        // console.log(json);
      })
      .catch((err) => console.log(err, 'err'))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    //callApi();
    return () => callApi();
  }, []);

  const [isLoading, setLoading] = useState(false);

  //Delete
  const onRemove = (itemDetail, index) => {
    axios.delete(`${api}/${itemDetail.id}`).then(
      (el) => {
        alert('Ban da xoa thanh cong')
        // Delete success
        // recall api
        callApi();
      }
    ).catch(err => {
      alert('Da loi xay ra  ' + err)
    }).finally(() => {
      console.log('finally')
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <RenderArrObj objInfo={objInfo} onRemove={onRemove}
              isLoading={isLoading} />
          </div>
          {/* <div className="col">
            <FormUser ojbInfo={objInfo} renderArrObj={renderArrObj} detailUser={detailUser} />
          </div> */}

        </div>
      </div>
    </div>

  )
}

export default App
