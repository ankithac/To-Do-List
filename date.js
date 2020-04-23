module.exports = getDate;
function getDate(){
    var options={
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    var today = new Date()
    var day = today.toLocaleString("en-US",options)
    return day;
}
