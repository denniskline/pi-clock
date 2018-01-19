function clock() {
   var time = new Date(),
       month = time.getUTCMonth() + 1; //months from 1-12
       day = time.getUTCDate(),
       year = time.getUTCFullYear(),
       hours = time.getHours(),
       minutes = time.getMinutes();    

      document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes);

   //document.querySelectorAll('.calendar')[0].innerHTML = moment().format('MMMM Do YYYY')

   function harold(standIn) {
      if (standIn < 10) {
         standIn = '0' + standIn
      }
      return standIn;
   }

}
setInterval(clock, 1000);

