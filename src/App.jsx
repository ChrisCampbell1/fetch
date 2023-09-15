// npm modules
import { Routes, Route } from "react-router-dom"

// page components
import Landing from "./pages/landing/Landing"
import BrowseDogs from "./pages/browse/BrowseDogs"

// components

// services

//styles

export default function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<Landing />}
        />
        <Route 
          path="/browse"
          element={<BrowseDogs />}
        />
      </Routes>
    </>
  )
}
