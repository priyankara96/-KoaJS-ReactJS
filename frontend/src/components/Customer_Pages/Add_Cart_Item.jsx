import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../Services/Service_Cart";

export default function AddItem() {
  const [cart, setCart] = useState([]);
  const [submit, setSubmit] = useState({
    itemID: "",
    itemName: "",
    itemDesc: "",
    itemPrice: "",
    batchNo: "",
    manuDate: "",
    expDate: "",
    Qty: ""
  });

  useEffect(() => {
    Service.getText().then((res) => setCart(res.data));
  }, []);

  const handleChangeText = (name, e) => {
    setSubmit({ ...submit, [name]: e.target.value });
    // console.log(submit);
  };

  const onclick = () => {
    const createData = {
        itemID: submit.itemID,
        itemName: submit.itemName,
        itemDesc: submit.itemDesc,
        itemPrice: submit.itemPrice,
        batchNo: submit.batchNo,
        manuDate: submit.manuDate,
        expDate: submit.expDate,
        Qty: submit.Qty,
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

      <br/><a  href="/Customer" style={{marginRight:15}}>Back Page</a><br/>
      <div className="container m-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3>Add Cart</h3>
            <div className="card-body">
              <form>

                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("itemID", val)}
                    // value={submit.itemID}
                    placeholder="Item ID"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("itemName", val)}
                    placeholder="Item Name"
                    // value={submit.itemName}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("itemDesc", val)}
                    // value={submit.itemDesc}
                    placeholder="Item Desc"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("itemPrice", val)}
                    // value={submit.itemPrice}
                    placeholder="Item Price (Rs.)"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("batchNo", val)}
                    // value={submit.batchNo}
                    placeholder="Batch No"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("manuDate", val)}
                    placeholder="Manu Date"
                    // value={submit.manuDate}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("expDate", val)}
                    // value={submit.expDate}
                    placeholder="Exp Date"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("Qty", val)}
                    // value={submit.tr_password}
                    placeholder="Qty"
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
            <th scope="col">Item ID  ||</th>
            <th scope="col">Item Name  ||</th>
            <th scope="col">Item Desc  ||</th>
            <th scope="col">Item Price  ||</th>
            <th scope="col">Batch No  ||</th>
            <th scope="col">Manu Date  ||</th>
            <th scope="col">Exp Date  ||</th>
            <th scope="col">Qty  ||</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((res) => (
            <tr key={res.id}>
              {/* <th>{res.id}</th> */}
              <td>{res.itemID}</td>
              <td>{res.itemName}</td>
              <td>{res.itemDesc}</td>
              <td>{res.itemPrice}</td>
              <td>{res.batchNo}</td>
              <td>{res.manuDate}</td>
              <td>{res.expDate}</td>
              <td>{res.Qty}</td>
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
