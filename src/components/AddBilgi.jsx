import { useState } from "react";

const AddBilgi = ({postBilgiler}) => {

const[baslik,setBaslik]=useState("")
const[desc,setDesc]=useState("")
  
const handleSubmit=(e)=>{
e.preventDefault()

// database e yolla
postBilgiler({title:baslik, description:desc})

setBaslik("")
setDesc("")

}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
