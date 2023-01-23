class student{
    studRegNo:number;
    studName:string;

    constructor(regno:number ,name:string){
        this.studRegNo=regno;
        this.studName=name;
    }

    getGrade():string{
        return "A+"
    }

    getReg():number{
        return this.studRegNo;
    }

    getStudName():string{
       return this.studName;
    }
}


let obj =new student(1111,"kumar")
console.log(obj.getGrade());
console.log(obj.getReg());
console.log(obj.getStudName());