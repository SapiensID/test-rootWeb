import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFI, SPFx } from "@pnp/sp";
import { LogLevel, PnPLogging } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/sites";
import "@pnp/sp/lists";
import "@pnp/sp/items";


var _sp: SPFI = null;

export const getSP = (context?: WebPartContext): SPFI => {

    if (_sp === null && context != null) {

        _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
    }

    return _sp;
};
// added dispose method as suggested
// here https://github.com/pnp/pnpjs/issues/2221#issuecomment-1100934107

export const disposeSP = () => {
    _sp = null;
}