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

const UserForm = () => {
  const { register, formState: { errors }, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Salvo com sucesso!")
  }

  return (<>
    <ToastContainer />
    <Container>
      <TitleBox>
        <h1>Cadastrar Novo Usuário</h1>
      </TitleBox>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit">Salvar</Button>
      </FormContent>
    </Container>
  </>)
}


export default UserForm