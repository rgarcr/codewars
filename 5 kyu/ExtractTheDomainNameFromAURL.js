// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//My Solution

function domainName(url) {
    const regex = /((www\.)|(http:\/\/)|(https:\/\/)|(\.com)|(\/edu)|(\.[\w]*)|(\/[\w]*))/g;
    return url.replaceAll(regex, "");
}