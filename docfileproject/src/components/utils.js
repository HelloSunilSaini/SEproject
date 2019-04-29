

export function InArray(elm, list) {
    if (list === undefined || list === null) {
        return false
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i] === elm) {
            return true
        }
    }
    return false
}

export function RemoveDuplicates(list) {
    var lst = []
    for (var i = 0; i < list.length; i++) {
        if (!InArray(list[i], lst)) {
            lst.push(list[i]);
        }
    }
    return lst
}


export function DateRangeToUTC(toDateValue,fromDateValue) {

    if (toDateValue !== undefined  && fromDateValue !== undefined) {
        var fromDay = parseInt(fromDateValue.slice(0, 2), 10)
        var fromMonth = parseInt(fromDateValue.slice(3, 5), 10) - 1 // jan = 0 for Date.UTC
        var fromYear = parseInt(fromDateValue.slice(6, 10), 10)

        var toDay = parseInt(toDateValue.slice(0, 2), 10)
        var toMonth = parseInt(toDateValue.slice(3, 5), 10) - 1 // jan = 0 for Date.UTC
        var toYear = parseInt(toDateValue.slice(6, 10), 10)

        var fromdate = Date.UTC(fromYear, fromMonth, fromDay, -5, -30, 0) // start of day by IST
        console.log("fromdate time", fromdate, " date : ", new Date(fromdate))
        var todate = Date.UTC(toYear, toMonth, toDay, 18, 29, 59) // end of day by IST
        console.log("todate time ", todate, " date : ", new Date(todate))
        if (todate < fromdate) {
            return {
                toDate : null,
                fromDate : null,
            }
        } else {
            return {
                            toDate : todate, 
                            fromDate : fromdate,
                        };
        }
    }else{
        return {
            toDate : null,
            fromDate : null,
        }
    }
}



