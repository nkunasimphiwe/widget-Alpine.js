function enoughAirtime(airTimeUse, airTimeBalance) {
    var airTimeUsage = airTimeUse.split(",")
    let total = 0;
    for (let i = 0; i < airTimeUsage.length; i++) {
        if (airTimeUsage[i].startsWith('call')) {
            total += 1.88
        } else if (airTimeUsage[i].startsWith('data')) {
            total += 12
        } else if (airTimeUsage[i].startsWith('sms')) {
            total += 0.75
        }
    }
    var avaibleTot = airTimeBalance - total
    if (airTimeBalance < total) {
        avaibleTot = 0
        console.log(airTimeBalance)
    }
    return "R" + avaibleTot.toFixed(2)
}