import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITab {
	id: number;
	nombre: string;
}

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	@Input() tabs: ITab[] = [];
	@Output() obtenerTabElegido: EventEmitter<ITab> = new EventEmitter<ITab>();
	public tabIdSeleccionado: number = 1;

	constructor() { }

	ngOnInit(): void {
		if(this.tabs.length > 0){
			this.seleccionarTab(this.tabs[0]);
		}
	}

	// 

	public seleccionarTab(tab: ITab): void
	{
		this.tabIdSeleccionado = tab.id;
		this.obtenerTabElegido.emit(tab);
	}

}
