export default function Child({ onClick }: {onClick: () => void}){
    console.log("Child render");
    return <button onClick={onClick}>Click me (child)</button>
}