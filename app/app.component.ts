import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
			<nav></nav>
			<h1>{{ title }}</h1>
		`
})
export class AppComponent {
	title = 'Hello world'
}