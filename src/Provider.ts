import {
  BaseEmailOptions,
  ProviderName,
  ProviderOptions,
  ProviderType,
  SmsOptions,
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
  async send(data: SmsOptions): Promise<any> {}
}
