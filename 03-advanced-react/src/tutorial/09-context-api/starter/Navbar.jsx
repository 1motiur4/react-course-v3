import { useState } from "react"
import Navlink from "./Navlink";

const Navbar = () => {
    const [user, setUser] = useState({name: "bob"});

    const logout = () => {
        setUser({name: null});
    }

    return (
        <nav className="navbar">
            <h5>CONTEXT API</h5>
            <Navlink user={user} logout={logout}/>
        </nav>
    )
}
export default Navbar