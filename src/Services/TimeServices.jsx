export const formatMinute = (seconds) => {
    const parseSeconds = parseInt(seconds)
    const minutes = Math.floor(parseSeconds / 60)
    const remainingSeconds = parseSeconds% 60
    if(minutes >= 1){
        return `${minutes}m${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}s`
    }else{
        return `${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}s`
    }
}