import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  // load data
  const loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
  };

  // load courses data
  useEffect(() => {
    loadData("./courses.JSON");
  }, []);

  return [courses];
};

export default useCourses;
