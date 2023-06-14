"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonResponse = void 0;
class JsonResponse {
    build(statusCode, message, data = null) {
        this.data = { statusCode, success: true, message, data };
        return this.data;
    }
}
exports.default = JsonResponse;
exports.jsonResponse = new JsonResponse();
//# sourceMappingURL=http-success.filter.js.map