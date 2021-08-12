import React, { useState } from "react"
import { 
  Container,
  TitleBox,
  Button
} from './styled'
import { DataGrid } from '@material-ui/data-grid';
import useLocalStorageState from 'use-local-storage-state'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "gatsby"

const UserList = () => {
  const [ usersList, setUsersList ] = useLocalStorageState('usersList', [])
  const [ seletedUsers, setSeletedUsers ] = useState([]);
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID',
      width: 120 
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 150,
      editable: true,
    },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'telefone',
      headerName: 'Telefone',
      width: 150,
      editable: true,
    },
  ];

  const handleEdit = ({id, field, value}) => {
    const index = usersList.findIndex(user => user.id === id);
    usersList[index][field] = value;
    setUsersList(usersList)
    toast.success("Atualizado com sucesso!")
  }

  const handlePurge = () => {
    setUsersList(
      usersList.filter((user) => {
        return seletedUsers.filter((id) => id === user.id).length < 1
      })
    );
    toast.success("Removido(s) com sucesso!")
  };

  return (<>
    <ToastContainer />
    <Container>
      <TitleBox>
        <h1>Lista Usuários</h1>
        <p>Clique duas vezes em um campo para editar</p>
        <p>Selecione e clique em "Limpar" para deletar</p>
        <Link to="/form">
          <Button>Novo</Button>
        </Link>
        <Button onClick={handlePurge}>Limpar</Button>
      </TitleBox>
      <DataGrid
        rows={usersList}
        columns={columns}
        pageSize={10}
        checkboxSelection
        onCellEditCommit={handleEdit}
        onSelectionModelChange={setSeletedUsers}
      />
    </Container>
  </>)
}

export default UserList