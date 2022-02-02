$(document).ready(()=>{
    var insertTimes = [8,12,16,20,24,32,44]
    $("#checkTimes").on("click",function(){
        var dateTime = $("#dateInput").val()
        if(dateTime ===""){
            alert("Please put in a date/time value")
        }else if(dateTime.match(/\w* \d, \d\d\d\d/)[0]){
            //alert(AddTimes(dateTime,16))
            $("#addTimesHere").empty()
            insertTimes.forEach(item=>{
                var insertTimesString ="<p>"+AddTimes(dateTime,item)+"</p>"
               
                $("#addTimesHere").append(insertTimesString)
               
            })
        }
    })

    var AddTimes = function(date1, h){
        var dt = new Date(date1)
        dt.setHours(dt.getHours()+ h)
        // var dateString = dt.toLocaleString('en-us', {  weekday: 'long' })+" "+ dt.getDay() +"/"+dt.getMonth()+"/"+dt.getFullYear()+ " " + formatAMPM(dt)
        return dt.toString().split(" GMT")[0];
    }
    var formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
})