
import styled from "styled-components"
import { useState } from 'react';
import FiapLogo from "../assets/img/fiaplogo.png"
import Hapvida from "../assets/img/hapvida.png"

const Body = styled.div`
    display: flex;
`

const Container = styled.div`
    width: 50%;
    height: 80vh;
    margin-top: 3%;
`
const Container2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 15% 0;
    width: 50%;
    height: 80vh;
    margin-top: 3%;
    `
const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`
const Title = styled.h1`
    margin-top: 3em;
`
const StyledParagraph = styled.p`
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export default function Parceiros(){
    return(
        <>
        <Body>
            <Container>
               <Title>Nossos Parceiros</Title>
               <StyledParagraph>
                    <p>A parceria entre a Faculdade de Tecnologia FIAP e o Hospital Hapvida NotreDame representa um elo poderoso entre a excelência acadêmica e a inovação na área da saúde. Essa colaboração estratégica entre duas instituições de renome tem gerado impactos significativos tanto no ensino quanto na prática médica.</p>
                    <p>A FIAP, reconhecida por sua qualidade de ensino em tecnologia, e o Hospital Hapvida NotreDame, referência na prestação de serviços de saúde, unem forças para proporcionar aos estudantes oportunidades únicas de aprendizado prático e imersão no ambiente profissional.</p>
                    <p>Os alunos da FIAP têm acesso privilegiado a estágios, projetos de pesquisa e programas de capacitação dentro das instalações do Hospital Hapvida NotreDame. Essa vivência prática permite que os futuros profissionais de tecnologia entendam as necessidades reais do setor de saúde e desenvolvam soluções inovadoras e tecnologicamente avançadas para aprimorar os serviços oferecidos.</p>
                    <p>Por sua vez, o Hospital Hapvida NotreDame se beneficia da expertise e criatividade dos estudantes da FIAP, que trazem consigo novas perspectivas e ideias disruptivas para aprimorar processos, sistemas e dispositivos médicos, contribuindo assim para a melhoria contínua dos cuidados prestados aos pacientes.</p>
                    <p>Essa parceria não apenas fortalece o aprendizado dos alunos, mas também impulsiona a inovação no setor de saúde, promovendo um ciclo de colaboração que beneficia a comunidade acadêmica, os profissionais de saúde e, principalmente, os pacientes.</p>
                    <p>O compromisso conjunto da FIAP e do Hospital Hapvida NotreDame em promover o desenvolvimento acadêmico e tecnológico, aliado à prestação de serviços de saúde de alta qualidade, destaca a importância da sinergia entre a educação e o setor privado para impulsionar avanços significativos em benefício da sociedade.</p>
               </StyledParagraph>

            </Container>
            <Container2>
                <a href="http://fiap.com.br" target="_blank" rel="noopener noreferrer"><Image src={FiapLogo} alt="" /></a>
                <a href="https://www.hapvida.com.br/site/" target="_blank" rel="noopener noreferrer"><Image src={Hapvida} alt="" /></a>
            </Container2>
        </Body>
        </>
    )
}