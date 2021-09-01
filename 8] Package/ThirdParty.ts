/* > In this program we will see how to use a third party library "Lodash" in a program.
   > To download and install Lodash use following command - 

     npm install  lodash --save

   + The above command will do following things :

   > Download the lodash library in our application (node_module folder).
   > Make an entry in package.json file inside "dependencies" section
   > Will create a new file called "package-lock.json"

*/

// Importing lodash as lod. As lodash is in node_modules folder so we don't need to specify any directory to import.
import * as lod from 'lodash';

let arr:number[]=[10,3,6,2,78,11];

// Using reverse property from lodash.
console.log(lod.reverse(arr));

