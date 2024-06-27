import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserId } from "../../../services/api-users";
import { Cabecalho, Perfil } from "./styles";

export const Header = () => {
	const [name, setName] = useState("");
	const { id } = useParams();

	async function getUser() {
		try {
			const response = await getUserId(id);
			const nome = response.data.nome;
      console.log(response);
			setName(nome);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<Cabecalho>
			<h1>Monitoramento</h1>
			<Perfil>
				<h2>Bem vindo, {name}!</h2>
			</Perfil>
		</Cabecalho>
	);
};
