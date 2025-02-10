class RailwayForm{
    submit=()=>{
        console.log(this.name+" your form submitted "+this.train)
    }
    cancel(){
        console.log(this.name+" your form is cancelled "+this.train)
    }
    fill(gname,trainno){
        this.name=gname;
        this.train=trainno;
        // alert(this.name);
    }
}
//create a form for teja.
let teja=new RailwayForm()
//fill the form with teja's details
teja.fill("teja",1234);
let rohan=new RailwayForm()
//fill the form with rohan's details
rohan.fill("rohan",12345);
teja.submit()
rohan.submit()
rohan.cancel()
