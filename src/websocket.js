export const WS_NAMESPACE = "/ws";
export const WS_SERVER = (window.location.origin === "http://localhost:1234" ? "ws://localhost:1235" : "wss://"+window.location.host) + WS_NAMESPACE;
