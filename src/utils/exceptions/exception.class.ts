import { Exception } from './exception.types';

export class Exceptions {
  constructor(
    public readonly exception: Exception,
    public readonly message?: string,
  ) {}
}
