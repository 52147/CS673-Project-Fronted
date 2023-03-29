import React from "react";

export const ReserveData = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.type}</td>
          {[...Array(24).keys()].map((i) => (
            <td key={`a${i + 1}`}>{post[`a${i + 1}`]}</td>
          ))}
          {[...Array(24).keys()].map((i) => (
            <td key={`b${i + 1}`}>{post[`b${i + 1}`]}</td>
          ))}
        </tr>
      ))}
    </>
  );
};
