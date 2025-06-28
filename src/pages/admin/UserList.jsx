import axios from "axios";
import { useEffect, useState } from "react"

export default function () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get ('https://fakestoreapi.com/users')
        .then(res => {
            setUsers(res.data);
            setLoading(false)
        })
        .catch(err => {
            console.log('gagal ambil data:', err);
            setLoading(false)
        })
    }, []);
    
    if (loading) return <p>loading.....</p>
    return (
        <div>
            <h1>daftar pengguna</h1>
            <ul className="w-60 h-30 bg-yellow-800">
                {users.map(user => (
                    <li key={user.id}>
                        <p>nama : {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>password: {user.password}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}