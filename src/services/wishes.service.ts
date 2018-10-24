import { Injectable } from '@angular/core'
import { List } from '../models';

@Injectable()

export class WishesService {

	lists: List[] = [];

	constructor(){
		const list1 = new List('Recolectar piedras del infinito');
		const list2 = new List('Heroes a vencer');

		this.lists.push(list1, list2);
		
		console.log(this.lists);
	}
}