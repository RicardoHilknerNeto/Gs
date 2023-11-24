import styled from "styled-components"
import fundo from "../assets/img/dormir-bem.jpg"
import "../assets/scss/Corpo.scss"
import { Link } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import oitoHoras from "../assets/img/oitohoras.png"
import beneficio2 from "../assets/img/beneficiosimage.jpg"

import Usuario1 from "../assets/img/Usuario1.png"

import Card from 'react-bootstrap/Card';

export const Container = styled.div`
background-image: url(${fundo});
background-size: cover;
background-position: center;
padding: 10rem 0;
`

const Barra = styled.div`
    width: 100%;
    height: 10vh;
    background-color: black;
    opacity: 0.8;
    margin-top: 25%;
`
const BeneficiosTitle = styled.h1`
    padding: 1.2%;
    color: white;
`
const BeneficiosP = styled.p`
    position: relative;
    bottom: 30px;
`
const ContainerBeneficio = styled.div`
    width: 100%;
    height: 20vh;
    background-color: black;
`
const ImgBeneficios = styled.img`
    position: relative;
    right: 42%;
    top: 15%;
    width: 250px;
    border: 4px solid orange;
`
const ImgBeneficiosReverse = styled.img`
    position: relative;
    left: 42%;
    top: 15%;
    width: 250px;
    border: 4px solid orange;
`
const Text = styled.p`
    position: relative;
    bottom: 70px;
    padding: 0 20%;
`
const LinhaBeneficio = styled.div`
    width: 80%;
    height: 2px;
    background-color: orange;
    position: relative;
    bottom: 40px;
`
const LinhaBeneficioReverse = styled.div`
    width: 80%;
    height: 2px;
    background-color: orange;
    position: relative;
    bottom: 40px;
    left: 20%;
`
const BarraAvaliacao = styled.div`
    width: 100%;
    height: 10vh;
    background-color: black;
    opacity: 0.8;
    margin-top: 0.5%;
`
const Body = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function Home(){
    return(
        <>
            <div className="Container">
                <main>
                    <Container className='main-banner'>
                        <p>Um sono tranquilo é a sinfonia do bem-estar. O monitoramento cuidadoso dos hábitos de sono é a partitura que regula a harmonia do descanso, permitindo que o corpo e a mente se reconstruam. Valorize o monitoramento para desfrutar das melodias revigorantes de uma noite reparadora.</p>
                        <Link to="/sobre" className="Link">
                        <button className="btn-about">
                            Saiba mais!
                        </button>
                        </Link>
                    </Container>
                </main>
            </div>

            <Carrousel />

            <Barra>
                <BeneficiosTitle>Benefícios</BeneficiosTitle>
                <BeneficiosP>Tenha um sono mais profundo e revitalizante.</BeneficiosP>
            </Barra>
            <ContainerBeneficio>
                <ImgBeneficios src={oitoHoras} alt="" />
                <Text>Você sabia que poderá viver mais se dormir bem? Esse é o sonho de todas as pessoas: viver muitos anos de vida, não é verdade? Para isso, você precisa adotar um estilo de vida saudável. E isso inclui dormir bem. Pessoas que dormem demais ou que dormem pouco têm uma longevidade menor. De acordo com vários estudos, o tempo ideal dedicado ao sono por noite para um adulto deve ser de 7 ou 8 horas.</Text>
                <LinhaBeneficio />
            </ContainerBeneficio>
            <ContainerBeneficio>
                <ImgBeneficiosReverse src={beneficio2} alt="" />
                <Text>Pessoas que dormem pouco têm altos níveis de proteínas inflamatórias no sangue. Nesse sentido, a inflamação é conhecida por estar ligada a muitas doenças, como artrite, ataque cardíaco e diabetes.

Além disso, com uma boa dose de sono, você verá suas defesas imunológicas aumentarem consideravelmente, reduzindo, como resultado, as inflamações.

A falta de sono também pode levar a um aumento da pressão arterial,  dor de cabeça e a uma sensação de mal-estar geral.</Text>
                <LinhaBeneficioReverse />
            </ContainerBeneficio>
            <ContainerBeneficio>
                <ImgBeneficios src={oitoHoras} alt="" />
                <Text>Você sabia que poderá viver mais se dormir bem? Esse é o sonho de todas as pessoas: viver muitos anos de vida, não é verdade? Para isso, você precisa adotar um estilo de vida saudável. E isso inclui dormir bem. Pessoas que dormem demais ou que dormem pouco têm uma longevidade menor. De acordo com vários estudos, o tempo ideal dedicado ao sono por noite para um adulto deve ser de 7 ou 8 horas.</Text>
                <LinhaBeneficio />
            </ContainerBeneficio>

            <BarraAvaliacao>
                <BeneficiosTitle>Avaliações</BeneficiosTitle>
            </BarraAvaliacao>
            <Body>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Usuario1} />
                <Card.Body>
                    <Card.Title>Lucas Felipe</Card.Title>
                    <Card.Text>
                    Eu sempre tive problemas para dormir, mas desde que comecei a usar esse monitor de sono, minha vida mudou! Ele me dá uma visão detalhada do meu sono e sugestões para melhorá-lo. Recomendo totalmente!
                    <p>⭐⭐⭐⭐⭐</p>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Usuario1} />
                <Card.Body>
                    <Card.Title>Maria S</Card.Title>
                    <Card.Text>
                    É um ótimo dispositivo para acompanhar meu sono. Gosto das estatísticas e do resumo matinal que recebo. Às vezes, as sugestões de melhoria são um pouco genéricas, mas ainda assim ajudam.
                    <p>⭐⭐⭐⭐⭐</p>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Usuario1} />
                <Card.Body>
                    <Card.Title>Pedro M.</Card.Title>
                    <Card.Text>
                    Estou impressionada com a precisão deste produto! Ele rastreia até os pequenos detalhes do meu sono. É incrível acordar e ver como dormi durante a noite. Definitivamente, me ajudou a entender melhor meus padrões de sono
                    <p>⭐⭐⭐⭐⭐</p>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Usuario1} />
                <Card.Body>
                    <Card.Title>Ana R.</Card.Title>
                    <Card.Text>
                    Eu tive problemas de conectividade com o aplicativo no início e a precisão dos dados pareceu um pouco duvidosa. Às vezes, não refletia bem minha noite de sono. Esperava mais pelo preço
                    <p>⭐⭐⭐</p>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Usuario1} />
                <Card.Body>
                    <Card.Title>Rafael L.</Card.Title>
                    <Card.Text>
                    Adoro a interface amigável e os lembretes para manter uma rotina de sono consistente. A análise dos estágios do sono é muito útil para ajustar meu horário de dormir. Recomendo para quem quer melhorar a qualidade do sono!
                    <p>⭐⭐⭐⭐⭐</p>
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </Body>

                
        </>
    )
}