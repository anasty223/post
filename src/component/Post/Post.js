import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/items-selector";
import {  useDeletePostMutation, useGetPostQuery } from "../../redux/posts";
import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore ";
import Form from "../Form/Form";
import { Loader } from "../Loader/Loader";
import Navigation from "../Navigation.js/Navigation";
import Table from "../Table/Table";
import s from "./Post.module.css"
import axios from "axios"


export default function Post() {
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(false)
  const [isPending, setIsPending] = useState(false);
  const { data } = useGetPostQuery(page);
  const filter = useSelector(getFilter);
  console.log("data", data);

 
  const [deletePost] = useDeletePostMutation();

  const getVisiblePost = () => {
  
  

    const normalizeFilter = filter.toLowerCase();

    return data.filter((post) =>
      post.title.toLowerCase().includes(normalizeFilter)
    );

  };
 

  
  const handleLoadMore = () => {


    setPage((prevPage) => prevPage +  1);
    isPending(true);
  };


    return (
    <div className={s.containerTable}>
      <Navigation/>
      <Form posts={data} />

      {data &&  <Table posts={getVisiblePost()} onDeletePost={deletePost} loadMore={handleLoadMore} />}

      {isPending && <Loader />}

      {data?.length >= 5 && (
        <ButtonLoadMore  handleLoadMore={handleLoadMore} />
      )}
      
    </div>)
}