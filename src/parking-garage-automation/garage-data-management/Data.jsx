import React from "react";

export const Data = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <tr>
          <td>{post.id}</td>
          <td>{post.section}</td>
          <td>{post.bicycle}</td>
          <td>{post.car}</td>
          <td>{post.motorcycle}</td>
          <td>{post.electric}</td>
          <td>{post.bus}</td>
          <td>{post.disable}</td>
        </tr>
      ))}
    </>
  );
};
