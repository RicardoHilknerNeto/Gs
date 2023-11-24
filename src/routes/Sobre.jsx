
import styled from "styled-components"
import { useState } from 'react';
import Image from "../assets/img/acordandosaudavel.png"
import AssinaturaR from "../assets/img/AssinaturaR.png"


const Body = styled.div`
    display: flex;
`


const Container = styled.div`
    width: 50%;
    height: 80vh;

    margin-top: 3%;
`
const Container2 = styled.div`
    width: 50%;
    height: 80vh;
    margin-top: 3%;
`

const P = styled.p`
    color: black;
    padding: 0 1em
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    margin-top: 4%;
    text-decoration: underline;
    color: black;
`
const Assinaturas = styled.div`
    width: 100%;
    height: 20vh;

`
const ImageAssina = styled.img`
    margin: 0 7%;
`
const Nome1 = styled.h3`
    position: relative;
    right: 20%;
    top: 0.3em;
    text-decoration: underline;
    color: black;
`
const Nome2 = styled.h3`
    position: relative;
    left: 20%;
    bottom: 1.2em;
    text-decoration: underline;
    color: black;
`


export default function Sobre(){
    return(
        <>
        <Body>
            <Container>
                <Title>Nossa Historia</Title>
                <P>Ricardo e Bernardo, dois alunos talentosos da Faculdade FIAP, embarcaram em um projeto inovador com foco na melhoria da qualidade do sono de seus usuários. Conscientes do impacto significativo que uma boa noite de sono tem na saúde e no bem-estar, eles desenvolveram um sistema inteligente para coletar e analisar dados durante o sono, visando fornecer informações valiosas aos usuários.</P>
                <P>O projeto de Ricardo e Bernardo se baseia em tecnologias avançadas de monitoramento do sono, utilizando sensores e dispositivos conectados para registrar uma série de informações enquanto a pessoa dorme. Esses dados são processados por algoritmos sofisticados, capazes de identificar padrões, avaliar a qualidade do sono e até mesmo detectar possíveis problemas ou distúrbios do sono.</P>
                <P>O sistema não se limita apenas a coletar dados básicos, como o tempo de sono. Ele vai além, fornecendo insights detalhados sobre a qualidade do sono, fases do sono (como REM e não-REM), frequência cardíaca, movimentos corporais, padrões de respiração e até mesmo possíveis interrupções durante a noite, como ronco ou mudanças bruscas na posição do corpo.</P>
                <P>A interface intuitiva e amigável desenvolvida por Ricardo e Bernardo permite que os usuários acessem facilmente essas informações. Além disso, o sistema oferece sugestões personalizadas para melhorar o sono, como ajustes na rotina antes de dormir, recomendações de ambiente adequado para o sono ideal e até mesmo possíveis consultas médicas caso o sistema identifique problemas que necessitem de atenção especializada.</P>
                <P>O diferencial desse projeto está na capacidade de não apenas monitorar o sono, mas também de educar e capacitar os usuários a melhorar sua saúde e qualidade de vida por meio de um sono mais restaurador e benéfico.</P>         
                <P>Ricardo e Bernardo estão entusiasmados com o impacto positivo que seu projeto pode ter na vida das pessoas, proporcionando não apenas um sono de melhor qualidade, mas também conscientizando sobre a importância desse aspecto fundamental para a saúde. Com a dedicação e o conhecimento que possuem, estão transformando a forma como as pessoas encaram e cuidam do seu sono.</P>   
                <Assinaturas>
                    <ImageAssina src={AssinaturaR} alt="" />
                    <ImageAssina src={AssinaturaR} alt="" />
                    <Nome1>Ricardo Hilkner</Nome1>
                    <Nome2>Bernardo</Nome2>
                </Assinaturas>
            </Container>
            <Container2>
                <Img src={Image} alt="" />
            </Container2>
        </Body>
        </>
    )
}