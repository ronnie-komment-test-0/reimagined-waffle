/**
 * @description This function calculates the number of set bits (i.e., ones) at all
 * the leading significant positions within an integer parameter a; then returns this
 * count to the user.
 * 
 * @param { integer } a - In this function "a" is the binary number on which the count
 * of set bits will be performed. It's treated as an integer and its possible values
 * are any of the integer value between 0 to 2^31 ( for 32-bit platform).
 * 
 * @returns { number } This function counts the number of set bits an integer possesses.
 * Specifically the function adds up all ones placed within the binary representation
 * of the integer. For example if we call the function with a=7; we expect a response
 * of three since seven as a binary string looks like this '111' so it has three set
 * bits..  The return type for the above described function is integer so we know to
 * expect an integer response. Furthermore because only integers are allowed as input
 * anecord thrown at us if any non integral argument (i.e Floats) or NaN(not a number
 * )value are supplied
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
