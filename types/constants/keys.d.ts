export declare namespace Keys {
    enum Type {
        nodeKey = 0,
        userKey = 1
    }
    enum FORMATS {
        TYPE = "pkcs1",
        FORMAT = "pem"
    }
    enum TRANSFER_AES {
        ENCODER = "aes-256-gcm",
        IV_LENGTH = 12,
        AUTH_TAG_LENGTH = 16,
        KEY_LENGTH_BYTES = 32
    }
    enum STATIC_AES {
        ENCODER = "aes-256-cbc",
        IV_LENGTH = 16,
        KEY_LENGTH_BYTES = 32
    }
}
