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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBooksService = void 0;
const common_1 = require("@nestjs/common");
const book_repository_1 = require("../model/repositories/book.repository");
const constants_1 = require("../../../shared/utils/constants");
const { noBookFound } = constants_1.default;
let GetBooksService = class GetBooksService {
    async fetchBooks(data) {
        const books = await this.bookRepository.fetchBooks(data);
        if (!books.length) {
            throw new common_1.BadRequestException(noBookFound);
        }
        return books;
    }
};
__decorate([
    (0, common_1.Inject)(book_repository_1.BookRepository),
    __metadata("design:type", book_repository_1.BookRepository)
], GetBooksService.prototype, "bookRepository", void 0);
GetBooksService = __decorate([
    (0, common_1.Injectable)()
], GetBooksService);
exports.GetBooksService = GetBooksService;
//# sourceMappingURL=getBooks.service.js.map