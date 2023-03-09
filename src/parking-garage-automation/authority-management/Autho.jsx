import React, { useState, useEffect } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthorityThunk } from "../../services/authorityThunk";
import { useDispatch, useSelector } from "react-redux";

export const Autho = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { loading, history } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(AuthorityThunk());
  }, [dispatch]);

  useEffect(() => {
    if (history) {
      setPosts(history);
    }
  }, [history]);

  const handleSearch = () => {
    const filteredPosts = history.filter((post) =>
      post.id.toString().includes(searchQuery)
    );
    setPosts(filteredPosts);
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
          <Button className="ml-4" variant="outline-primary" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>

      <div className="row me-4">
        <div className="col-12 mt-3 text-black">
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
                    <td>{post.id}</td>
                    <td>{post.username}</td>
                    <td>{post.password}</td>
                    <td>{post.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
};

