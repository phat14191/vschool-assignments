// create a class player
class Player {
  constructor(name, totalCoins, status, star) {
      this.name = name;
      this.totalCoins = totalCoins;
      this.status = status;
      this.star = star;
      this.gameActive = true;
  }
  setName(namePicked) {
    this.name = Luigi;
  }
  addCoin() {
    return this.totalCoins + 1;
  }
  gotHit() {
    if (this.status === "Powered Up") {
      this.status = "Giant";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else if (this.status === "Small") {
      this.status = "Heaven";
    }
  }
  gotPowerUp() {
    if (this.status === "Powered Up") {
     this.status = "Small";
    } else if (this.status === "Small") {
     this.status = "Big";
    } else if (this.status === "Big") {
     this.status = "Powered Up";
    }
  }
  print() {
    console.log(`
      Name: ${this.name}
      Status: ${this.status}
      Total Coins: ${this.totalCoins}
      Have star: ${this.star}
    `)
  }
}

  const ranNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const methodCallandPrint = () => {
      var randomNum = ranNum(0, 2);
      if (randomNum === 0) {
          newPlayer.gotHit();
      } else if (randomNum === 1) {
          newPlayer.gotPowerUp();
      } else if (randomNum === 2) {
          newPlayer.addCoin();
      }
  }

  const newPlayer = new Player("Luigi", 5, "Powered Up", true)
  // const newPlayer = new Player("Luigi", 5, "Small", true)

  newPlayer.print();

  methodCallandPrint(newPlayer);
  newPlayer.print();
  methodCallandPrint(newPlayer);
  newPlayer.print();
  methodCallandPrint(newPlayer);
  newPlayer.print();
  methodCallandPrint(newPlayer);
  newPlayer.print();


//
