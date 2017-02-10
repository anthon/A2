import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'nav',
	template: `
		<ul>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
		</ul>
	`
})

export class NavComponent implements OnInit {
	constructor() { }
	ngOnInit() {
		
	}
}