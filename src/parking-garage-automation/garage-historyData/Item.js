import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }


    return (
        <>
            {posts.map(post => (
                <tr>
                <td>
                    {post.title}
                </td>
                <td>
                    {post.userId}
                </td>
                    <td>
                        {post.id}
                    </td>
                    <td>
                        {post.id}
                    </td>
                    <td>
                        {post.body}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default Posts;