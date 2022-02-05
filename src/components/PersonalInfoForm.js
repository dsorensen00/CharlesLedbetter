import React from "react";

export default function PersonalInfoForm() {
  return (
    <form class="container border rounded p-4">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First name"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <div class="form-group">
        <label for="idUpload">Upload ID</label>
        <input type="file" class="form-control-file" id="idUpload" />
      </div>
      <div class="form-row justify-content-end pr-5 pb-3">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
