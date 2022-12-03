import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/items-selector";
import { useAddPostMutation, useGetPostQuery } from "../../redux/posts";
import EndMsg from "../EndMsg/EndMsg";
import { Loader } from "../Loader/Loader";
import TableItems from "../TableItems/TableItems";
import s from "./Table.module.css";

export default function Table({ posts, onDeletePost, loadMore }) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [newPost] = useAddPostMutation();
  //  console.log("postsssssssssssssssssss",newPost);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);

    newPost(page).then((res) => {
      return res.data;
    });
    setHasMore(true);

  };

  return (
    <>


      <table className={s.flTtable}>

        <div
          id="scrollableDiv"
          style={{
            height: 400,
            overflow: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <InfiniteScroll
            dataLength={posts.length}
            next={handleLoadMore}
            height={400}
            pullDownToRefreshThreshold={100}
            hasMore={true}
            endMessage={<EndMsg />}
            loader={<Loader/>}
            scrollableTarget="scrollableDiv"
          >

            
            {posts.map(({ id, title, author, comments }) => (
              <TableItems
                key={id}
                id={id}
                title={title}
                author={author}
                comments={comments}
                func={onDeletePost}
                loadMore={loadMore}
              />
            ))}{" "}
          </InfiniteScroll>
        </div>
      </table>
    </>
  );
}
