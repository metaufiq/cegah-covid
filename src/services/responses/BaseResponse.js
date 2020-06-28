class BaseResponse {
    data = {}
    type = ''

    constructor(data, type) {
        this.data = data
        this.type = type
    }
}

export default BaseResponse