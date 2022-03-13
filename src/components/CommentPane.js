import React from 'react';
import { useState, useEffect } from 'react';
import CommentContainer from './CommentContainer';

export default function CommentPane(props) {
    const {postId} = props;
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [author_name, setAuthorName] = useState("");
    const [content, setContent] = useState("");

    const addComment = () => {
      if(content !== "" && author_name !== ""){
      let newComment = {
        id: -1,
        post: postId,
        parent: 0,
        author: 0,
        author_name: "",
        content: {
          rendered: "",
        },
      };
      let time = new Date();
      newComment.id = comments.length + 10;
      newComment.date = time.toISOString();
      newComment.author_name = author_name;
      newComment.content.rendered = "<p>" + content + "</p>";
      setComments([...comments, newComment]);
      setAuthorName("");
      setContent("");
    }
   };

    useEffect(
      () => {
        fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=" + postId)
                .then((res) => res.json())
                .then((json) => setComments(json))
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
      },
      [postId],
    )

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    if (error) {
      return (
        <div>Error: {error.message}</div>
      )
    }
    return (
      <div className="my-2">
        <div className="input-group row justify-content-left">
            <div className="col-md-10"><div className="row">
          <label htmlFor="author_name" className="col-sm-1">Name </label>
          <input className="col-sm-7 form-control" name="author_name" value={author_name}  onChange={(event) => setAuthorName(event.target.value)} type="text" />
        </div></div>
        <div className="col-md-10 my-3"><div className="row">
          <label htmlFor="content" className="col-md-1 col-sm-4">Comment </label>
          <textarea className="col-md-7 col-sm-6 form-control" name="content" value={content}  onChange={(event) => setContent(event.target.value)} type="text" />
        </div></div>
        <div className="col-md-10 my-3">
        <button onClick={addComment}>Add Reply</button>
        </div>
      </div>
      <CommentContainer comments={comments} />
      </div>
    )
}
