import Parse from 'parse/dist/parse.min.js';

Parse.initialize("jyXEQWBTMyH4KqW2TdzqhQ435KO6GTxe5NrxUAjN", "winghxezNp6Ri7HoS6LZ0ELcFKHvg6UqdvtekdoQ");

Parse.serverURL = 'https://parseapi.back4app.com/'

const Data = Parse.Object.extend("Data")

export const data = new Data()

export const query = new Parse.Query("Data")

export function getFile(fileName, file){
    return new Parse.File(fileName, file)
}

async function getData(){
    return await query.find()
}

export let datas = getData();
