function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*://*.hsoubservices.com/*"))
        return "PROXY 127.0.0.1:8080";

    // by default use no proxy
    return "DIRECT";
}
