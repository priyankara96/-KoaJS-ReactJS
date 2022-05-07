import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../Services/Service_Customer_Profile";

export default function AddItem() {
  const [profiles, setProfile] = useState([]);
  const [submit, setSubmit] = useState({
    cu_full_name: "",
    cu_email: "",
    cu_phone_number: "",
    cu_password: ""
  });

  useEffect(() => {
    Service.getText().then((res) => setProfile(res.data));
  }, []);

  const handleChangeText = (name, e) => {
    setSubmit({ ...submit, [name]: e.target.value });
    // console.log(submit);
  };

  const onclick = () => {
    const createData = {
      cu_full_name: submit.cu_full_name,
      cu_email: submit.cu_email,
      cu_phone_number: submit.cu_phone_number,
      cu_password: submit.cu_password
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
            <h3>Create Customer Profile</h3>
            <div className="card-body">
              <form>

                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("cu_full_name", val)}
                    // value={submit.cu_full_name}
                    placeholder="Full Name"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("cu_email", val)}
                    placeholder="E-mail"
                    // value={submit.cu_email}
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("cu_phone_number", val)}
                    // value={submit.cu_phone_number}
                    placeholder="Phone Number"
                    className="form-control "
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    onChange={(val) => handleChangeText("cu_password", val)}
                    // value={submit.cu_password}
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
              <td>{res.cu_full_name}</td>
              <td>{res.cu_email}</td>
              <td>{res.cu_phone_number}</td>
              <td>{res.cu_password}</td>
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
