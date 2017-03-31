import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HearthstoneCard } from './hearthstone-card'
import { SecureRandomNumberService } from './secure-random-number.service'
import 'rxjs/add/operator/map';

var colorsJson = require('../../node_modules/material-colors-json/colors.json')

@Injectable()
export class RandomItemService {

  constructor(private http: Http, private randomNumberService: SecureRandomNumberService) { 
    // Load in the hearthstone file if not initialized
    if(this._hearthstoneCardsJson == undefined) {
      this._hearthstoneCard$.subscribe(
        requestData => {
          this._hearthstoneCardsJson = requestData;
        },
        // handle the error
        error => console.log(error)
      );
    }
  }

  // Currently supported items for item generation
  validItems: string[] = [
      '\\bcoin[s]?\\b', // Coins
      '\\bd[0-9]+\\b', // Dice
      '\\bcolor[s]?\\b', // Colors
      '\\bhoroscope[s]?\\b', // Horoscopes
      '\\bhs_card[s]?\\b' // Hearthstone Cards
  ];
  validItemRegExp: RegExp = new RegExp(this.validItems.join("|"), "i");


  private hearthstoneUrl: string = "https://api.hearthstonejson.com/v1/17994/enUS/cards.collectible.json"

  private _hearthstoneCard$: Observable<HearthstoneCard[]> = this.http.get(this.hearthstoneUrl).map(res => res.json());
  private _hearthstoneCardsJson: HearthstoneCard[];

  randomItem(item: string, quantity: number): string {
    var itemResult: string = item + ": | ";

    // Set upper bound of rolls to be 500
    if(quantity > 500) {
      return item + " error: The max limit for any object is 500 results, please try again\n";
    }

    // Dice roll 
    if(item[0]=='d') {
      var count: number = 0;
      let diceValue:number = parseInt(item.substr(1));
      if(isNaN(diceValue)) {
        return item + " error: Not a valid dice value";
      } 
      if(diceValue > 65536) {
        return item + " error: Choose a dice value that is less than 2^16";
      }

      var randomDiceRolls: Uint16Array = this.randomNumberService.getRandomIntegerList(1,diceValue,quantity)
      randomDiceRolls.forEach(roll => {
        itemResult += roll + ' | ';
        count += roll;
      });

      if(quantity > 1) {
        itemResult += "\n\t The sum of "+ quantity + " " + item + "s is " + count;
      } else {
        itemResult += "\n\t The sum of "+ quantity + " " + item + " is " + count;
      }
    }
    // Color
    else if(item.substr(0,5) == "color") {
      // Colors from Google's Material Design color palette 
      // Imported using npm i material-colors-json
      var colorsArray: string[] = Object.keys(colorsJson);

      var randomColorIndexes: Uint16Array = this.randomNumberService.getRandomIntegerList(0,colorsArray.length-1,quantity)
      randomColorIndexes.forEach(index => {
        itemResult += colorsArray[index] + ' | ';
      });
    }
    // Coin flip
    else if(item.substr(0,4) == "coin") {
      var heads: number = 0, tails : number = 0;
      var coinFlips: Uint16Array = this.randomNumberService.getRandomIntegerList(0,1,quantity)
      coinFlips.forEach(flip => {
        if(flip) {
          itemResult += "Head | "; 
          heads++;
        } else {
          itemResult += "Tail | ";
          tails++;
        }
      }); 
      itemResult += "\n\t Heads: " + heads + " | Tails: " + tails;
    }
    // Horoscopes
    else if(item.substr(0,9) == "horoscope") {
      const horoscopes: string[] = ['Aries','Taurus','Gemini','Cancer','Leo',
        'Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

      var randomHoroscopeIndexes: Uint16Array = this.randomNumberService.getRandomIntegerList(0,horoscopes.length-1,quantity);
      randomHoroscopeIndexes.forEach(index => {
        itemResult += horoscopes[index] + ' | ';
      });
    }
    // Hearthstone cards
    else if(item.substr(0,7) == "hs_card") {
      var randomHoroscopeIndexes: Uint16Array = this.randomNumberService.getRandomIntegerList(0,this._hearthstoneCardsJson.length-1,quantity);
      randomHoroscopeIndexes.forEach(index => {
        itemResult += this._hearthstoneCardsJson[index].name + ' | ';
      });
    }
    // Other stuff to do
    else {
    }

    // Add last new line 
    itemResult += "\n"
    return itemResult;
  }

  // Parse a user input string for objects to randomly generate
  // Returns a map of objects, and their quantities for RNG 
  parseString(inputString: string): Map<string,number> {
    //var map: { [type: string]: number; } = {};

    var map: Map<string,number> = new Map<string,number>();

    // Convert string to lower case and split by comma delimiter
    inputString = inputString.toLowerCase();
    var items: string[] = inputString.split(',');

    for(const itemString of items) {
      // Boolean flags for successful parsing of string
      var foundValidItem: boolean = false;
      var foundValidQuantity: boolean = false;

      // Item
      var item: string;
      var quantity: number;

      // Split string into words
      var keywords : string[] = itemString.split(' ');
      // Remove empty string elements
      keywords = keywords.filter(v=>v!='');

      // As a start, make sure only one or two words are found
      if(keywords.length >= 1 && keywords.length <= 2) {

        // Attempt to parse for a validItem
        // If more than one is found, the input is invalid
        for(const keyword of keywords) {
          if(keyword.match(this.validItemRegExp)) { 
            // If you already looped over a valid item, this input becomes invalid
            if(foundValidItem) {
              foundValidItem = false;
              break;
            }
            foundValidItem = true;
            // Keep track of the item
            item = keyword;
            // Remove item from keywords
            var index: number = keywords.indexOf(item,0);
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
            // If the value is not a number or is not a positive number
            if(quantity == NaN || quantity <= 0) {
              foundValidQuantity = false;
            } else {
              foundValidQuantity = true;
            }
          }
        }

        if(foundValidItem && foundValidQuantity) {
          if(map.has(item)) {
            map.set(item, map.get(item)+quantity);
          } else {
            map.set(item,quantity);
          }
        } 
      }
    }
    return map;
  }

  generateItems(itemMap: Map<string,number>): string {
    var result: string = "";
    itemMap.forEach((value: number, key: string) => {
      //result += key + ": " + value + "\n";
      result += this.randomItem(key, value);
    });

    return result;
  }

  // Get Hearthstone Cards into cached replay subject
  /* getHearthstoneData(refresh?: boolean) {
    if (!this._hearthstoneCard.observers.length || refresh) {
      this.http.get(this.hearthstoneUrl)
      .map(res => res.json())
      .subscribe(
        data => { console.log("Getting data..."); this._hearthstoneCard.next(data)},
        error => {
          this._hearthstoneCard.error(error);
          this._hearthstoneCard = new ReplaySubject(1);
        }
      );
    }

  } */



}
