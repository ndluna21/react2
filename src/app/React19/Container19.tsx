import ActionState from "./ActionState"
import FormAction from "./FormAction"
import FormStatus from "./FormStatus"
import Optimistic from "./Optimistic"

interface Page19Prop {
    active2: string
    action?: (formData: FormData) => void
}

export default function Container19({ active2, action }: Readonly<Page19Prop>) {
    return (
        <>
            {active2 == "tab1" && <FormAction />}
            {active2 == "tab2" && <ActionState />}
            {active2 == "tab3" && <FormStatus action={action}/>}
            {active2 == "tab4" && <Optimistic />}
        </>
    )
}