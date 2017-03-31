import { Injectable } from '@angular/core';

@Injectable()
export class SecureRandomNumberService {

  constructor() { }

  /** 
   * Generate a cryptographically secure random integer using rejection sampling
   * Requires use of browser's window.crypto.getRandomValues() implementation
   * 
   * @param min/max Min/max range for the random integer (inclusive)
   */
  getRandomInteger(min: number, max: number): number {
    // Create byte array and fill with 1 random number

    // Array of 16-bit unsigned integers
    var byteArray: Uint16Array = new Uint16Array(1);  
    window.crypto.getRandomValues(byteArray);

    var range: number = max - min + 1;
    var max_range: number = 65536;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return this.getRandomInteger(min, max); // Try again 
    return min + (byteArray[0] % range);
  }


   /** 
   * Generate a list of cryptographically secure random integers using rejection sampling
   * 
   * @param min/max: Min/max range for the random integer (inclusive)
   * @param size: How many numbers to generate
   */
  getRandomIntegerList(min: number, max: number, size:number): Uint16Array {
    // Create byte array and fill with random numbers

    // Array of 16-bit unsigned integers
    var byteArray: Uint16Array = new Uint16Array(size);  
    window.crypto.getRandomValues(byteArray);

    var range: number = max - min + 1;
    var max_range: number = 65536;

    for(let i=0; i<size; i++) {
      if (byteArray[i] >= Math.floor(max_range / range) * range) {
        byteArray[i] = this.getRandomInteger(min, max); // Rejection sampling 
      } else {
        byteArray[i] = min + (byteArray[i] % range);
      }
    }

    return byteArray;
  }

}
