import { getSP } from "../../pnpjsConfig";
import { SPFI } from "@pnp/sp";


export class RootProvider {
    private _sp: SPFI;

    constructor() {

        this._sp = getSP();
    }

    public getRootTitle = async ():Promise<string> => {

        const rootweb = await this._sp.site.getRootWeb();

        const { Title } = await rootweb.select("Title")();

        return Title;
    }

}