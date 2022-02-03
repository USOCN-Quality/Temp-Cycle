$(document).ready(()=>{
    $(".tempTable").hide()
    var insertTimes = [8,16,24,32,40,48]
    var removeTimes = [4,12,20,28,36,44]
    $("#checkTimes").on("click",function(){
        var dateTime = $("#dateInput").val()
        if(dateTime ==="" || !dateTime.match(/\w* \d*, \d\d\d\d/)){
            alert("Please select a date/time value from the dropdown in a valid format")
        }else if(dateTime.match(/\w* \d*, \d\d\d\d/)[0]){
            $(".tempTable").show()
            $(".notes").hide();
            $("#addTimesHere").empty()
            $("#removeTimesHere").empty()
            insertTimes.forEach(item=>{
                returnArray = AddTimes(dateTime,item).split(" ")
                var insertTimesString ="<tr><td>"+returnArray[0]+"</td><td>"+returnArray[1]+" "+ returnArray[2]+ "</td><td>"+returnArray[3]+"</td></tr>"
               
                $("#addTimesHere").append(insertTimesString)
               
            })
            removeTimes.forEach((thing,index)=>{
                
                returnArray = AddTimes(dateTime,thing).split(" ")
               if(index<removeTimes.length-1){
                var removeTimesString ="<tr><td>"+returnArray[0]+"</td><td>"+returnArray[1]+" "+ returnArray[2]+ "</td><td>"+returnArray[3]+"</td></tr>"
                $("#removeTimesHere").append(removeTimesString)
               }else{
                var removeTimesString2 ="<tr style='background-color:#00FF00'><td>"+returnArray[0]+"</td><td>"+returnArray[1]+" "+ returnArray[2]+ " - cycle finish</td><td>"+returnArray[3]+"</td></tr>"
                $("#removeTimesHere").append(removeTimesString2)
               }
               
            })
        }else{
            alert("Please select a date/time value from the dropdown in a valid format")
        }
    })

    var AddTimes = function(date1, h){
        var dt = new Date(date1)
        dt.setHours(dt.getHours()+ h)
        var dateString = dt.toLocaleString('en-us', {  weekday: 'long' })+" "+ formatAMPM(dt)+" " + (Number(dt.getMonth())+1) +"/"+dt.getDate()+"/"+dt.getFullYear()
       //console.log(dateString)
       // var originalFormatForString = dt.toString().split(":")[0].substring(0, dt.toString().split(":")[0].length -2).replace(/ \d\d\d\d /,"")+ " " + formatAMPM(dt);
        return dateString
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