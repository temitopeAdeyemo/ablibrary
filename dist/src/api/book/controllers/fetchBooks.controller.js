"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchBooksController = void 0;
const common_1 = require("@nestjs/common");
const getBooks_service_1 = require("../services/getBooks.service");
const http_exception_filter_1 = require("../../../shared/helpers/http-exception.filter");
const http_success_filter_1 = require("../../../shared/helpers/http-success.filter");
const getBooks_dto_1 = require("../dtos/getBooks.dto");
let FetchBooksController = class FetchBooksController {
    constructor(jsonResponse, service) {
        this.jsonResponse = jsonResponse;
        this.service = service;
    }
    async get_all(data) {
        const response = await this.service.fetchBooks(data);
        return this.jsonResponse.build(200, 'Books fetched successfully.', response);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getBooks_dto_1.GetBooksDto]),
    __metadata("design:returntype", Promise)
], FetchBooksController.prototype, "get_all", null);
FetchBooksController = __decorate([
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpErrorFilter()),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [http_success_filter_1.default,
        getBooks_service_1.GetBooksService])
], FetchBooksController);
exports.FetchBooksController = FetchBooksController;
//# sourceMappingURL=fetchBooks.controller.js.map