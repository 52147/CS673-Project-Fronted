import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import axios from "axios";

import { Button, Table, Spinner, Pagination } from "react-bootstrap";
import {
  faSearch,
  faEdit,
  faTrash,
  faPlus,
  faUpload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  deleteAuthorityThunk,
  importAuthorityThunk,
  exportAuthorityThunk,
} from "../../services/authorityThunk";
import { useDispatch, useSelector } from "react-redux";

export const Autho = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { loading, history, fil } = useSelector((state) => state.history);
  const [editingPost, setEditingPost] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");
  const [file, setFile] = useState(null);
  const [exporting, setExporting] = useState(false);

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const postsPerPage = 8;
  // Get current posts
  const indexOfLastPost = activePage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageCount = Math.ceil(posts.length / postsPerPage);
  const pageItems = [];

  for (let i = 1; i <= pageCount; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === activePage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    console.log("Fetching history...");
    dispatch(AuthorityThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log(history);

    console.log(loading);
    if (Array.isArray(history)) {
    }
    setPosts(history);
  }, [history]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async (event) => {
    const formData = new FormData();
    formData.append("file", file);

    dispatch(importAuthorityThunk(formData));
    console.log(formData);
  };

  const handleExport = async () => {
    dispatch(exportAuthorityThunk()).then((res) => {
      // console.log(file.history);
      console.log(res);
      console.log(res.payload);
      // const type = res.headers['content-type']
      const blob = new Blob([res.payload], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "123.xlsx";
      downloadLink.click();
    });
    setExporting(true);
  };

  const handleSearch = () => {
    const filteredPosts = history.filter((post) =>
      post.id.toString().includes(searchQuery)
    );
    setPosts(filteredPosts);
  };

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
  const handleCreateUser = () => {
    dispatch(
      updateAuthorityThunk({
        username: newUsername,
        password: newPassword,
        role: newRole,
      })
    );
    setNewUsername("");
    setNewPassword("");
    setNewRole("");
    window.location.reload();
  };

  return (
    <>
      <div className="input-group">
        <input
          className="pl-3.5"
          placeholder="Search ID"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mr-5 input-group-append">
          <Button
            className="ml-4"
            variant="outline-primary"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <Button
          className="ml-4"
          variant="outline-primary"
          onClick={handleImport}
        >
          <FontAwesomeIcon icon={faUpload} />
        </Button>
        <Button
          className="ml-4"
          variant="outline-primary"
          onClick={handleExport}
        >
    {exporting ? (
      <span>Exporting...</span>
    ) : (
      <span>Export Data</span>
    )}
          <FontAwesomeIcon icon={faDownload} />
        </Button>
      </div>
      <div className="row me-4">
        <div className="col-12 mt-3 text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateUser();
            }}
          >
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faPlus} />
              Create User
            </Button>
          </form>

          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
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
              </tbody>
            </Table>
          )}
          <div className="mt-2 d-flex justify-content-center">
            <Pagination>{pageItems}</Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
