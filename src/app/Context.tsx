/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react"

const UserContext = createContext<any>({
    user: "",
    setUser: (): void => {} 
});

// useContext giúp đơn giản việc truyền giá trị giữa các Component mà không truyền qua props qua nhiều lớp component

// Lấy dữ lệu từ không gian chung

export default function Context() {
    const [user, setUser] = useState("Luan");
    return (
        <div>
            <UserContext.Provider value={{user, setUser}} >
                <h1 className="text-3xl font-bold">useContext</h1>
                <Father />
                <ChangeUser/>
            </UserContext.Provider>
        </div>
    )
}

function Father() {
    return <Profile />
}

function Profile() {
    const user = useContext(UserContext);
    return <h2>Profile: {user.user}</h2>
}
function ChangeUser() {
    const {setUser} = useContext(UserContext)
    return (
        <button onClick={() => setUser((prevUser: string) => (prevUser === 'Luan' ? 'Dung' : 'Luan'))}>
            Change User
        </button>
    )
}