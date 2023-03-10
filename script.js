input = document.getElementById("access");

function access() {
    if (input.value == "Val#2022")
    {
        input.value = ""
        document.cookie="Expresso=38196u790uyf980y908auy9310uyr0fuy903u109u09u901u9un09fd7u390q7f097q90f8n903q8f09q"
    }
        
}

function checkForAccess() {
    if (document.cookie == "Expresso=38196u790uyf980y908auy9310uyr0fuy903u109u09u901u9un09fd7u390q7f097q90f8n903q8f09q") {
        window.location.replace("vakle.tech/expresso.html")
    }
    else {
        window.location.replace("vakle.tech")
    }
}
