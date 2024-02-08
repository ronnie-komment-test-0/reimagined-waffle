

/**
 * @description This function calculates the number of set bits on a binary number
 * 'a'.  It does this by iterating over each bit by doing (a-1)&a till a equals 0
 * 
 * @param { integer } a - The input "a" is used as a number on which to perform a
 * bitwise operation (AND).
 * 
 * @returns { integer } This function takes an integer "a" as input and returns the
 * number of set bits it has.
 * The function works by using the fact that each bit position within a binary
 * representation is either zero or one; thus any non-zero value remaining after doing
 * the operation "a & ~a" indicates the existence of a 1-bit. A bit position having
 * the corresponding value as one represents a 1-set bit; therefore count increased
 * when we pass that value.
 * 
 * Since it continues until a becomes zero and the sole condition to break the loop
 * is whether "a" equals zero because there will no longer be any 1-set bits; therefore
 * count returned simply reveals how many bits of the initial input were one/set
 * during the operation
 */
function BinaryCountSetBits(a) {
  'use strict'

  if (!Number.isInteger(a)) throw new TypeError('Argument not an Integer')

  let count = 0
  while (a) {
    a &= a - 1
    count++
  }

  return count
}

export { BinaryCountSetBits }
