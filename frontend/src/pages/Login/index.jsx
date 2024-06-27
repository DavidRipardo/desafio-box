import React, { useState } from "react";
import { Password } from "primereact/password";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import imglogin from "/src/assets/login.png";
import imglogo from "/src/assets/logo.png";
import imgesqueceusenha from "/src/assets/esqueceusenha.png";

// Importe os estilos específicos do seu projeto, por exemplo:
import {
	BrandImage,
	Checkbox,
	ContentContainer,
	Copyright,
	Footer,
	FooterLink,
	FooterLinks,
	ForgotIcon,
	ForgotPassword,
	ForgotText,
	FormHeader,
	ImageColumn,
	ImageWrapper,
	LoginButton,
	LoginColumn,
	LoginForm,
	Logo,
	LogoText,
	LogoWrapper,
	PageWrapper,
	RememberMe,
	RememberText,
	SubText,
	WelcomeText,
	TextInput,
} from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const navigate = useNavigate(); // Usando useNavigate

	async function handleSubmit(event) {
		event.preventDefault();
		const data = { email, senha };
		try {
			const response = await api.post("/auth", data);
			const id = response.data.user.id;
			navigate(`/dashboard/${id}`);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<PageWrapper>
			<ContentContainer>
				<ImageColumn>
					<ImageWrapper>
						<BrandImage loading="lazy" src={imglogin} alt="Logo" />
					</ImageWrapper>
				</ImageColumn>
				<LoginColumn>
					<LoginForm onSubmit={handleSubmit}>
						<FormHeader>
							<LogoWrapper>
								<Logo loading="lazy" src={imglogo} alt="Login logo" />
								<LogoText>Tela de login</LogoText>
							</LogoWrapper>
							<WelcomeText>Bem vindo!</WelcomeText>
							<SubText>Faça login para entrar no dashboard.</SubText>
						</FormHeader>

						<div style={{ position: "relative" }}>
							{/* Input de e-mail */}
							<TextInput
								type="text"
								placeholder="Usuário"
								name="senha"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								style={{ paddingLeft: "2.5rem" }}
							/>
						</div>

						<div style={{ position: "relative" }}>
							<i
								className="pi pi-lock"
								style={{
									position: "absolute",
									top: "50%",
									left: "1rem",
									transform: "translateY(-50%)",
								}}
							/>
							{/* Input de senha com PrimeReact Password */}
							<Password
								name="senha"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								placeholder="Senha"
								inputStyle={{
									display: "flex",
									borderRadius: "50px",
									border: "1px solid #5867DD",
									backgroundColor: "#fff",
									paddingRight: "4px",
									padding: "15px 45px",
									paddingBottom: "20px",
									paddingLeft: "2.5rem",
									fontSize: "16px",
									width: "20vw",
									boxShadow: "none",
									outline: "none",
									transition: "border-color 0.3s ease-in-out",
								}}
								inputClassName="custom-password-input"
								className="p-password-input"
								onFocus={(e) => {
									e.target.style.borderColor = "#5867DD";
									e.target.style.boxShadow = "0 0 10px rgb(69, 89, 243)";
								}}
								feedback={false} // Desativa o feedback de força da senha
							/>
						</div>

						<RememberMe>
							<Checkbox />
							<RememberText>Lembrar-se</RememberText>
						</RememberMe>
						<LoginButton>
							ENTRAR <span className="icon-arrow"></span>
						</LoginButton>
						<ForgotPassword href="#">
							<ForgotIcon
								loading="lazy"
								src={imgesqueceusenha}
								alt="Forgot password icon"
							/>
							<ForgotText>Esqueceu a senha?</ForgotText>
						</ForgotPassword>
					</LoginForm>
					<Footer>
						<Copyright>
							<span className="highlight">© 2024 </span> | Todos os direitos
							reservados
						</Copyright>
						<FooterLinks>
							<FooterLink href="#">Privacidade</FooterLink>
							<FooterLink href="#">Termos</FooterLink>
							<FooterLink href="#">Contato</FooterLink>
						</FooterLinks>
					</Footer>
				</LoginColumn>
			</ContentContainer>
		</PageWrapper>
	);
};
