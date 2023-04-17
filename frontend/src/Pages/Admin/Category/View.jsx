import React, { useContext, useEffect, useState } from 'react'
import { getCategory } from '../../../Apis/category';
import { MainContext } from '../../../Context/ContextHolder';
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
export default function View() {
  const [categoryData, setCategoryData] = useState([]);
  const { toggleLoader } = useContext(MainContext);

  let sr = 0;

  useEffect(
    () => {
      toggleLoader(true);
      getCategory()
        .then(
          (success) => {
            setCategoryData(success.data.category);
            toggleLoader(false);
          }
        )
        .catch(
          (error) => {
            // console.log(error);
            setCategoryData([]);
            toggleLoader(false);
          }
        )
    },
    []
  )

  return (
    <div class="p-3 table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Name</th>
            <th scope="col">Slug</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryData.map(
              (d) => {
                sr++;
                return <TableRow key={d._id} data={{ sr, ...d }} />
              }
            )
          }
        </tbody>
      </table>
    </div>

  )
}

const TableRow = ({ data }) => {
  console.log(data);
  return <tr>
    <td>{data.sr}</td>
    <td>{data.name}</td>
    <td>{data.slug}</td>
    <td>
      <AiFillDelete style={{ color: "red" }} />
      {"    "}
      <BsFillPencilFill />
    </td>
  </tr>
}