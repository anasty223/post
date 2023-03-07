import s from "./Form.module.css";
import { toast, ToastContainer } from "react-toastify";
import { useAddPostMutation} from "../../redux/posts";
import { useState } from "react";

import Modal from "../ModalEnter/Modal";
import { Oval } from "react-loader-spinner";
import cat from "../ModalEnter/cat.jpg"

export default function Form() {
  const [addPost] = useAddPostMutation();
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [isShown, setIsshown] = useState(false);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      
      case "comments":
        setComments(value);
        break;
      default:
        return;
    }
  };




  const onSubmitForm = (e) => {
    e.preventDefault();

    if(title.trim()==="" ){

        }

    else{
      addPost({ title, comments });

      toast(({ data }) => `Added ${title} in posts`, {
        data: "world",
      });
    }
 
    setTitle("");
  
    setComments("");
 
  };
const closing=()=>{
  setIsshown(false)
}

  return (
<>
<div className={s.containerForm}>
    
    {   
    
    <form className={s.modalForm} onSubmit={onSubmitForm}>
            <label className={s.labelModal}>
              Title
              <input className={s.inputModal}
              placeholder="enter task "
                type="text"
                name="title"
                required
                 value={title}
                onChange={handleInputChange}
                maxlength="20"
              />
            </label>
    
            <label className={s.labelModal}>
            Comments
              <textarea
               className={s.inputModal}
               placeholder="enter description "
                type="text"
                name="comments"
                required
                value={comments}
                onChange={handleInputChange}
                maxlength="150"
              />
              <button className={s.buttonAdd} type="submit">Add post</button>
            </label>
    
          </form>
          
      }
     

         
          <ToastContainer closeButton={false} /> 
          
       
        </div>
        {isShown && (
        <Modal isShown={isShown} >
        <p className={s.modalText}>Please enter the data</p>
        <img src={cat}alt="cat" style={{width:100}}/>
            <button
              className={s.modalButton}
              type="submit"
         onClick={closing}
            >
             
                <Oval color="#25515a" height={20} width={20} />
         
                "CLOSE"
             
            </button>
      
        </Modal>
      )}
  
        </>
  );
}
