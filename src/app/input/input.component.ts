import { Component, OnInit } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { RandomItemService } from '../random-item.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  entryComponents: [ResultComponent],
  providers: [RandomItemService]
})
export class InputComponent implements OnInit {
	
	// Stores the value of the current string
	inputString: string;

	// Stores the value of the results, which is binded to ResultComponent using @Input
	results: string;

  constructor(private _randomItemService: RandomItemService) { }

	submit(input : string): void {
		this.inputString = input;

		// Parse the string for valid items 
		let itemMap: Map<string,number> = this._randomItemService.parseString(this.inputString);

		// Generate the random assignments for items and print it
		this.results = this._randomItemService.generateItems(itemMap);
	}

  ngOnInit() {
  }

}
