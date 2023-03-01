import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFilter, getPosts } from "../../redux/items-selector";
import { useDeletePostMutation, useGetPostQuery } from "../../redux/posts";

import Form from "../Form/Form";

import Navigation from "../Navigation.js/Navigation";
import Table from "../Table/Table";
import s from "./Post.module.css";

export default function Post() {
  const { data } = useGetPostQuery();
  const [isPending, setIsPending] = useState(false);

  const filter = useSelector(getFilter);
  console.log("data", data);

  const [deletePost] = useDeletePostMutation();

  const getVisiblePost = () => {
    const normalizeFilter = filter.toLowerCase();

    return data.filter((post) =>
      post.title.toLowerCase().includes(normalizeFilter)
    );

  };


  return (
    <>
  
  <Navigation />
      <Form posts={data} />
         <h3>Tasks</h3>
      {!isPending && data?.length > 0 ? (
    
        <div className={s.containerTable}>
           
          <Table posts={getVisiblePost()} onDeletePost={deletePost} />

        </div>
      ) : (
        <p className={s.noPosts}>No published posts. Publish your first one in the form.</p>
      )}
      



    </>
  );
}
