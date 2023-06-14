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
exports.UpdateBookController = void 0;
const common_1 = require("@nestjs/common");
const updateBook_service_1 = require("../services/updateBook.service");
const http_exception_filter_1 = require("../../../shared/helpers/http-exception.filter");
const http_success_filter_1 = require("../../../shared/helpers/http-success.filter");
const UpdateBookDto_1 = require("../dtos/UpdateBookDto");
let UpdateBookController = class UpdateBookController {
    constructor(jsonResponse, updateBookService) {
        this.jsonResponse = jsonResponse;
        this.updateBookService = updateBookService;
    }
    async update(id, data) {
        const response = await this.updateBookService.updateBook(Object.assign({ id }, data));
        return this.jsonResponse.build(200, 'Book updated successfully.', response);
    }
};
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateBookDto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], UpdateBookController.prototype, "update", null);
UpdateBookController = __decorate([
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpErrorFilter()),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [http_success_filter_1.default,
        updateBook_service_1.UpdateBookService])
], UpdateBookController);
exports.UpdateBookController = UpdateBookController;
//# sourceMappingURL=updateBooks.controller.js.map