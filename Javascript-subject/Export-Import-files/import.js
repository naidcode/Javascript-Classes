
import { add , multi , name }  from "./export.js";
import nahid from "./logging.js"




console.log(add(2,3))
console.log(multi(4,8))
console.log(name)


//Default exports are like: "this is the main thing I want to give from this file".
// You don’t need {} around them when importing.
nahid("hello logging ");