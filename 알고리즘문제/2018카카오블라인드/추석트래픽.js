function solution(lines){
  var answer = 0;

  for(var i = 0;i<lines.length - answer;i++){
    var Time = function (timeline){
      var endDate = new Date(timeline.substring(0,timeline,lasIndexOf(' ')));
      var processingTime = timeline.substring(timeline.lastIndexOf(' ')+1,timeline.length - 1)* 1000;

      this.endTime = endDate.getTime();
      this.startTime = this.endTime - processingTime +1;
    }
    var basisTime = new Time(lines[i]).endTime +1000;

    var num = 1;
    for(var j =i+1;j<lines.length;j++){
      var target = new Time(lines[j]);
      if(target.startTime < basisTime){
        num++;
      }
    }
    if(num > answer){
      answer = num;
    }
  }
  return answer;
}