import React from 'react';

const Posts = ({historyPosts}) => {
    return (
        <>
            {historyPosts.map(post => (
                <tr>
                    <td>
                        {post.id}
                    </td>
                    <td>
                        {post.plate}
                    </td>
                    <td>
                        {post.entrance && post.entrance.length > 0 ? post.entrance.substring(0, 19) : 'N/A'}
                    </td>
                    <td>
                        {post.exit && post.exit.length > 0 ? post.exit.substring(0, 19) : 'N/A'}
                    </td>
                    <td>
                        {post.parkingFee}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default Posts;