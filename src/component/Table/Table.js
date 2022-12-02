import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/items-selector';
import { useGetPostQuery } from '../../redux/posts';
import EndMsg from '../EndMsg/EndMsg';
import { Loader } from '../Loader/Loader';
import TableItems from '../TableItems/TableItems'
import s from './Table.module.css'


export default function Table({posts,onDeletePost,loadMore}) {
    const [page, setPage] = useState(1);
      const [hasMore, setHasMore] = useState(true);
    const { data } = useGetPostQuery(page);
    const filter = useSelector(getFilter);
   

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage +  1);
        setHasMore(false)
      };
      const getVisiblePost = () => {
 
        const normalizeFilter = filter.toLowerCase();
        
    return data.filter((post) =>
    
          post.title.toLowerCase().includes(normalizeFilter)
        
        );
    
      }; 
    return <>
   <h1 className={s.headerTable}>Posts</h1>   
   <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
      
   

  

{ <table className={s.flTtable}>
<InfiniteScroll
     dataLength={posts.length}
     next={handleLoadMore}
     height={200}
     pullDownToRefreshThreshold={150}
     hasMore={getVisiblePost()}
     loader={<Loader />}
     endMessage={<EndMsg />}
     scrollableTarget="scrollableDiv"
   >
<thead>
        <tr>
        <th>id of post</th>
            <th>Title</th>
            <th>Author</th>
            <th>Coments</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        </thead>
    
   
           
 

    {posts.map(({id,title,author,comments})=>(

    <TableItems  key={id}
          id={id}
          title={title}
          author={author}
          comments={comments}
          func={onDeletePost}
          loadMore={loadMore}/>
         
          ))}
           </InfiniteScroll>
          </table>
       }
   
  
    </div>
    </>

}