input = document.getElementById("access");

function access() {
    if (input.value == "Val#2022")
    {
        input.value = ""
        document.cookie="Expresso=38196u790uyf980y908auy9310uyr0fuy903u109u09u901u9un09fd7u390q7f097q90f8n903q8f09q"
    }
    else {
        try{
            setCookie("Expresso", "48196u790uyf980y908auy9310uyr0fuy903u109u09u901u9un09fd7u390q7f097q90f8n903q8f09a");
        }
        catch {
            return;
        }
    }
        
}

function checkForAccess() {
    if (getCookie("Expresso") == "38196u790uyf980y908auy9310uyr0fuy903u109u09u901u9un09fd7u390q7f097q90f8n903q8f09q") {
        return; 
    }
    else {
        window.location.replace("quotes");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;

}