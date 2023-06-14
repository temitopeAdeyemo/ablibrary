import { GetBooksService } from '../services/getBooks.service';
import JsonResponse from 'src/shared/helpers/http-success.filter';
import { GetBooksDto } from '../dtos/getBooks.dto';
export declare class FetchBooksController {
    private jsonResponse;
    private service;
    constructor(jsonResponse: JsonResponse, service: GetBooksService);
    get_all(data: GetBooksDto): Promise<object>;
}
