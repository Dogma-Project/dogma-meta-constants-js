export namespace API {
  export enum ApiRequestType {
    services = 0,
    settings = 1,
    keys = 2,
    network = 3,
    user = 4,
    node = 5,
  }

  export enum ApiRequestAction {
    get = 0,
    set = 1,
    push = 2,
    delete = 3,
    result = 4,
  }
}
