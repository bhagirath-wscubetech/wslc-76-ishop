import React, { useContext, useRef } from 'react'
import { MainContext } from '../../../Context/ContextHolder';
import { addCategory } from '../../../Apis/category';

export default function Add() {
  const { notify } = useContext(MainContext)
  const slugBox = useRef();
  const getData = (event) => {
    const arr = event.target.value.toLowerCase().split(" ");
    slugBox.current.value = arr.length > 1 ? arr.join("-") : arr.toString();
  }

  const submitForm = (event) => {
    event.preventDefault();
    addCategory({
      name: event.target.category_name.value,
      slug: event.target.category_slug.value
    })
      .then(
        (success) => {
          notify(success.data.msg, success.data.status);
          event.target.reset();
        }
      )
      .catch(
        (error) => {
          notify(error.data.msg, error.data.status);
        }
      )
  }
  return (
    <div className='container mt-5'>
      <div className="card p-2 rounded-1">
        <div className='card-heading h4 ps-2 mb-0'>
          Add Category
        </div>
        <hr />
        <div className="card-body">
          <form action="" onSubmit={submitForm}>
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
