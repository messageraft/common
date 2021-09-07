import {
  BaseEmailOptions,
  ProviderName,
  ProviderOptions,
  ProviderType,
  BaseSmsOptions,
  BaseDirectMessageOptions,
} from './interfaces'

export abstract class AbstractProvider {
  name!: ProviderName
  type!: ProviderType

  abstract send(data: ProviderOptions): Promise<any>
}

export class EmailProvider extends AbstractProvider {
  async send(data: BaseEmailOptions): Promise<any> {}
}

export class SmsProvider extends AbstractProvider {
  async send(data: BaseSmsOptions): Promise<any> {}
}

export class DirectMessageProvider extends AbstractProvider {
  async send(data: BaseDirectMessageOptions): Promise<any> {}
}
