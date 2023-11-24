import React from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Local from "../../assets/img/local.svg"
import Phone from "../../assets/img/phone-broken.svg"
import Mail from "../../assets/img/mail-filled.svg"

const Junta = styled.div`
    width: 100%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    height: 20vh;
    background-color: black;
    display: flex;
    padding-top: 10vh;
    justify-content: center;
`
const Help = styled.h2`
    padding-right: 15vh;
`
const Linha = styled.div`
    position: relative;
    bottom: 5vh;
    left: 45vh;
    width: 50%;
    height: 2px;
    background-color: orange;
`

const UpContainer = styled.div`
    width: 50%;
    height: 12vh;
    background-color: orange;
    position: relative;
    top: 5vh;
    margin: 0 25%;
`

const Padding = styled.h1`
   position: relative;
   bottom: 1.5vh;
`

const Paddingh2 = styled.h2`
   position: relative;
   bottom: 2vh;
`

const Image = styled.img`
    width: 70px;
    position: relative;
    bottom: 4vh;
    right: 10px;
`

function Rodape() {
  return (
    <>
      <UpContainer>
          <Padding>Pronto para melhorar seu sono?</Padding>
          <Paddingh2>Clique aqui:  <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Quero%20melhorar%20seu%20sono!" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-warning">Quero melhorar meu sono!</button></a></Paddingh2>
      </UpContainer>

      <Junta>
        <Container>
            <Image src={Local} alt="" />
            <Help>Find us</Help>
            <Image src={Phone} alt="" />
            <Help>Call us</Help>
            <Image src={Mail} alt="" />
            <Help>Mail us</Help>
        </Container>
      </Junta>
            <Linha />
    </>
  );
}

export default Rodape;
