import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Exceptions } from './exception.class';
import { Exception } from './exception.types';

export function exceptionhandling({ message, exception }: Exceptions) {
  if (
    exception === Exception.InvalidData ||
    exception === Exception.NotFoundData
  ) {
    throw new BadRequestException(message ? message : 'dados invalidos');
  }

  if (exception === Exception.InternalServerErrorException) {
    throw new InternalServerErrorException(
      message ? message : 'Erro no banco de dados',
    );
  }

  if (exception === Exception.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'Você não tem permissão para fazer esta ação',
    );
  }

  if (exception === Exception.NotFoundException) {
    throw new NotFoundException(message ? message : 'Registro não encontrado');
  }

  if (exception === Exception.UnprocessableEntityException) {
    throw new UnprocessableEntityException(
      message ? message : 'Algum erro ocorreu ao executar a operação',
    );
  }
}
