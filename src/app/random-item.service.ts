import { Injectable } from '@angular/core';

@Injectable()
export class RandomItemService {

  validItems = ['d4', 'd6', 'd10', 'd20', 'coin', 'color', 'horoscope'];

  parseString(inputString: string) : Map<string,number> {
    //var map : { [type: string]: number; } = {};

    var map : Map<string,number> = new Map<string,number>();

    // Convert string to lower case and split by comma delimiter
    inputString = inputString.toLowerCase();
    var items = inputString.split(',');

    for(let itemString of items) {
      // Boolean flags for successful parsing of string
      var foundValidItem: boolean = false;
      var foundValidQuantity: boolean = false;

      // Item
      var item: string;
      var quantity: number;

      // Split string into words
      var keywords = itemString.split(' ');
      // Remove empty string elements
      keywords = keywords.filter(v=>v!='');

      // As a start, make sure only one or two words are found
      if(keywords.length >= 1 && keywords.length <= 2) {

        // Attempt to parse for a validItem
        // If more than one is found, the input is invalid
        for(let keyword of keywords) {
          if(this.validItems.indexOf(keyword,0) >= 0) { 
            // If you already looped over a valid item, this input becomes invalid
            if(foundValidItem) {
              foundValidItem = false;
              break;
            }
            foundValidItem = true;
            // Keep track of the item
            item = keyword;
            // Remove item from keywords
            var index = keywords.indexOf(item,0);
            keywords.splice(index,1);
          }
        }

        // Then attempt to parse for a quantity
        // If no quantity can be found, assume 1
        if(foundValidItem) {
          // If the split array is now empty, assume 1 item
          if(keywords.length == 0) {
            quantity = 1;
            foundValidQuantity = true;
          } else if(keywords.length==1) {
            quantity = parseInt(keywords[0],10);
            if(quantity == NaN) {
              foundValidQuantity = false;
            } else {
              foundValidQuantity = true;
            }
          }
        }

        if(foundValidItem && foundValidQuantity) {
          map.set(item,quantity);
          //console.log("Map result: " + item + "," + quantity);
        } else {
          //console.log("No valid input found");
        }
      }
    }

    return map;
  }

  generateItems(itemMap: Map<string,number>) : string {
    var result = "";
    itemMap.forEach((value: number, key: string) => {
        //result += key + ": " + value + "\n";
    });

    return result;
  }

}
