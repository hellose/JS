//1번
import sort, { heapSort } from "./sort.js";
//import  { heapSort },sort from "./sort.js"; -> 에러 default export가 먼저나와야함
sort();
heapSort();

//1번과 동일
// import { default as quicksort, heapSort } from "./sort.js";
// quicksort();
// heapSort();
