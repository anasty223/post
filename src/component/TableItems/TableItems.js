import { useState } from "react";
import s from "./TableItems.module.css"
import { AiFillDelete } from "react-icons/ai";
import { useUpdatePostMutation } from "../../redux/posts";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";
import { Oval } from "react-loader-spinner";




export default function TableItems({ title, author, id, func, comments }) {
  const [updateContact, { isLoading }] = useUpdatePostMutation();
  const [isShown, setIsshown] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newComments, setNewComments] = useState(comments);


  const toggleModal = () => {
    setIsshown(!isShown);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setNewTitle(value);
        break;

      case "author":
        setNewAuthor(value);
        break;
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
      newAuthor: author,
      newComments: comments,
    } = data;

    updateContact({ id, title, author, comments });
    toast.success(`${data.newTitle} post corrected!`);
    setIsshown(false)
    return;

  };

  const onSubmitHandler = e => {
    e.preventDefault();
    onFormSubmit({ id, newTitle, newAuthor,newComments });
  };


  return (
    <>
      <tbody>

        <tr>
          <td>{title}</td>
          <td>{author}</td>
          <td>{comments}</td>
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
            Edit
          </button>
        
       </td>
        </tr>
      </tbody>


     



      {isShown && (
        <Modal isShown={isShown} onClose={toggleModal}>
          <form className={s.modalForm}onSubmit={onSubmitHandler}>
            <label className={s.labelModal}>
              Title
              <input
                type="text"
                name="title"
                value={newTitle}
                
                required
                onChange={handleInputChange}
              />
            </label>
            <label  className={s.labelModal}>
              Author
              <input
                type="text"
                name="author"
                value={newAuthor}
              
                required
                onChange={handleInputChange}
              />
            </label>
            <label  className={s.labelModal}>
              Comment
              <input
                type="text"
                name="comments"
                value={newComments}
                
                required
                onChange={handleInputChange}
              />
            </label>
            <button className={s.modalButton} type="submit" disabled={isLoading}>
              {isLoading ? (
                <Oval color="#25515a" height={20} width={20} />
              ) : (
                'OK'
              )}
            </button>
          </form>
        </Modal>
      )}
     
    </>
  );
}
