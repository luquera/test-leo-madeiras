import React from "react"
import {
  Container,
  TitleBox,
  FormContent,
  FormGroup,
  Input,
  MaskedInput,
  Button
} from './styled';
import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import isValidCPF from "../../utils/isValidCPF";
import useLocalStorageState from 'use-local-storage-state'
import { Link } from "gatsby"

const UserForm = () => {
  const [ usersList, setUsersList ] = useLocalStorageState('usersList', [])
  const { register, formState: { errors }, handleSubmit, control } = useForm();

  const saveUser = ({nome, cpf, telefone, email}) => {   
    const removeMask = (str) => str.replace(/[^a-zA-Z0-9]/g, '');
    setUsersList([...usersList, {
      id: usersList.length+"",
      nome,
      email,
      cpf: removeMask(cpf),
      telefone: removeMask(telefone)
    }])
    toast.success("Salvo com sucesso!")
  }

  return (<>
    <ToastContainer />
    <Container>
      <TitleBox>
        <h1 data-testid='title'>Cadastrar Novo Usuário</h1>
        <Link to="/">
          <Button>Listagem</Button>
        </Link>
      </TitleBox>
      <FormContent onSubmit={handleSubmit(saveUser)}>
        <FormGroup>
          <label htmlFor="nome">Nome</label>
          <Input 
            type="text"
            {...register("nome", { 
              required: true, 
              minLength: 2,
              pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
            })}
            className={errors.nome && 'invalid'}
            placeholder="Nome" 
            required/>
          {errors.nome && <span className="input-error">Nome inválido</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <Controller
            name="cpf"
            control={control}
            rules={{ required: true, minLength: 14, validate: isValidCPF }}
            render={({ field }) =>
              <MaskedInput 
                onChange={e => field.onChange(e.target.value)}
                mask="999.999.999-99"
                maskChar={null}
                className={errors.cpf && 'invalid'}
                placeholder="CPF" />
            }
          />
          {errors.cpf && <span className="input-error">CPF inválido</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="telefone">Telefone</label>
          <Controller
            name="telefone"
            control={control}
            rules={{ required: true, minLength: 15 }}
            render={({ field }) =>
              <MaskedInput 
                onChange={e => field.onChange(e.target.value)}
                mask="(99) 99999-9999"
                maskChar={null}
                className={errors.telefone && 'invalid'}
                placeholder="Telefone" />
            }
          />
          {errors.telefone && <span className="input-error">Telefone inválido</span>}
        </FormGroup>  
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input 
            type="email" 
            {...register("email", { 
              required: true,  
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ 
            })} 
            className={errors.email && 'invalid'}
            placeholder="Email" 
            required/>
          {errors.email && <span className="input-error">Email inválido</span>}
        </FormGroup>
        <Button type="submit" style={{ margin: 0 }}>Salvar</Button>
      </FormContent>
    </Container>
  </>)
}


export default UserForm