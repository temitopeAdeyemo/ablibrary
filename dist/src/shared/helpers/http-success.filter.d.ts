declare class JsonResponse {
    data: object | null;
    build(statusCode: number, message: string, data?: any): object;
}
export default JsonResponse;
export declare const jsonResponse: JsonResponse;
