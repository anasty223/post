import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { getFilter, getPosts } from "../../redux/items-selector";
import { useAddPostMutation, useGetPostQuery } from "../../redux/posts";
import EndMsg from "../EndMsg/EndMsg";
import { Loader } from "../Loader/Loader";
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
