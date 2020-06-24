/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

// Custom modules
const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const db = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/db`);
let data1=[];
var cloneArray=[];
exports.doService = async jsonReq => {
   //alert();
   
    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const addedItem = await addItem(jsonReq);
        if (!addedItem) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, message: cloneArray };
    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }    
}

const addItem = async (jsonReq) => {
    let item = new db.Items();
    Object.assign(item, {item:jsonReq.item, price:jsonReq.price});
    item.save(function(err){
        if(err) throw err;
        console.log("saved");
    })


   /*console.log(db.Items.find({}, function (err, docs) {
    
      }));*/

      db.Items.find({},function(err,data){
          console.log(data);
          cloneArray = JSON.parse(JSON.stringify(data));
      });

      //data1=toArray(data);
      //console.log(data1);
      
    return cloneArray;
}

//module.exports.data=data;
const validateRequest = jsonReq => (jsonReq && jsonReq.item && jsonReq.price);
