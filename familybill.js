function totalPhoneBill (yourphoneBill) {
    let total = 0;
    var tellBill = yourphoneBill.split(", ");
    for (let i = 0; i < tellBill.length; i++) {
    if (tellBill[i].startsWith('rent')) {
    total += 6000;
    } else if (tellBill[i].startsWith('elect')) {
    total += 1000;
    } else if (tellBill[i].startsWith('extras')) {
    total += 4000;
    }
    else if (tellBill[i].startsWith('car')) {
      total += 5000;
      }
    
    //console.log(tellBill)
    }
  return 'R' +total.toFixed(2);
  }
  