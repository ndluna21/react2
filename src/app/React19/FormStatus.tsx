import { useFormStatus } from "react-dom"

// useFormStatus được dùng bên trong form để lấy trạng thái hiện tại của form submission

// const { pending, data, action } = useFormStatus();
// pending: true nếu form đang dc submit, data: FormData vừa được gửi, action: Hàm formAction đang được gọi

// Sử dụng để hiển thị trạng thái loading khi gửi submit form, disable nút submit khi đang gửi

function SubmitBtn() {
    const {pending} = useFormStatus();

    return(
        <button type="submit" disabled={pending}
            className="m-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {pending ? 'Đang gửi...' : 'Gửi'}
        </button>
    );
}

export default function FormStatus({action}) {
    return (
        <form action={action}>
            <h1 className="text-3xl font-bold">useFormStatus</h1>
            <input name="email" placeholder="Form Status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
            <SubmitBtn />
        </form>
    )
}