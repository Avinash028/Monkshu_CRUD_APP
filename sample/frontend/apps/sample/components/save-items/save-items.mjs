import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("save-items", `${APP_CONSTANTS.APP_PATH}/components/save-items/save-items.html`, save_items);
    
}

function saveItems(){
    router.loadPage(APP_CONSTANTS.RANDOM_HTML);
}

const trueWebComponentMode = true;	// making this false renders the component without using Shadow DOM

export const add_items = { trueWebComponentMode, register,saveItems }