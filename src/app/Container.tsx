
import Reducer from "./Reducer"
import Effect from "./Effect"
import Ref from "./Ref"
import LayoutEffect from "./LayoutEffect"
import Context from "./Context"
import ImperativeHandle from "./ImperativeHandle"
import Memo from "./Memo"
import Callback from "./Callback"
import State from "./State"
import Page19 from "./React19/Page19"

interface ContainerProp {
    activeTab: string
}

export default function Container({activeTab}: Readonly<ContainerProp>){
    return (
        <>
            {activeTab === "tab1" && <State /> }
            {activeTab === "tab2" && <Reducer /> }
            {activeTab === "tab3" && <Effect /> }
            {activeTab === "tab4" && <Ref /> }
            {activeTab === "tab5" && <LayoutEffect /> }
            {activeTab === "tab6" && <Context /> }
            {activeTab === "tab7" && <ImperativeHandle /> }
            {activeTab === "tab8" && <Memo /> }
            {activeTab === "tab9" && <Callback /> }
            {activeTab === "tab10" && <Page19/> }
        </>
    )
}