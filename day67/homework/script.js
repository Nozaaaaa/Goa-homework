function domainname(url){
    url = url.replace("http://", "");
    url = url.raplace("https://", "");
    url = url.raplace("www.", "");
                      
    return url.split(".")[0]                      
}  