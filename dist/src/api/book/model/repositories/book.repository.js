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
exports.BookRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("../entities/book.entity");
let BookRepository = class BookRepository {
    getBookByData(data) {
        return this.repository.findOne({ where: data });
    }
    async createBook(data) {
        const book = this.repository.create(data);
        await this.repository.save(book);
        return book;
    }
    async deleteBookById(id) {
        await this.repository.delete({ id });
        return;
    }
    async fetchBooks(data) {
        const books = await this.repository.find({ where: data });
        return books;
    }
    async save(data) {
        await this.repository.save(data);
        return;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(book_entity_1.Book),
    __metadata("design:type", typeorm_2.Repository)
], BookRepository.prototype, "repository", void 0);
BookRepository = __decorate([
    (0, common_1.Injectable)()
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map