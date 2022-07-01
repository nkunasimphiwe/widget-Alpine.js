function totalPhoneBill (yourphoneBill) {
  let total = 0;
  var tellBill = yourphoneBill.split(", ");
  for (let i = 0; i < tellBill.length; i++) {
  if (tellBill[i].startsWith('sms')) {
  total += 0.65;
  } else if (tellBill[i].startsWith('call')) {
  total += 2.75;
  }
  //console.log(tellBill)
  }
return 'R' +total.toFixed(2);
}