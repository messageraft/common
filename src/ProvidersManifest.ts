import { ProviderName, ProviderType } from './interfaces'

export interface ManifestProvider {
  name: ProviderName
  type: ProviderType
  packageName: string
  version: string
}

export const ProvidersManifest: ManifestProvider[] = [
  {
    name: ProviderName.SLACK,
    type: ProviderType.DIRECT_MESSAGE,
    packageName: '@messageraft/slack',
    version: '^0.0.x',
  },
  {
    name: ProviderName.TWILIO,
    type: ProviderType.SMS,
    packageName: '@messageraft/twilio',
    version: '^0.0.x',
  },
  {
    name: ProviderName.SENDGRID,
    type: ProviderType.EMAIL,
    packageName: '@messageraft/sendgrid',
    version: '^0.0.x',
  },
  {
    name: ProviderName.MAILDEV,
    type: ProviderType.EMAIL,
    packageName: '@messageraft/maildev',
    version: '^0.0.x',
  },
]
