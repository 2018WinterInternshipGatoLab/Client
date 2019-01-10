var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0',{
baudRate: 9600,
parser: new SerialPort.parsers.Readline('\n')
});
 
port.on('open', onOpen);
//port.on('data', onData);
port.on('data', WriteFile);

function onOpen(){
   console.log('Open connections!');
}

function onData(data){
   console.log('' + data);
}


//file write
var fs = require('fs');

function WriteFile(data){
   fs.appendFile('data.json', data, 'utf-8', function(e){
      if(e){
         console.log(e);
      }else{
         console.log('WRITE DONE!');
      }
   });
}
