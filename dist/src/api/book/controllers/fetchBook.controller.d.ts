import { FetchBookService } from '../services/getBook.service';
import JsonResponse from 'src/shared/helpers/http-success.filter';
export declare class GetBookController {
    private jsonResponse;
    private bookService;
    constructor(jsonResponse: JsonResponse, bookService: FetchBookService);
    get(id: number): Promise<object>;
}
