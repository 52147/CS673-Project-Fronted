import React, { useState, useEffect }  from "react";
import {
    faSearch,
    faEdit,
    faTrash,
    faPlus,
    faUpload,
    faDownload,
  } from "@fortawesome/free-solid-svg-icons";
  import { Button, Table, Spinner, Pagination } from "react-bootstrap";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  deleteAuthorityThunk,
  importAuthorityThunk,
  exportAuthorityThunk,
} from "../../services/authorityThunk";
import { useDispatch, useSelector } from "react-redux";
export const Post = ({ posts }) => {
    const { loading, history, fil } = useSelector((state) => state.history);
    // const [active, setActivePage] = useState(1); 

    const dispatch = useDispatch();

    const [item, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    const handleEdit = (post) => {
        setEditingPost(post);
      };
    
      const handleDelete = (id) => {
        console.log("123");
        console.log(id);
        // handle delete user logic
        dispatch(deleteAuthorityThunk(id));
        window.location.reload();
      };
      const handleUpdate = (post) => {
        dispatch(updateAuthorityThunk(post));
        setEditingPost(null);
        window.location.reload();
      };

    // setActivePage(posts.length /10);
  return (
    <>
      {posts.map((post, index) => (
        <tr key={post.id}>
          <td>
            {editingPost && editingPost.id === post.id ? (
              <input
                type="text"
                value={editingPost.id}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    id: e.target.value,
                  })
                }
              />
            ) : (
              post.id
            )}
          </td>
          <td>
            {editingPost && editingPost.id === post.id ? (
              <input
                type="text"
                value={editingPost.username}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    username: e.target.value,
                  })
                }
              />
            ) : (
              post.username
            )}
          </td>
          <td>
            {editingPost && editingPost.id === post.id ? (
              <input
                type="text"
                value={editingPost.password}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    password: e.target.value,
                  })
                }
              />
            ) : (
              post.password
            )}
          </td>
          <td>
            {editingPost && editingPost.id === post.id ? (
              <input
                type="text"
                value={editingPost.role}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    role: e.target.value,
                  })
                }
              />
            ) : (
              post.role
            )}
          </td>
          <td>
            {editingPost && editingPost.id === post.id ? (
              <>
                <Button
                  className="me-2"
                  variant="outline-success"
                  onClick={() => handleUpdate(editingPost)}
                >
                  Save
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => setEditingPost(null)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="me-2"
                  variant="outline-secondary"
                  onClick={() => handleEdit(post)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};