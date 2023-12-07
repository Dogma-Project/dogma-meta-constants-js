export declare namespace Connection {
    enum Status {
        error = -1,
        notConnected = 0,
        connected = 1,
        notAuthorized = 2,
        authorized = 3
    }
    enum Group {
        unknown = 0,
        all = 1,
        friends = 2,
        selfUser = 3,
        selfNode = 4,
        nobody = 5
    }
    enum Direction {
        outcoming = 0,
        incoming = 1
    }
    enum Stage {
        init = 0,
        verification = 1
    }
}
