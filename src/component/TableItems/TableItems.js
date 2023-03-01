import { useState } from "react";
import s from "./TableItems.module.css";
import { AiFillDelete } from "react-icons/ai";
import { useUpdatePostMutation } from "../../redux/posts";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal";
import { Oval } from "react-loader-spinner";

export default function TableItems({status,title,id, func, comments }) {
  const [updateContact, { isLoading }] = useUpdatePostMutation();
  const [isShown, setIsshown] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);
  const [newComments, setNewComments] = useState(comments);

  

  const toggleModal = () => {
    setIsshown(!isShown);
  };

const statusAdd=()=>{
  setNewStatus(!newStatus);
}

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setNewTitle(value);
        break;

      // case "author":
      //   setNewAuthor(value);
      //   break;
      case "comments":
        setNewComments(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = (data) => {
    const {
      id,
      newTitle: title,
      newStatus: status,
      newComments: comments,
    } = data;

    updateContact({ id, title, newStatus, comments });
   
    setIsshown(false);
    return;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit({ id, newTitle, newComments });
  };

  return (
    <>
      <thead>
        <tr>
          <th>id of post</th>
          <th>Title</th>
           <th>Description</th>
          <th>Delete</th>
          <th>Edit</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td> {id}</td>
          <td>{title}</td>
                   <td style={{ whiteSpace: "pre-wrap" }}>
            <div ><p className={s.commdentWrap}>{comments}</p></div>
          </td>
        
          <td>
            
            <button
              style={{
                backgroundColor: "#4FC3A1",
                borderRadius: "50%",
                border: "none",
                marginLeft: "30px",
              }}
              type="submit"
              onClick={() => func(id)}
            >
              <AiFillDelete size="1.2rem" fill="#fff" />
            </button>
          </td>
          <td>
            <button type="button" onClick={toggleModal}>
           more
            </button>
          </td>
     
          <td>
            {newStatus && newStatus?<button onClick={statusAdd} style={{backgroundColor:"green","borderRadius":"50px",color:"white",border:'none'}}>✔</button>:<button style={{backgroundColor:"red","borderRadius":"50px",color:"white",border:'none'}} onClick={statusAdd}>-</button>}
         <div >{newStatus}</div>
          </td>
        </tr>
      </tbody>

      {isShown && (
        <Modal isShown={isShown} onClose={toggleModal}>
<form className={s.modalForm} onSubmit={onSubmitHandler}>

         <ul> <li> <h3>ID:</h3><p>{id}</p></li>
       <li><h3> TITLE:  </h3><p>{title}</p></li>
                  
      <li> <h3> DESCRIPTION: </h3>   <p>{comments}</p></li>
       </ul>
         
            <button
              className={s.modalButton}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Oval color="#25515a" height={20} width={20} />
              ) : (
                "CLOSE"
              )}
            </button>
            </form>

        </Modal>
      )}
    </>
  );
}
