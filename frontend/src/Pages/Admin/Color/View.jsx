import React, { useContext, useEffect, useState } from 'react'
import { getColor, } from '../../../Apis/color';
import { MainContext } from '../../../Context/ContextHolder';
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function View() {
  const [colorData, setColorData] = useState([]);
  const { toggleLoader } = useContext(MainContext);
  const { notify } = useContext(MainContext)
  let sr = 0;



  useEffect(
    () => {
      toggleLoader(true);
      getColor()
        .then(
          (success) => {
            setColorData(success.data.color);
            toggleLoader(false);
          }
        )
        .catch(
          (error) => {
            // console.log(error);
            setColorData([]);
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
            <th>Color</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            colorData.map(
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

const TableRow = ({ data, del }) => {
  return <tr>
    <td>{data.sr}</td>
    <td>{data.name}</td>
    <td>
      <div style={{
        width: "50px", height: "50px", background: data.color
      }}></div>
    </td>
    <td>
      <AiFillDelete style={{ color: "red" }} onClick={del} />
      {"    "}
      <Link to={`/admin/category/edit/${data._id}`}>
        <BsFillPencilFill />
      </Link>
    </td>
  </tr>
}