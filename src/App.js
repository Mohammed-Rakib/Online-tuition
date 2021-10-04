import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/home/header/header";
import NotFound from "./components/notFound/notFound";
import Footer from "./components/home/footer/footer";
import Banner from "./components/home/banner/banner";
import Courses from "./components/home/courses/courses";
import AllCourses from "./components/allCourses/allCourses";
import CourseDetails from "./components/courseDetails/courseDetails";
import Turors from "./components/tutors/turors";
import About from "./components/about/about";
import { createContext } from "react";
import { useState } from "react";

export const CourseContext = createContext();

function App() {
  const [courses, setCourses] = useState([]);
  return (
    <CourseContext.Provider value={[courses, setCourses]}>
      <Header></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tutors">
          <Turors />
        </Route>
        <Route path="/courses">
          <AllCourses />
        </Route>
        <Route path="/home">
          <Banner />
          <Courses />
        </Route>
        <Route path="/course/:id">
          <CourseDetails />
        </Route>
        <Route exact path="/">
          <Banner />
          <Courses />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </CourseContext.Provider>
  );
}

export default App;
