import { Outlet, Link } from "react-router-dom"

export const FrontLayout = () => {
    return (
        <>
            <nav>
                <Link to="/">Title</Link>
                <Link to="/rectangle">Rectangle</Link>
                <Link to="/rectangle?a=4&b=2">Rectangle (4x2)</Link>
                <Link to="/circle">Circle</Link>
                <Link to="/circle/2">Circle (2)</Link>
                <Link to="/hexagon">Hexagon</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </>

    );
}

export default FrontLayout;