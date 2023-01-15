//1. binding alias
import { a as aAlias } from "./export.js";
console.log(aAlias);

import { cAlias } from "./export.js";
console.log(cAlias);

//2. Re-exporting a binding
//export {obj} from "./export.js"; 과 동일
import * as obj from "./export.js";
export { obj };

//3. Re-exporting a binding with new alias
//export { obj as objjjj } from './xxxxx.js';
