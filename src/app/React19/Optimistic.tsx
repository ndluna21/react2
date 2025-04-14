import { useOptimistic, useState } from "react"

// Hiển thị kết quả giả định cho người dùng trước khi server trả về phản hồi thật
// const [optimisticState, addOptimistic] = useOptimistic(
//      actualState, : Dữ liệu thật từ server
//      updateFn : Hàm nhận dữ liệu mới
// );
// Sử dụng khi muốn UI mượt hơn, k bị delay: Like/Unlike, Thêm bình luận, thêm sản phẩm vào giỏ hàng,...
// Không tự rollback => tự xử lý thủ công (kết hợp với try/catch), chỉ sử dụng trong Client Component

export default function Optimistic() {
    const [cmt, setCmt] = useState([])
    const [optimisticCmt, addCmt] = useOptimistic(cmt, (state, newCmt) => [
        ...state,
        { id: Date.now(), text: newCmt, optimisticCmt: true},
    ]);

    async function handleAdd(formData) {
        const text = formData.get('comment')
        addCmt(text);

        await new Promise((res) => setTimeout(res, 1000))
        setCmt((prev) => [...prev, {id: Date.now(), text }])
    }
    return (
        <>
            <form action={handleAdd}>
                <input name="comment" placeholder="Nhập bình luận..." />
                <button>Gửi</button>
            </form>
            <ul>
                {optimisticCmt.map((c) => (
                    <li key={c.id}>
                        {c.text} {c.optimistic && <i> (Đang gửi...)</i>}
                    </li>
                ))}
            </ul>
        </>
    )
}