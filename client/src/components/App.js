import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import NavBar from './NavBar'
import Home from './Home'
import CategoriesList from "../pages/CategoriesList";
import CategoryCard from "../pages/CategoryCard";
import NewCategoryForm from "./NewCategoryForm";

function App() {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    fetch("/categories")
    .then(r => r.json())
    .then(categories => setCategories(categories))
  }, [])

  useEffect(() => {
  fetch ("/me").then((r)=> {
    if (r.ok) {
      r.json().then((user)=>setUser(user));
    }
  });
}, []);

if (!user) return <Login onLogin={setUser}/>

if (user.username == "LucieKB", setIsAdmin(true))
   
  return (
    <>
    <NavBar setUser={setUser}/>
    <main>
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path = "/categories" element = {<CategoriesList categories={categories} isAdmin={isAdmin} setCategories={setCategories}/>} />
        <Route path = "/categories/:id" element = {<CategoryCard categories={categories} />} />
        <Route path = "/categories/new" element = {<NewCategoryForm categories={categories} setCategories={setCategories}/>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
