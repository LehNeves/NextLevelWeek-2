import React from "react";

import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export interface Teacher {
	avatar : string;
	bio : string;
	cost : number;
	id : number;
	name : string;
	subject : string;
	user_id : string;
	whatsapp : string;
}

interface TeacherItemProps {
	teacher : Teacher;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	const createNewConnection = () => {
		api.post('connections', {
			user_id : teacher.id
		});
	 }
	
	return (
		<article className="teacher-item">
			<header>
				<img src={ teacher.avatar } alt="Leandro Neves"/>
				<div>
					<strong>{ teacher.name }</strong>
					<span>{ teacher.subject }</span>
				</div>
			</header>

			<p>{ teacher.bio }</p>
			<footer>
				<p>
					Preço/Hora
					<strong>R$ { teacher.cost }</strong>
				</p>
				<a 
					onClick={ createNewConnection } 
					href={`https://wa.me/${teacher.whatsapp}`} 
					target="_blank"
					rel="noopener noreferrer"
					>
					<img src={ whatsappIcon } alt="Whatsapp"/>
					Entrar em contato
				</a>
			</footer>
		</article>
	);
}

export default TeacherItem;