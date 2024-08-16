const accountId= 101
let accountEmail = "ritik@google.com"
var accountPassword = "12345"
accountCity = "Doon"  //can be done,but don't use
let accountState;   //it will show undefined as output

//const can't be changed throughout the program
//accountId = 200

accountEmail = "hc@gmail.com"
accountPassword = "11111"
accountCity = "delhi"

console.log(accountId);

/**
 * prefer not to use var
 * because of issue in block and function scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
