import UserContainer from "./UserContainer"

const Navlink = ({user, logout}) => {
  return (
    <div className="nav-container">
        <ul className="nav-links">
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
        </ul>
        <UserContainer user={user} logout={logout}/>
    </div>
  )
}
export default Navlink