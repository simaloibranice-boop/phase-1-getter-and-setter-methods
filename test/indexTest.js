const Circle = require("../index");

describe("Circle", function () {
  it("correctly calculates diameter from radius", function () {
    const c = new Circle(5);
    expect(c.diameter).equal(10);
  });

  it("correctly calculates circumference from radius", function () {
    const c = new Circle(5);
    expect(Math.round(c.circumference)).equal(31);
  });

  it("correctly calculates area from radius", function () {
    const c = new Circle(5);
    expect(Math.round(c.area)).equal(79);
  });

  it("can set diameter and update radius", function () {
    const c = new Circle(5);
    c.diameter = 20;
    expect(c.radius).equal(10);
  });

  it("can set circumference and update radius", function () {
    const c = new Circle(5);
    c.circumference = 62.8319;
    expect(Math.round(c.radius)).equal(10);
  });

  it("can set area and update radius", function () {
    const c = new Circle(5);
    c.area = 314.159;
    expect(Math.round(c.radius)).equal(10);
  });
});
