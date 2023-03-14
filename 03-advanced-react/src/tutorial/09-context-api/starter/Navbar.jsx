import { useState, createContext, useContext } from "react"
import Navlink from "./Navlink";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
    const [user, setUser] = useState({ name: "bob" });

    const logout = () => {
        setUser({ name: null });
    }

    return (
        <NavbarContext.Provider value={{user, logout}} >
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <Navlink />
            </nav>
        </NavbarContext.Provider>
    )
}
export default Navbar