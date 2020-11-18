import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import NavComponent from "./NavComponent";
import { useSelector } from "react-redux";
import axios from "axios";

function Settings() {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const history = useHistory();
  const params = useParams();
  const [files, setFiles] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/users/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("RES>DATA : ", res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setUserName(res.data.userName);
        setDescription(res.data.description);
      });
  }, []);

  function uploadFiles(event) {
    setFiles(event.target.files[0]);
  }

  function axiosUpdate(e) {
    e.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      description: description,
    };
    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("userName", user.userName);
    formData.append("description", user.description);

    // Update the formData object
    formData.append("image", files, files.name);
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL}/users`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      console.log(res);
      history.push(`/${userName}`);
    });
  }

  return (
    <>
      {user && (
        <div className="homeBody">
          <NavComponent />
          <div className="container">
            <div className="shadow pr-5 pl-5 pb-5 pt-5 d-flex justify-content-center align-items-center feedContainer">
              <div className="">
                <form
                  encType="multipart/form-data"
                  data-parsley-validate=""
                  onSubmit={(e) => axiosUpdate(e)}
                >
                  <h2 className="text-center mb-5">Edit profile</h2>
                  <div className="form-row align-items-center">
                    <div className="col-sm-4 my-1">
                      <label className="sr-only" for="firstName"></label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        id="firstName"
                        required=""
                        data-parsley-required-message="Por favor ingrese un nombre"
                        value={firstName}
                      />
                    </div>
                    <div className="col-sm-4 my-1">
                      <label className="sr-only" for="lastName"></label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastName"
                        name="lastName"
                        required=""
                        value={lastName}
                        data-parsley-required-message="Por favor ingrese un apellido"
                      />
                    </div>
                    <div className="col-sm-4 my-1">
                      <label className="sr-only" for="userName"></label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          onChange={(e) => setUserName(e.target.value)}
                          name="userName"
                          required=""
                          value={userName}
                          data-parsley-required-message="Por favor ingrese un nombre de usuario"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <h4 className="pt-3 pb-2">
                      <label for="description">Description</label>
                    </h4>
                    <textarea
                      className="form-control mb-3"
                      name="description"
                      id="description"
                      rows="5"
                      placeholder="Ingrese una descripcion"
                      data-parsley-required-message="Por favor ingrese una descripcion"
                      required=""
                      value={description}
                      aria-describedby="helpId"
                      onChange={(e) => setDescription(e.target.value)}
                    >
                      user.description
                    </textarea>
                    <div className="row">
                      <div className="col-sm-6">
                        <h4 className="pt-3 pb-2">
                          <label for="imagen">Upload an image</label>
                        </h4>
                        <input
                          type="file"
                          multiple
                          onChange={(e) => uploadFiles(e)}
                          className="form-control-file"
                          name="image"
                          id="image"
                          placeholder=""
                          aria-describedby="fileHelpId"
                        />
                        <small
                          id="fileHelpId"
                          class="form-text text-muted mb-5"
                        >
                          Inserte un archivo JPG o PNG
                        </small>
                      </div>
                      <div className="col-sm-6">
                        <button
                          name=""
                          id=""
                          className="btn btn-primary rounded-pill p-2 tweetButton saveButton mt-sm-4"
                          href=""
                          type="submit"
                          role="button"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Settings;
