export enum Exception {
  InvalidData,
  NotFoundData,
  InternalServerErrorException,
  UnauthorizedException,
  NotFoundException,
  UnprocessableEntityException,
}

export interface IException {
  message?: string;
  exception: Exception;
}
