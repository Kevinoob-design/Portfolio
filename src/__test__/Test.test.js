//jshint esversion:6

test("doing a test", () => {

    expect(((num1, num2) =>{
        return num1 + num2;
    })(5, 6)).toBe(11); 
});