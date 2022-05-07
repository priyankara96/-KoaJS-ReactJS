import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../Services/Service_product";

export default function AddItem() {
  const [product, setProduct] = useState([]);
  const [submit, setSubmit] = useState({
    item_name: "",
    item_price: "",
    itme_desription: "",
    item_brand: "",
    item_type: ""
  });

  useEffect(() => {
    Service.getText().then((res) => setProduct(res.data));
  }, []);

  const handleChangeText = (name, e) => {
    setSubmit({ ...submit, [name]: e.target.value });
    // console.log(submit);
  };

  const onclick = () => {
    const createData = {
      item_name: submit.item_name,
      item_price: submit.item_price,
      itme_desription: submit.itme_desription,
      item_brand: submit.item_brand,
      item_type: submit.item_type
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
            <h3>Add Item</h3>
            <div className="card-body">
              <form>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("item_name", val)}
                    // value={submit.item_name}
                    placeholder="Product Name"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("item_price", val)}
                    placeholder="Product Price"
                    // value={submit.item_price}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("itme_desription", val)}
                    // value={submit.itme_desription}
                    placeholder="product desription"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("item_brand", val)}
                    // value={submit.item_brand}
                    placeholder="product brand"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("item_type", val)}
                    // value={submit.item_type}
                    placeholder="product Type"
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
            <th scope="col">Product Name  ||</th>
            <th scope="col">Product Price  ||</th>
            <th scope="col">product Desription  ||</th>
            <th scope="col">product Brand  ||</th>
            <th scope="col">product Type  ||</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((res) => (
            <tr key={res.id}>
              {/* <th>{res.id}</th> */}
              <td>{res.item_name}</td>
              <td>{res.item_price}</td>
              <td>{res.itme_desription}</td>
              <td>{res.item_brand}</td>
              <td>{res.item_type}</td>
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
