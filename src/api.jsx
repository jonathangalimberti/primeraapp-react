import React, { useState, useEffect } from "react";


const Api = () => {
  const [users, setUers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((json) => setUers(json.data));
  }, []);

  return (
    <div className="bg-body-secondary">
      <h2 className="text-center p-5 display-5">Descarga de datos desde Api con React</h2>
      <div
        className="card mb-3 d-flex flex-md-column border-0 bg-body-secondary "
        style={{ maxwidth: 540 + "px" }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            className="row mb-2 align-items-center mx-auto border border-1 px-3 py-2 rounded-2 border-black bg-secondary w-50"
          >
            <div className="col-md-4 d-flex justify-content-center ">
              <img
                src={user.avatar}
                className="img-fluid rounded  "
                alt={user.first_name + " " + user.last_name} />
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex d-md-inline  flex-column justify-content-center">
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
                <button className="btn btn-primary mx-auto" >Conóceme</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Api;

