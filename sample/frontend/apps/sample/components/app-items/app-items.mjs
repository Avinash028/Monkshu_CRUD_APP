import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

let items = [];

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("app-items", `${APP_CONSTANTS.APP_PATH}/components/app-items/app-items.html`, app_items);
}

async function addItem(){
    /*const item = new items({
        item:app_items.shadowRoot.querySelector('#item').value,
        price:app_items.shadowRoot.querySelector('#price').value
    });*/


    const apiPayloads = {
        item:app_items.shadowRoot.querySelector('#item').value,
        price:app_items.shadowRoot.querySelector('#price').value
    }
   
    let resp = await apiman.rest(APP_CONSTANTS.API_ADD_ITEM, "POST", apiPayloads, false, true);

    /*for(var i=0;i<resp.message.length;i++){
        app_items.shadowRoot.querySelector('#items_list').value=resp.message.item;
    }*/

    //var template = app_items.shadowRoot.querySelector("#items_list").innerHTML;
    var output = app_items.shadowRoot.querySelector('#output')
    var result = Mustache.render("All Items<ul>{{#.}}<li>{{item}} : {{price}}</li>{{/.}}</ul>", resp.message);
    output.innerHTML=result;
    

    console.log(resp.message);

    //var output = Mustache.render("{{resp.message.item}} is a  {{resp.message.price}}", view);
        //document.getElementById('person').innerHTML = output;

        
}

async function deleteItem(){
    alert();
}



//console.log(items);

const trueWebComponentMode = true;	// making this false renders the component without using Shadow DOM

export const app_items = { trueWebComponentMode, register,addItem, }