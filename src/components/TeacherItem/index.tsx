import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars2.githubusercontent.com/u/36903042?s=460&v=4" alt="Leandro Neves"/>
				<div>
					<strong>Leandro Neves</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Lorem Ipsum
				<br />
				Lorem Ipsum
			</p>
			<footer>
				<p>
					Preço/Hora
					<strong>R$100,00</strong>
				</p>
				<button type="button">
					<img src={ whatsappIcon } alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;