import "./Item.css";
import { BiTrash ,BiEdit} from "react-icons/bi";
export default function Item(props){
    const {data,deleteTask,editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <BiTrash className="btn" onClick={()=>deleteTask(data.id)}/>
                <BiEdit className="btn" onClick={()=>editTask(data.id)}/>
            </div>
        </div>
    )
}