import { CreateBookDto } from '../dtos/createBook.dto';
import { BookService } from '../services/createBook.service';
import JsonResponse from 'src/shared/helpers/http-success.filter';
export declare class CreateBookController {
    private jsonResponse;
    private service;
    constructor(jsonResponse: JsonResponse, service: BookService);
    create(body: CreateBookDto): Promise<object>;
}
