import React from 'react';

const Posts = ({posts}) => {
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
                        {post.entrance.substring(0, 19)}
                    </td>
                    <td>
                        {post.exit.substring(0, 19)}
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