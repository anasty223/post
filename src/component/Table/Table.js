import TableItems from '../TableItems/TableItems'
import s from './Table.module.css'


export default function Table({posts,onDeletePost}) {
    return <>
   <h1 className={s.headerTable}>Posts</h1>

<table className={s.flTtable}>
<thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Coments</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        </thead>
    {posts.map(({id,title,author,comments})=>(<TableItems  key={id}
          id={id}
          title={title}
          author={author}
          comments={comments}
          func={onDeletePost}/>))}
      
    </table>
    </>

}