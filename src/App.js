import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFilter } from "./redux/items-selector";
import { useGetPostQuery, useDeletePostMutation } from "../src/redux/posts";

import Form from "./component/Form/Form";
import Table from "./component/Table/Table";
import Filter from "./component/Filter/Filter";
import { ButtonLoadMore } from "./component/ButtonLoadMore/ButtonLoadMore ";
import { Loader } from "./component/Loader/Loader";


export default function App() {

   const [page, setPage] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const { data } = useGetPostQuery();
  const filter = useSelector(getFilter);
  console.log("data", data);
  // console.log("isLoading", isLoading);
 
  const [deletePost] = useDeletePostMutation();

  const getVisiblePost = () => {
 

    const normalizeFilter = filter.toLowerCase();

    return data.filter((post) =>
      post.title.toLowerCase().includes(normalizeFilter)
    );

  };
 

  
  const handleLoadMore = () => {


    setPage((prev) => prev + 1);
    isPending(true);
  };


    return (
    <>
      <Form posts={data} />

      {data &&  <Table posts={getVisiblePost()} onDeletePost={deletePost} loadMore={handleLoadMore} />}

      {isPending && <Loader />}

      {data?.length >= 5 && (
        <ButtonLoadMore  handleLoadMore={handleLoadMore} />
      )}
    </>)
 
}
