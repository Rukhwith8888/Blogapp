import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import BlogPost from "./pages/BlogPost";
import { ThemeProvider } from "./context/ThemeContext";


export default function App() {
    return (
    <>
    <ThemeProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>



    </>
    )
  }
  
