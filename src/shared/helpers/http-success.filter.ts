class JsonResponse {
  data: object | null;

  build(statusCode: number, message: string, data: any = null) {
    this.data = { statusCode, success: true, message, data };
    return this.data;
  }
}

export default JsonResponse;
export const jsonResponse = new JsonResponse();
