import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>Not Found</p>
            <div><button onClick={e => {navigate(-1)}}>Back</button></div>
        </>
    );
}

export default NotFound;