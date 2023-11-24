import styled from "styled-components";
import Coracao from "../assets/img/heart-outline.svg"
import Opcoes from "../assets/img/options.svg"
import Senha from "../assets/img/password-outline.svg"
import Olho from "../assets/img/eye-outline.svg"
import Registro from "../assets/img/register-outline.svg"
import Outro from "../assets/img/other-1-outline.svg"

const Body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: lightblue;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Cards = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 20px; /* Espaçamento entre os cartões */
`;

const Card = styled.div`
    height: 200px;
    background-color: #35bbe7;
`;
const Image = styled.div`
    width: 100%;
    height: 50%;
    background-color: #35bbe7;
`
const Img = styled.img`
    width: 30%;
`
const Mensagem = styled.p`
    position: relative; 
    top: 20px;
    font-size: 24px;
    font-weight: bold;
`

function Suporte() {
    return (
        <Body>
            <Title>Como podemos te ajudar?</Title>
            <Cards>
               <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Dificuldades%20T%C3%A9cnicas%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                        <Img src={Opcoes} alt="" />
                    </Image>
                    <Mensagem>Dificuldades Técnicas</Mensagem>
                </Card></a>
                <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Esqueci%20a%20senha%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                    <Img src={Senha} alt="" />
                    </Image>
                    <Mensagem>Esqueci a senha</Mensagem>
                </Card></a>
                <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Problemas%20de%20Acessibilidade%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                    <Img src={Olho} alt="" />
                    </Image>
                    <Mensagem>Problemas de Acessibilidade</Mensagem>
                </Card></a>
                <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Feedback%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                    <Img src={Coracao} alt="" />
                    </Image>
                    <Mensagem>Feedback</Mensagem>
                </Card></a>
                <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Login%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                    <Img src={Registro} alt="" />
                    </Image>
                    <Mensagem>Login</Mensagem>
                </Card></a>
                <a href="https://api.whatsapp.com/send?phone=5511943252312&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre:%20Outro%0A%0A" target="_blank" rel="noopener noreferrer"><Card>
                    <Image>
                    <Img src={Outro} alt="" />
                    </Image>
                    <Mensagem>Outro</Mensagem>
                </Card></a>
            </Cards>
        </Body>
    );
}

export default Suporte;
