function getDayOfWeek(milliseconds : number) {
    const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]

    return days[new Date(milliseconds).getDay()]
}

function getLocaleTime(milliseconds : number) {
    return new Date(milliseconds).toLocaleTimeString()
}

export {getDayOfWeek, getLocaleTime}