export class NoDataFoundError extends Error {
	constructor() {
		super('Nenhum dado encontrado')
	}
}
