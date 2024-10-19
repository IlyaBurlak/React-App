import './chatList.css'
import {useState} from "react";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return(
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="public/search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ? "./public/minus.png" : "public/plus.png"} alt="" className="add"
                onClick={()=>setAddMode(prev => !prev)}
                />
            </div>
        </div>
    )
}

export default ChatList