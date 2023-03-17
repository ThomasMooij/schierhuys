import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const admin = currentUser?._doc.isGert
    console.log(admin)
    return admin ? <Outlet /> : <Navigate to="/login" />
}

export default Protected
