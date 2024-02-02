function getDayOfWeek(milliseconds : number) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return days[new Date(milliseconds).getDay()]
}

function getLocaleTime(milliseconds : number) {
    return new Date(milliseconds).toLocaleTimeString()
}

export {getDayOfWeek, getLocaleTime}