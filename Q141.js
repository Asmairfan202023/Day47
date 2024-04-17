"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Question141:Discuss the significance of the await reserved word in asynchronous JavaScript.
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url); // Await the Promise returned by fetch
        const data = yield response.json(); // Await the Promise returned by response.json()
        return data;
    });
}
console.error("Error fetching data:", Error);
throw Error; // Propagate the error if needed
// Example usage
fetchData("https://github.com/Asmairfan202023/Day46");