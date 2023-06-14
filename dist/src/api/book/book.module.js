"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const createBook_controller_1 = require("./controllers/createBook.controller");
const createBook_service_1 = require("./services/createBook.service");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./model/entities/book.entity");
const book_repository_1 = require("./model/repositories/book.repository");
const http_success_filter_1 = require("../../shared/helpers/http-success.filter");
const fetchBook_controller_1 = require("./controllers/fetchBook.controller");
const getBook_service_1 = require("./services/getBook.service");
const fetchBooks_controller_1 = require("./controllers/fetchBooks.controller");
const getBooks_service_1 = require("./services/getBooks.service");
const deleteBooks_controller_1 = require("./controllers/deleteBooks.controller");
const deleteBook_service_1 = require("./services/deleteBook.service");
const updateBook_service_1 = require("./services/updateBook.service");
const updateBooks_controller_1 = require("./controllers/updateBooks.controller");
const base_controller_1 = require("./controllers/base.controller");
let BookModule = class BookModule {
};
BookModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([book_entity_1.Book])],
        controllers: [
            createBook_controller_1.CreateBookController,
            fetchBook_controller_1.GetBookController,
            fetchBooks_controller_1.FetchBooksController,
            deleteBooks_controller_1.DeleteBookController,
            updateBooks_controller_1.UpdateBookController,
            base_controller_1.BaseController,
        ],
        providers: [
            createBook_service_1.BookService,
            book_repository_1.BookRepository,
            http_success_filter_1.default,
            getBook_service_1.FetchBookService,
            getBooks_service_1.GetBooksService,
            deleteBook_service_1.DeleteBookService,
            updateBook_service_1.UpdateBookService,
        ],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map