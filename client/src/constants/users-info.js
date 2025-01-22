import { v4 } from 'uuid';

export const USERS_INFO = {
	macarena: {
		name: 'Macarena',
		city: 'Gijón',
		pets: [
			{ id: v4(), name: 'gato' },
			{ id: v4(), name: 'perro' },
			{ id: v4(), name: 'mono' }
		]
	},
	xavi: {
		name: 'Xavi',
		city: 'Lima',
		pets: [
			{ id: v4(), name: 'loro' },
			{ id: v4(), name: 'cacatua' }
		]
	},
	diego: {
		name: 'Diego',
		city: 'Bogotá',
		pets: [
			{ id: v4(), name: 'serpiente' },
			{ id: v4(), name: 'perro' }
		]
	}
};
