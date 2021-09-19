import { ProviderName, ProviderType } from './interfaces'

interface Provider {
  name: ProviderName
  type: ProviderType
  packageName: string
  version: string
}

export const ProvidersManifest: Provider[] = [
  {
    name: ProviderName.SLACK,
    type: ProviderType.DIRECT_MESSAGE,
    packageName: '@messageraft/slack',
    version: '0.0.1',
  },
  {
    name: ProviderName.TWILIO,
    type: ProviderType.SMS,
    packageName: '@messageraft/twilio',
    version: '0.0.1',
  },
  {
    name: ProviderName.SENDGRID,
    type: ProviderType.EMAIL,
    packageName: '@messageraft/sendgrid',
    version: '0.0.1',
  },
]
