import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import NavBar from './NavBar'
import Home from './Home'
import CategoriesList from "../pages/CategoriesList";
import CategoryCard from "../pages/CategoryCard";
// import NewResourceForm from "./NewResourceForm";
import NewCategoryForm from "./NewCategoryForm";
import { UserContext } from "../contexts/UserContext";
import UserPosts from "../pages/UserPosts";
import UserCategories from "../pages/UserCategories";


function App() {
  const {user, setUser} = useContext(UserContext);
  const [categories, setCategories] = useState([])
  

  useEffect(() => {
    fetch("/categories")
    .then(r => r.json())
    .then(categories => setCategories(categories))
  }, [])


 

if (!user) return <Login />


   
  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <main>
      <Routes>
        <Route exact path="/" element = {<Home user={user}/>}/>
        <Route path = "/categories" element = {<CategoriesList categories={categories} setCategories={setCategories} user={user}/>} />
        <Route path = "/categories/:id" element = {<CategoryCard categories={categories} setCategories={setCategories} user={user}/>} />
        <Route path = "/categories/new" element = {<NewCategoryForm categories={categories} setCategories={setCategories} />} />
        <Route path = {`/users/${user.id}/posts`} element = {<UserPosts user={user}/>} />
        <Route path = {`/users/${user.id}/categories`} element = {<UserCategories categories={categories}/>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
