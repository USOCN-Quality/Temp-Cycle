$(document).ready(()=>{
    var insertTimes = [8,16,24,32,40,48]
    var removeTimes = [4,12,20,28,36,44]
    $("#checkTimes").on("click",function(){
        var dateTime = $("#dateInput").val()
        if(dateTime ===""){
            alert("Please put in a date/time value")
        }else if(dateTime.match(/\w* \d, \d\d\d\d/)[0]){
            //alert(AddTimes(dateTime,16))
            $("#addTimesHere").empty()
            $("#removeTimesHere").empty()
            insertTimes.forEach(item=>{
                var insertTimesString ="<p>"+AddTimes(dateTime,item)+"</p>"
               
                $("#addTimesHere").append(insertTimesString)
               
            })
            removeTimes.forEach((thing,index)=>{
               if(index<removeTimes.length-1){
                var removeTimesString ="<p>"+AddTimes(dateTime,thing)+"</p>"
                $("#removeTimesHere").append(removeTimesString)
               }else{
                var removeTimesString2 ="<p style='background-color:#00FF00'><strong>"+AddTimes(dateTime,thing)+" -  this is when your cycle will finish</strong></p>"
                $("#removeTimesHere").append(removeTimesString2)
               }
               
            })
        }
    })

    var AddTimes = function(date1, h){
        var dt = new Date(date1)
        dt.setHours(dt.getHours()+ h)
        // var dateString = dt.toLocaleString('en-us', {  weekday: 'long' })+" "+ dt.getDay() +"/"+dt.getMonth()+"/"+dt.getFullYear()+ " " + formatAMPM(dt)
        return dt.toString().split(":")[0].substring(0, dt.toString().split(":")[0].length -2).replace(/ \d\d\d\d /,"")+ " " + formatAMPM(dt);
    }
    var formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
})