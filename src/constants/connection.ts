export namespace Connection {
  export enum Status {
    error = -1,
    notConnected = 0,
    connected = 1,
    notAuthorized = 2,
    authorized = 3,
  }
  export enum Group {
    unknown = 0,
    all = 1,
    friends = 2,
    selfUser = 3,
    selfNode = 4,
    nobody = 5,
  }
  export enum Direction {
    outcoming = 0,
    incoming = 1,
  }
  export enum Stage {
    init = 0,
    verification = 1,
  }
}
