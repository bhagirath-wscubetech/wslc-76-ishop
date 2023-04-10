import React, { useContext, useRef } from 'react'
import { MainContext } from '../../../Context/ContextHolder';
export default function Add() {
  const { notify } = useContext(MainContext)
  const slugBox = useRef();
  const getData = (event) => {
    console.clear();
    slugBox.current.value = event.target.value.toLowerCase().split(" ").join("-");
    if (false) {
      // success
      notify("Success", true);
    } else {
      // fail
      notify("Errro", false);
    }
  }
  return (
    <div className='container mt-5'>
      <div className="card p-2 rounded-1">
        <div className='card-heading h4 ps-2 mb-0'>
          Add Category
        </div>
        <hr />
        <div className="card-body">
          <form action="">
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Category Name</label>
                <input type="text" name="category_name" className="form-control" placeholder="Category name" onKeyUp={getData} />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Category Slug</label>
                <input type="text" name="category_slug" className="form-control" readOnly={true} ref={slugBox} placeholder="Category slug" />
              </div>
              <div>
                <button className='btn btn-primary'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
