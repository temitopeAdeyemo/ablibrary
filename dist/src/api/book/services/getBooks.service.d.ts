import IGetBookFilter from '../interfaces/IGetBookFilter';
export declare class GetBooksService {
    private readonly bookRepository;
    fetchBooks(data?: IGetBookFilter): Promise<IGetBookFilter[]>;
}
