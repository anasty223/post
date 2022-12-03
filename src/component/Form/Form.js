import s from "./Form.module.css";
import { toast, ToastContainer } from "react-toastify";
import { useAddPostMutation } from "../../redux/posts";
import { useState } from "react";
import Filter from "../Filter/Filter";
import Modal from "../ModalEnter/Modal";
import { Oval } from "react-loader-spinner";


export default function Form() {

  const [addPost] = useAddPostMutation();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState("");
  const [isShown, setIsshown] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "author":
        setAuthor(value);
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

    if(title.trim()==="" || author.trim() ==""){
setIsshown(true);
        }
        
    else{
      addPost({ title, author, comments });

      toast(({ data }) => `Added ${title} in posts`, {
        data: "world",
      });
    }
        


    setTitle("");
    setAuthor("");
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
              placeholder="Title of post"
                type="text"
                name="title"
                required
                value={title}
                onChange={handleInputChange}
                maxlength="20"
              />
            </label>
    
            <label className={s.labelModal}>
              Author
              <input
               className={s.inputModal}
               placeholder="your name"
                type="text"
                name="author"
                required
                value={author}
                onChange={handleInputChange}
                maxlength="20"
              />
            </label>
    
            <label className={s.labelModal}>
            Comments
              <textarea
               className={s.inputModal}
               placeholder="text"
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
     
          <Filter/>
         
          <ToastContainer closeButton={false} /> 
          
       
        </div>
        {isShown && (
        <Modal isShown={isShown} >
        <p>Please enter the data</p>
            <button
              className={s.modalButton}
              type="submit"
         onClick={closing}
            >
             
                <Oval color="#25515a" height={20} width={20} />
         
                "OK"
             
            </button>
      
        </Modal>
      )}
  
        </>
  );
}
