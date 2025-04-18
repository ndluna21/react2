import { useActionState } from "react"

// Dùng để gọi 1 server action, quản lý state kết quả trả về từ action đó
// Thay thế cho useState + useEffect + try/catch

// Dùng useActionState khi muốn gửi form; nhận phản hồi từ server; hiển thị thông báo, dữ liệu, chuyển hướng dựa trên kq

async function login(prev, formData) {
    const email = formData.get('email')
    return {success: true, email}
}

export default function ActionState() {
    const [state, formAction, isPending] = useActionState(login, {})
    return (
        <div>
            <h1 className="text-3xl font-bold">Action State</h1>
            <form action={formAction}>
                <input name="email" 
                        placeholder="Email..." 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                <button disabled={isPending} 
                    className="m-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Login</button>
                {state?.success && <p>Login: {state.email}</p>}
            </form>
        </div>
    )
}