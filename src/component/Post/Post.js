import {  useState } from "react";
import { useSelector } from "react-redux";
import { getFilter, getPosts } from "../../redux/items-selector";
import {  useDeletePostMutation, useGetPostQuery } from "../../redux/posts";

import Form from "../Form/Form";
import { Loader } from "../Loader/Loader";
import Navigation from "../Navigation.js/Navigation";
import Table from "../Table/Table";
import s from "./Post.module.css"
import InfiniteScroll from "react-infinite-scroll-component";
import EndMsg from "../EndMsg/EndMsg"

export default function Post() {
  const [page, setPage] = useState(1);
  
  const { data } = useGetPostQuery(page);

  const [isPending, setIsPending] = useState(false);

  const filter = useSelector(getFilter);
  // console.log("data", data);


 
  const [deletePost] = useDeletePostMutation();

  const getVisiblePost = () => {
 
    const normalizeFilter = filter.toLowerCase();
    
return data.filter((post) =>

      post.title.toLowerCase().includes(normalizeFilter)
    
    );

  };



  const handleLoadMore = () => {
    setPage((prevPage) => prevPage +  1);
    // setHasMore(false)
  };
    return (
      <>
        

<Navigation/>
<Form posts={data} />


{!isPending && data?.length > 0?(
 



<div className={s.containerTable}>

  
  <Table posts={getVisiblePost()} onDeletePost={deletePost}  />
  </div>



)   :(<p>No Contacts</p>)} 




{/* <Form posts={data} />

{data &&  <Table posts={getVisiblePost()} onDeletePost={deletePost}  />}

{isPending && <Loader />}

{data?.length >= 5 && (
<ButtonLoadMore  handleLoadMore={handleLoadMore} />
)} */}


      </>
  )
}