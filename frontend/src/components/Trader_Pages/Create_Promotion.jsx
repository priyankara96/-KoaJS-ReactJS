import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../Services/Service_Promotions";

export default function AddItem() {
  const [promotions, setPromotions] = useState([]);
  const [submit, setSubmit] = useState({
    promoID: "",
    promoName: "",
    promoDesc: "",
    promoDate: ""
  });

  useEffect(() => {
    Service.getText().then((res) => setPromotions(res.data));
  }, []);

  const handleChangeText = (name, e) => {
    setSubmit({ ...submit, [name]: e.target.value });
    // console.log(submit);
  };

  const onclick = () => {
    const createData = {
        promoID: submit.promoID,
        promoName: submit.promoName,
        promoDesc: submit.promoDesc,
        promoDate: submit.promoDate
    };
    Service.createText(createData).then((res) => console.log(res.data));
    // api
    //   .post("/posts ", { text: submit.text })
    //   .then((res) => console.log(res.data));
  };

  const deleteTxt = (id) => {
    Service.deleteText(id);
  };

  const updateItem = (id) => {
    Service.updateItem(id);
  };

  const navigate = useNavigate();
  return (
    <div>
      <a  href="/" style={{marginRight:15, marginLeft:50}}>Home Page</a> <br/>

      <br/><a  href="/Trader" style={{marginRight:15}}>Back Page</a><br/>
      <div className="container m-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3>Create Promotions</h3>
            <div className="card-body">
              <form>

                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("promoID", val)}
                    // value={submit.promoID}
                    placeholder="Promotion ID"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("promoName", val)}
                    placeholder="Promotion Type"
                    // value={submit.promoName}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("promoDesc", val)}
                    // value={submit.promoDesc}
                    placeholder="Description"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("promoDate", val)}
                    // value={submit.promoDate}
                    placeholder="Promotion Date"
                    className="form-control "
                  />
                </div>
                
                
                <br/>
                <div className="mt-2">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={() => onclick()}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger "
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br/><br/>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">Promotion ID  ||</th>
            <th scope="col">Promotions Type  ||</th>
            <th scope="col">Description  ||</th>
            <th scope="col">Promotion Date  ||</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((res) => (
            <tr key={res.id}>
              {/* <th>{res.id}</th> */}
              <td>{res.promoID}</td>
              <td>{res.promoName}</td>
              <td>{res.promoDesc}</td>
              <td>{res.promoDate}</td>
              <td>
                <button onClick={() => deleteTxt(res.id)}>Delete</button>
                <button onClick={() => updateItem(res.id)} style={{marginLeft:5}}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5><i>Note: After delete button then</i> Reload <i>the page !</i></h5>
    </div>
  );
}
