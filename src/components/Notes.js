import React, {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {AlertContext} from "../context/alert/alertContext";

export const Notes = ({notes}) => {

	const {removeNote} = useContext(FirebaseContext)

	const alert = useContext(AlertContext)

	const onRemove = (id) => {
		removeNote(id)
		alert.show('Note deleted', 'success')
	}

	return (
		<ul className="list-group">
			{notes.map(note => (
				<li
					className="list-group-item note"
					key={note.id}
				>
					{note.title}
					<button
						className="btn btn-outline-danger btn-sm"
						onClick={() => {onRemove(note.id)}}
					>
						&times;
					</button>
				</li>
			))}
		</ul>
	)
}