import React,{useState} from 'react'
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from '@material-ui/icons';
import { userRows } from '../../dommydata';
import {Link} from 'react-router-dom';
const UserList = () => {

    const [data,setData]=useState(userRows);

    const handleDelete=(id)=>{
       setData(data.filter(item=>item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'username', width: 200,renderCell:(params)=>{
            return(
                <div className='userListUser'>
                 <img className="userListImg"src={params.row.avatar} alt=""/>
                 {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 140 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'transaction',
            type: 'number',
            width:180,
          },
          {
              field:'action',
              headerName:"Action",
              type:'number',
              width:200,
              renderCell:(params)=>{
                  return(
                      <>
                      <Link to={"/user/"+params.row.id}><button className="userListEdit">EDIT</button></Link>
                      
                    <DeleteForever className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                  </>
                  )
              }
          },
      
      ];
      
     
    return (
        <div className='userList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}

export default UserList
