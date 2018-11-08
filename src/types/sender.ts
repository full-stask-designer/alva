import * as Message from '../message';

export interface Sender {
	match<T extends Message.Message>(
		type: Message.Message['type'],
		handler: (message: T) => void
	): Promise<void>;

	send(message: Message.Message): void;

	pass(envelope: string): void;
}