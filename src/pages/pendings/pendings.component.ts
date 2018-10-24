import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models';

@Component({
	selector: 'page-pendigns',
	templateUrl: 'pendings.component.html'
})

export class PendingsPage {
	constructor(public wishesService: WishesService){
		
	}

	listSelected(list: List){
		console.log(list);
	}
}