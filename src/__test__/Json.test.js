//jshint esversion:6

import { jsonData } from "../Components/Body/BodyComponents/ChartComponent";
import equalJson from "../Components/Body/Model/Skills.json";

beforeEach(( () => logData()));

function logData(){
    console.log(jsonData());
    equalJson.map(element => {
        console.table(element);
    })
}

test("Checking the JSON Data", () => {

    expect.assertions(1);
    return expect(jsonData()).toEqual(equalJson);
});