var counter = {
    currentValues: function() {
        return 1;
    },
};


function sumOfValues() {
    return counter.currentValues();
}

describe("mock and spy", function() {
    //spy on counter object currentValue property and mock its implementation to equal [100]
    // expect sumOfValues is returning the right value (new mocked value 100) after mocking
    // and expect that we called the spy function for one time
    it("spying", function() {
        spyOn(counter, "currentValues");
        counter.currentValues.and.callFake(() => {
            return 100;
        })
        expect(sumOfValues()).toEqual(100)
        expect(counter.currentValues).toHaveBeenCalledTimes(1);
    });

    // mock a function that takes any string and return number, call it twice and expect that it is called twice
    it("mocking", function() {
        var strNumFun = jasmine.createSpy('');
        strNumFun.and.callFake((str) => {
            return 5;
        })
        strNumFun('mustafa');
        strNumFun('mohamed');
        expect(strNumFun).toHaveBeenCalledTimes(2)
    });
});