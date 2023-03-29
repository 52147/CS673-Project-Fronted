import React from 'react'

export const AppointmentData = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.date}</td>
          <td>{post.license}</td>
          <td>{post.parklot}</td>
        </tr>
      ))}
    </>
  )
}
