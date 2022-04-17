import { getSP } from "../../pnpjsConfig";
import { SPFI } from "@pnp/sp";


export class RootProvider {
    private _sp: SPFI;

    constructor() {

        this._sp = getSP();
    }

    public getRootTitle = async ():Promise<string> => {

        /*/ This call is ok when opening the page directly
        // but after going to another page, and then hitting
        // the back button on the browser, it loses
        // pageContext. The error says 
        // uncaught (in promise) TypeError: Cannot read properties
        // of undefined (reading 'web')
        /*/
        const rootweb = await this._sp.site.getRootWeb();

        const { Title } = await rootweb.select("Title")();

        return Title;
    }

}