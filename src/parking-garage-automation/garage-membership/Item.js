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
                        {post.userId}
                    </td>
                    <td>
                        {post.plate}
                    </td>
                    <td>
                        {post.endTime && post.endTime.length > 0 ? post.endTime.substring(0, 19) : 'N/A'}


                    </td>
                </tr>
            ))}
        </>
    );
};

export default Posts;