import React from 'react'

// Componente que renderiza um botão que leva para o Whatsapp

interface appwhatsappProps {}

const appwhatsapp: StorefrontFunctionComponent<appwhatsappProps> = ({}) => {
  return (
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5515998377848&text=Ol%C3%A1!%20Tudo%20bem%3F">
      <img src="https://img.icons8.com/ios/452/whatsapp--v1.png" alt="Icone Whatsapp" width="45px" />
    </a>
  )
}

export default appwhatsapp;