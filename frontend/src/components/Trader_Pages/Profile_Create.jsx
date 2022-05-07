import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../Services/Service_Trader_Profile";

export default function AddItem() {
  const [profiles, setTprofile] = useState([]);
  const [submit, setSubmit] = useState({
    tr_full_name: "",
    tr_email: "",
    tr_phone_number: "",
    tr_password: ""
  });

  useEffect(() => {
    Service.getText().then((res) => setTprofile(res.data));
  }, []);

  const handleChangeText = (name, e) => {
    setSubmit({ ...submit, [name]: e.target.value });
    // console.log(submit);
  };

  const onclick = () => {
    const createData = {
      tr_full_name: submit.tr_full_name,
      tr_email: submit.tr_email,
      tr_phone_number: submit.tr_phone_number,
      tr_password: submit.tr_password
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
            <h3>Create Trader Profile</h3>
            <div className="card-body">
              <form>

                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("tr_full_name", val)}
                    // value={submit.tr_full_name}
                    placeholder="Full Name"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("tr_email", val)}
                    placeholder="E-mail"
                    // value={submit.tr_email}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("tr_phone_number", val)}
                    // value={submit.tr_phone_number}
                    placeholder="Phone Number"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("tr_password", val)}
                    // value={submit.tr_password}
                    placeholder="Password"
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
            <th scope="col">Full Name  ||</th>
            <th scope="col">E-mail  ||</th>
            <th scope="col">Phone Number  ||</th>
            <th scope="col">Password  ||</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((res) => (
            <tr key={res.id}>
              {/* <th>{res.id}</th> */}
              <td>{res.tr_full_name}</td>
              <td>{res.tr_email}</td>
              <td>{res.tr_phone_number}</td>
              <td>{res.tr_password}</td>
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
