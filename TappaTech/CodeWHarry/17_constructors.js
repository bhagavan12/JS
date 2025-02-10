class RailwayForm{
    constructor(givenname, trainno, address) {
        alert("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
    }//2 times callled for teja,rohan
    //bcoz,constructor runs when ever the new object is created.\

    preview() {
        alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is ")
    }
    
    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    
    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
        this.trainno = 0
    }
    // fill(gname,trainno){
    //     this.name=gname;
    //     this.train=trainno;
    //     // alert(this.name);
    // }
}
//create a form for teja,rohan.
let teja=new RailwayForm("teja",1234)
teja.submit()
let rohan=new RailwayForm("rohan",12345)
//fill the form with teja's details
// teja.fill("teja",1234);
// //fill the form with rohan's details
// rohan.fill("rohan",12345);
rohan.submit()
rohan.cancel()

// class RailwayForm {
//     constructor(givenname, trainno, address) {
//       console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
//       this.name = givenname
//       this.trainno = trainno
//       this.address = address
//     }
  
//     preview() {
//       alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
//     }
  
//     submit() {
//       alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//     }
  
//     cancel() {
//       alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//       this.trainno = 0
//     }
//   }
  
//   let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
//   harryForm.preview()
//   harryForm.submit()
//   harryForm.cancel()
//   harryForm.preview()