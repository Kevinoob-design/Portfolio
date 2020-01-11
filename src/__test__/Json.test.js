//jshint esversion:6

// import { jsonData } from "../Components/Body/BodyComponents/ChartComponent";
import equalJson from "../Components/Body/Model/Skills.json";

const functions = require("../Components/Body/BodyComponents/ChartComponent");

beforeEach(( () => logData()));

function logData(){
    // console.table(functions.getJsonData());

    equalJson.map(element => {
        console.table(element);
    })
}

test("Checking the JSON Data", () => {

    expect.assertions(1);
    return expect(functions.getJsonData()).toEqual(equalJson);
});