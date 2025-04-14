export default function FormAction() {
    async function handle(formData) {
        const name = formData.get('name')
        console.log(name);
    }
    return (
        // Xử lý form và các thao tác side effect dễ hơn
        // Tự động quản lý loading, error, state mà không cần state thủ công

        <form action={handle}>
            <h1 className="text-3xl font-bold">Form Actions</h1>
            <input name="name" placeholder="Nhập tên..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
            <button type="submit"
                className="m-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Submit
            </button>
        </form>
    )
}