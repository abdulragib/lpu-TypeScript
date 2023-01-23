//Isha has three brothers Harsh, Prince and Amit.
//Write a program using class object and method to find who is elder brother of Isha

class compare {
  constructor(
    public harshAge: number,
    public ishaAge: number,
    public princeAge: number,
    public amitAge: number
  ) {
    this.harshAge = harshAge;
    this.ishaAge = ishaAge;
    this.princeAge = princeAge;
    this.amitAge = amitAge;
  }

  getter() {
    console.log(
      "Amit Age:",
      this.harshAge,
      "Isha Age",
      this.ishaAge,
      "Prince Age:",
      this.princeAge,
      "Amit Age:",
      this.amitAge
    );
  }
  elderAmongThree() {
    if (
      this.harshAge > this.ishaAge &&
      this.harshAge > this.princeAge &&
      this.harshAge > this.amitAge
    ) {
      console.log("Harsh is elder brother of Isha");
    }
    if (
      this.ishaAge < this.harshAge &&
      this.ishaAge > this.princeAge &&
      this.ishaAge > this.amitAge
    ) {
      console.log("Isha is younger tha harsh and elder than Pince and Amit");
    }
    if (
      this.princeAge < this.harshAge &&
      this.princeAge < this.ishaAge &&
      this.princeAge > this.amitAge
    ) {
      console.log(
        "Prince is younger tha harsh and isha and elder elder than Amit"
      );
    }
    if (
      this.amitAge < this.harshAge &&
      this.amitAge < this.ishaAge &&
      this.amitAge < this.princeAge
    ) {
      console.log("Amit is younger tha harsh, isha and  Amit");
    }
  }
}

let obj = new compare(50, 30, 20, 15);
obj.getter();
obj.elderAmongThree();
