import React from "react";
import "./course.css";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router";

const Course = (props) => {
  const { thumb, price, name, id } = props.course;

  const history = useHistory();
  // click handler
  const clickHandler = () => {
    history.push(`/course/${id}`);
  };
  return (
    <div className=" col-md-6 col-lg-4 ">
      <div className="card mt-5 mx-3">
        <img className="img-fluid card-image" src={thumb} alt="" />
        <h6 className="mt-3">{name}</h6>
        <h4 className="card-price">
          <small>$</small>
          {price}
        </h4>

        <button className="btn btn-outline-dark my-3" onClick={clickHandler}>
          learn more <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Course;
