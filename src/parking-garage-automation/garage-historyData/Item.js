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
                    {post.id}
                </td>
                <td>
                    {post.plate}
                </td>
                    <td>
                        {post.entrance}
                    </td>
                    <td>
                        {post.exit}
                    </td>
                    <td>
                        {post.cardNum}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default Posts;