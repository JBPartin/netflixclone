import '../styles/Nav.css';
function Nav() {
    return (
        <nav>
            <div className="logo" key="logo"></div>
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New {"&"} Popular</li>
                <li>MyList</li>
                <li>Watch Again</li>
            </ul>
        </nav>
    );
}
export default Nav;
