import { forwardRef, useImperativeHandle, useRef } from "react";

// Bình thường khi dùng ref đẻ truy cập com con, sẽ có thể truy cập toàn bộ bên trong nó
// Nếu không muốn com cha truy cập toàn bộ, chỉ cho truy cập vài hàm cụ thể, thì useImperativeHandle sẽ giúp ẩn bớt 

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        }, 
        clear: () => {
            inputRef.current.value = '';
        }, 
        getValue: () => {
            return inputRef.current.value
        }
    }), [])
    
    return <input 
            ref={inputRef} 
            placeholder="Input..." 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "/>
})
MyInput.displayName = "MyInput"
export default MyInput