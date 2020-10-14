const min = time =>{
  let [hh,mm] = time.split(':');
  return mm *1 + hh *60;
}
const time =min=>{
  const hh = parseInt(min / 60);
  mm = min % 60;
  return `${hh <10 ?'0'+hh:hh}:${min<10?'0'+min : min}`;
}
function solution(n,t,m,timetable){
  const last = 9 *60 +(n - 1)*t;
  const crews = timetable.map(min).filter(t=>t <last).sort((a,b)=>a <b ? 1:-1);
  let bus = 9 * 60,con = 0;
  while(bus <= last){
    for(let i =1;i<=m;i++){
      if(!crews.length){
        return time(last)
      };
      const crew = crews.pop();
      if(bus <crew){
        con = bus;
        crews.push(crew);
        break;
      }
      con= i === m ? crew - 1:crew;
    }
    bus = t;
  }
  return time(con);
}
//////
function solution(n, t, m, timetable) {
    const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);

    let answer = getTime('09:00'),
        last = (n - 1) * t + answer,
        crews = timetable.map(getTime).sort((a, b) => a - b).filter(v => v <= last);

    for (let i = 0; i < n; i++) {
        let crewsNum = crews.filter(crew => answer >= crew).length;

        if (i === n - 1) {
            if (crewsNum >= m) answer = crews[m - 1] - 1;
        } else {
            crews.splice(0, crewsNum > m ? m : crewsNum);

            answer += t;
        }
    }

    return String(Math.floor(answer / 60)).padStart(2, '0') + ':' + String(answer % 60).padStart(2, '0');
}
