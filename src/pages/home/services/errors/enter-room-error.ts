export class EnterRoomError extends Error {
	constructor() {
		super('Sala não encontrada ou não disponível')
	}
}
