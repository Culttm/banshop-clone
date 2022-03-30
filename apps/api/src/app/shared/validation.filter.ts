import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";

export class ValidationException extends BadRequestException {
  constructor(public validationErrors: unknown) {
    super();
  }
}

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost): unknown {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      success: false,
      message: '',
      error: exception.validationErrors
    });
  }
}
