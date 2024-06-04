import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  //    -----------------------  content aligned centre ------------------------------
  // <Stack direction="row" alignItems="center" p={3} sx={{ position: "sticky", background: '#242124', top: 0, justifyContent: "center" }}>
    // <div style={{ display: "flex", alignItems: "center" }}>
    //     <Link to="/">
    //       <img src={logo} alt="logo" height={45} />
    //     </Link>
    //     <SearchBar />
    // </div>
  // </Stack>

  <Stack 
  direction="row" 
  alignItems="center" 
  p={3} 
  sx={{ position: "sticky", background: '#242124', top: 0, justifyContent: "space-between" }}
  >

  <Link 
  to="/" 
  style={{ display: "flex", alignItems: "center" }}
  >
  <img src={logo} alt="logo" height={45} />
  </Link>
  
  <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
    <SearchBar />
  </div>
  
  </Stack>
);

export default Navbar;