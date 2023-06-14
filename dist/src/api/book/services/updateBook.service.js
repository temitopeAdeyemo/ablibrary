"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
let UpdateBookService = class UpdateBookService extends base_service_1.BaseService {
    async updateBook(data) {
        const book = await this.returnBookIfFound(data.id);
        await this.bookRepository.save(Object.assign(Object.assign({}, book), data));
        return;
    }
};
UpdateBookService = __decorate([
    (0, common_1.Injectable)()
], UpdateBookService);
exports.UpdateBookService = UpdateBookService;
//# sourceMappingURL=updateBook.service.js.map