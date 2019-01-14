var ThingSpeakClient = require('thingspeakclient');
var client = new ThingSpeakClient();
var lineReader = require('line-reader');

var yourWriteKey = 'F7QX09VJRTLO6HX3';
var channelID = 667372;


client.attachChannel(channelID, { writeKey:'F7QX09VJRTLO6HX3'}, callBackThingspeak);

setInterval(send, 11000);

function send(){
   lineReader.eachLine('data.json', function(line, last){
      if(last){
         data = postline;
         console.log(data); 
         console.log(typeof(data));
         data = JSON.parse(data);
         console.log(typeof(data))
         console.log(data)

         client.updateChannel(channelID, data, function(err, resp) {
            if (!err && resp > 0) {
               console.log('update successfully. Entry number was: ' + resp);
            }
            else {
       	       console.log('err1');
            }
         });
      }
      postline=line;
   });
}

function callBackThingspeak(err, resp)
{
   
}
