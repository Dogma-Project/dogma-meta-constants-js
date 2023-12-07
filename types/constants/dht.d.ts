export declare namespace DHT {
    enum Type {
        dhtAnnounce = 0,
        dhtLookup = 1,
        dhtBootstrap = 2
    }
    enum Action {
        get = 0,
        set = 1,
        push = 2
    }
    enum Request {
        announce = 0,
        lookup = 1,
        revoke = 2
    }
    enum Response {
        error = -1,
        alreadyPresent = 0,
        ok = 1
    }
}
