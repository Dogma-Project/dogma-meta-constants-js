export declare namespace Event {
    enum Action {
        update = 0,
        set = 1
    }
    enum Type {
        start = "START",// action
        online = "ONLINE",// action
        offline = "OFFLINE",// action
        friendshipRequest = "FRIENDSHIP REQUEST",// action
        nodes = "NODES",// storage
        users = "USERS",// storage
        encryptionKey = "ENCRYPTION KEY",// storage
        services = "SERVICES",
        userKey = "USER KEY",// service
        nodeKey = "NODE KEY",// service
        configDb = "CONFIG DB",// service
        nodesDb = "NODES DB",// service
        usersDb = "USERS DB",// service
        messagesDb = "MESSAGES DB",// service
        dhtService = "DHT SERVICE",// service
        dhtDb = "DHT DB",// service
        filesDb = "FILES DB",// service
        protocolDb = "PROTOCOL DB",// service
        syncDb = "SYNC DB",// service
        server = "SERVER",// service
        localDiscovery = "LOCAL DISCOVERY",// service
        dirStatus = "HOME DIR",// service
        storageUser = "STORAGE USER",// service
        storageNode = "STORAGE NODE",// service
        configRouter = "CONFIG ROUTER",// config
        configDhtLookup = "CONFIG DHT LOOKUP",// config
        configDhtAnnounce = "CONFIG DHT ANNOUNCE",// config
        configDhtBootstrap = "CONFIG DHT BOOTSTRAP",// config
        configAutoDefine = "CONFIG AUTO DEFINE",// config
        configExternal = "CONFIG EXTERNAL",// config
        configPublicIpV4 = "CONFIG PUBLIC IPV4",// config
        configLocalDiscovery = "CONFIG LOCAL DISCOVERY",// config
        configFriendshipRequests = "CONFIG FRIENDSHIP REQUESTS"
    }
    namespace Type {
        type ConfigStr = Type.configExternal | Type.configPublicIpV4;
        type ConfigBool = Type.configAutoDefine | Type.configLocalDiscovery | Type.configFriendshipRequests;
        type ConfigNum = Type.configRouter | Type.configDhtAnnounce | Type.configDhtBootstrap | Type.configDhtLookup;
        type Config = ConfigStr | ConfigBool | ConfigNum;
        type Service = Type.userKey | Type.nodeKey | Type.configDb | Type.nodesDb | Type.usersDb | Type.messagesDb | Type.dhtService | Type.dhtDb | Type.filesDb | Type.protocolDb | Type.syncDb | Type.server | Type.localDiscovery | Type.dirStatus | Type.storageUser | Type.storageNode;
        type Services = Type.services;
        type Storage = Type.nodes | Type.users | Type.encryptionKey;
        type Action = Type.start | Type.online | Type.offline | Type.friendshipRequest;
    }
}
