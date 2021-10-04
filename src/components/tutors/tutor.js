import React from "react";

const Tutor = (props) => {
  const { name, email, phone } = props.tutor;
  return (
    <div className=" col-lg-3 col-md-4">
      <div className="card mt-4">
        <img
          src="https://www.farner.ch/wp-content/uploads/2018/02/DanialNagizadeh-1016x896-c-default.jpg"
          className="img-fluid rounded-circle"
          alt=""
        />
        <h5 className="mt-3">{name}</h5>
        <h6>{email}</h6>
        <h6>{phone}</h6>
      </div>
    </div>
  );
};

export default Tutor;
