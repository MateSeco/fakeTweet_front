import React from "react";
import NavComponent from "./NavComponent";

function Description() {
  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 pt-5 d-flex justify-content-center align-items-center feedContainer">
          <div className="">
            <form
              action="/register/description"
              method="POST"
              enctype="multipart/form-data"
              data-parsley-validate=""
            >
              <h2 className="text-center mb-5">Edit profile</h2>
              <div className="form-row align-items-center">
                <div className="col-sm-4 my-1">
                  <label className="sr-only" for="firstName"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    required=""
                    data-parsley-required-message="Por favor ingrese un nombre"
                  />
                </div>
                <div className="col-sm-4 my-1">
                  <label className="sr-only" for="lastName"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    required=""
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
                      name="userName"
                      required=""
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
                  aria-describedby="helpId"
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
                      className="form-control-file"
                      name="image"
                      id="image"
                      placeholder=""
                      aria-describedby="fileHelpId"
                    />
                    <small id="fileHelpId" class="form-text text-muted mb-5">
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
  );
}
export default Description;
