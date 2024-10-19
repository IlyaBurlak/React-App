import './list.css'
import Userinfo from "./userinfo/Userinfo.jsx";
import ChatList from "./chatList/ChatList.jsx";

const List = () =>{
    return(
    <div classame="list">
        <Userinfo/>
        <ChatList/>
    </div>
    )
}

export default List