var autoMobile={
    brand:"nexon",
    wipper:"two",
     gear:"five",
     tyre:"four",
    window:"four",
     store_space:"one"     
}

var p1=Object.create(autoMobile)
p1.brand="Safari"
console.log(p1)
console.log(autoMobile)
  function car1(brand,tyre,window,store_space,wipper,gear)
  {
      this.brand=brand;
      this.window=window;
      this.wipper=wipper;
      this.gear=gear;
      this.tyre=tyre;
      this.store_space=store_space;
  }

  let elect_car=new car1("Honda","four","four","one","two","four");
  let Omini=Object.create(elect_car)
  Omini.brand="Tata Motors"
  console.log(elect_car)
  console.log(Omini)