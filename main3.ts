let message;
message='abc';
// let endsWithC=message.endsWith('c');  // message type is any and we don't get any intelligence because it doesnot know that it's string and which intelligence to show


// So to get that intelligence we have to explicitly tell to typescript compiler that it's a string
// This is called type insertion :  (<string>varname) or (varname as string)  .Now after .(dot), you will get intelligence of methods available
let endsWithC=(<string> message).endsWith('c');
let alternativeWay=(message as string).endsWith('c'); // THis type insertion doesnot change the type of var in runtime . It's just way to tell typescript compiler its type and get the availabe methods
