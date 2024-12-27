import Gemini from "gemini-ai";
const API_KEY = "AIzaSyDgFXKfoTSFXBFbUlCv_fOSitQZOGeTEeo"; 
const gemini = new Gemini(API_KEY);

console.log(await gemini.ask("who is virat kohli"));