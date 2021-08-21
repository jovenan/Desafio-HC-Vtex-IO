import React, { useState } from 'react';
import styles from './styles.css';

// Componente que renderiza um formulario de contato

interface appformularioProps {}

const appformulario: StorefrontFunctionComponent<appformularioProps> = ({}) => {

  // Instanciando os estados que vão ser usados.
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  // Função para lidar com a validação e envio dos dados
  function handleEnviar(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();

    function validateEmail(email: string) {
      var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (reg.test(email)) {
        return true; }
      else {
        return false;
      }
    } 

    if (nome !== '' && nome.length > 1 && validateEmail(email) && celular !== '') {

      interface DadoEnviado {
        "name": string,
        "email": string,
        "celular": string
      }

      const dado:DadoEnviado = {
        "name": nome,
        "email": email,
        "celular": celular
      };
      
      console.log(dado)
      setMensagem('Cadastrado com sucesso!');
    } else {
      setMensagem('Verifique os dados Inseridos.');
    }
  }

  return (
    <div className={styles.Container}>
      <h1 className={styles.HeadingTitulo}>Deseja receber as novidades mais quentes do momento?</h1>
      <h2 className={styles.HeadingTitulo}>Inscreva-se já!</h2>
      <form className={styles.Formulario} autoComplete="off">
        <input className={styles.inputForms} autoComplete="off" type="text" name="Nome" id="nome" value={nome} onChange={(e: any) => setNome(e.target.value)} required placeholder="Nome" />
        <input className={styles.inputForms} autoComplete="off" type="email" name="email" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required placeholder="Email" />
        <input className={styles.inputForms} autoComplete="off" type="text" name="celular" id="celular" value={celular} onChange={(e: any) => setCelular(e.target.value)} required placeholder="celular" />
        <input className={styles.inputButton} type="submit" value="Enviar" name='btnEnviar' id="btnEnviar" onClick={(e) => handleEnviar(e)} />
        <p className={styles.Mensagem}>{mensagem}</p>
      </form>
    </div>
  )
}

export default appformulario;