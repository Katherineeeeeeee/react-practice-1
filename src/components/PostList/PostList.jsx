const PostList = ({ postList }) => {
  return (
    <>
      <h2 className="post-list-title">Post List</h2>
      <ul className="post-list">
        {postList.map(item => {
          const { id, title, description, url } = item;
          return (
            <li className="post-list-item" key={id}>
              <img className="post-list-img" src={url} alt={description} />
              <h4 className="post-list-item-title">{title}</h4>
              <p className="post-list-item-text">{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
