
import TableItems from "../TableItems/TableItems";
import s from "./Table.module.css";

export default function Table({ posts, onDeletePost, loadMore }) {
 return (
    <>

        <div
 
        >
       
 <table className={s.flTtable}>
            {posts.map(({ id, title, status, comments }) => (
              <TableItems
                key={id}
                id={id}
                title={title}
                comments={comments}
                func={onDeletePost}
                loadMore={loadMore}
                status={status}
              />
            ))} </table>

        </div>
     
    </>
  );
}
