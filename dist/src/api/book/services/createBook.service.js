"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
let BookService = class BookService extends base_service_1.BaseService {
    async createBook(data) {
        await this.throwExcIfFound({
            author: data.author,
            title: data.title,
        });
        const newBook = await this.bookRepository.createBook(data);
        return { id: newBook.id };
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=createBook.service.js.map