import styled from "styled-components";

// Contêiner principal da página com display flex e orientação de coluna
export const PageWrapper = styled.div`
  display: flex;
  width: auto;
  background-color: #fff;
  flex-direction: column;
`;

// Contêiner para o conteúdo principal com display flex e gap entre os elementos
export const ContentContainer = styled.main`
  width: 90%;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

// Coluna para a imagem, que ocupa 79% da largura, ajustável em telas menores
export const ImageColumn = styled.section`
  display: flex;
  width: 78%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

// Wrapper para a imagem com bordas arredondadas, sem borda à esquerda, e fundo cinza claro
export const ImageWrapper = styled.div`
  position: relative;
  right: 42%;
  border-radius: 0 500px 500px 0;
  border: 1px solid #5867DD;
  width: 90vw;
  border-left: none;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 114px 70px;
  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`;

// Imagem da marca com proporção 1:1, ajustável para caber no contêiner
export const BrandImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  position: relative;
  left: 10%;
  width: 50%;
  max-width: 100%;
  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

// Coluna de login com display flex e orientação de coluna
export const LoginColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #5867dd;
  font-weight: 400;
  padding: 20px 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

// Formulário de login centralizado, com gap entre os elementos
export const LoginForm = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  top: 15%;
  right: 65%;
  width: 400px;
  gap: 10px;
  max-width: 100%;
  flex-direction: column;
  padding: 20px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

// Cabeçalho do formulário, centralizado
export const FormHeader = styled.header`
  text-align: center;
  justify-content: center;
`;

// Wrapper para o logo com display flex e gap entre o texto e a imagem
export const LogoWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-size: 18px;
  color: #000;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;

// Imagem do logo com proporção 1.1:1
export const Logo = styled.img`
  aspect-ratio: 1.1;
  object-fit: contain;
  width: 37px;
`;

// Texto do logo com fonte Montserrat
export const LogoText = styled.h1`
  font-family: Montserrat, sans-serif;
`;

// Texto de boas-vindas
export const WelcomeText = styled.h2`
  color: #000;
  font-size: 700 18px Nunito, sans-serif;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

// Subtexto com cor cinza e fonte Nunito
export const SubText = styled.p`
  color: #777;
  font-size: 15px Nunito, sans-serif;
`;

// Ícone de input com largura de 18px
export const InputIcon = styled.img`
  width: 18px;
  object-fit: contain;
`;

// Input de texto com bordas arredondadas e sombra ao focar
export const TextInput = styled.input`
  display: flex;
  border-radius: 50px;
  border: 1px solid #5867dd;
  background-color: #fff;
  width: 20vw;
  gap: 30px;
  padding: 15px 45px 20px 40px;
  padding-top: 20px;
  font-size: 16px;
  box-shadow: none;
  outline: none;
  &:focus-within {
    border-color: solid 2px #5867dd;
    box-shadow: 0 0 10px rgb(69, 89, 243);
  }
`;

// Ícone de senha posicionado à direita
export const PasswordIcon = styled.i`
  position: absolute;
  right: 77%;
  top: 59%;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: #5867dd;
`;

// Ícone de usuário posicionado à esquerda
export const UserIcon = styled.i`
  position: absolute;
  left: 18%;
  top: 45%;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: #5867dd;
`;

// Contêiner para a seção "Lembrar-me" com display flex e alinhamento ao centro
export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  padding-right: 200px;
  gap: 8px;
  margin: 5px 0;
`;

// Checkbox estilizado
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
`;

// Texto para a seção "Lembrar-me"
export const RememberText = styled.label`
  color: #000;
  font: 14px Nunito, sans-serif;
`;

// Botão de login com fundo azul, texto branco e bordas arredondadas
export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5867DD;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 50px;
  padding: 15px 100px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4559f3;
  }
`;

// Link para a seção "Esqueceu a senha?" com display flex e alinhamento ao centro
export const ForgotPassword = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  color: #5867DD;
  font: 14px Nunito, sans-serif;
`;

// Ícone para a seção "Esqueceu a senha?" com largura de 14px
export const ForgotIcon = styled.img`
  width: 14px;
`;

// Texto para a seção "Esqueceu a senha?"
export const ForgotText = styled.span`
  font: 14px Nunito, sans-serif;
`;

// Rodapé com display flex e justificação entre os itens
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  right: 50%;
  align-items: center;
  top: 18%;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Texto de copyright
export const Copyright = styled.span`
  font-size: 16px;
  position: relative;
  width: 20vw;
  right: 75%;
  color: #777;
  .highlight {
    color: #5867DD;
  }
`;

// Contêiner para os links do rodapé com display flex e gap entre os itens
export const FooterLinks = styled.div`
  display: flex;
  position: relative;
  right: 35%;
  gap: 20px;
`;

// Links do rodapé com cor azul e sublinhado ao passar o mouse
export const FooterLink = styled.a`
  text-decoration: none;
  color: #5867DD;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
