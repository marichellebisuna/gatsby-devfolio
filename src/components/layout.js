import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
