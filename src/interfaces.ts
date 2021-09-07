export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T]

export enum ProviderName {
  TWILIO = 'TWILIO',
  SENDGRID = 'SENDGRID',
  SLACK = 'SLACK',
}

export enum ProviderType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  DIRECT_MESSAGE = 'DIRECT_MESSAGE',
}

export type ProviderConstructorOptions =
  | SendgridConstructorOptions
  | TwilioConstructorOptions
  | SlackConstructorOptions

export type ProviderClass = { new (...args: any[]): InstantiatedProvider }

export type InstantiatedProvider = {
  name: ProviderName
  type: ProviderType
  send(data: ProviderOptions): Promise<any>
}

export interface Provider {
  name: ProviderName
  type: ProviderType
  options: ProviderConstructorOptions
}

export interface SlackConstructorOptions {
  token: string
  channel?: string
}

export interface SendgridConstructorOptions {
  apiKey: string
}

export interface TwilioConstructorOptions {
  accountSid: string
  authToken: string
  from?: string
}

export type BaseEmailOptions = {
  to: string
  from: string | string[]
  subject: string
}

export interface BaseSmsOptions {
  to: string
  from: string
  body: string
}

export interface BaseDirectMessageOptions {
  text: string
}

export type ProviderOptions = BaseEmailOptions | BaseSmsOptions | BaseDirectMessageOptions

export type SendgridBody = {
  html: string
  text: string
}

export type SendgridEmailOptions = BaseEmailOptions & AtLeastOne<SendgridBody>
export type TwilioSmsOptions = BaseSmsOptions
export type SlackDirectMessageOptions = BaseDirectMessageOptions & {
  channel?: string
}
export type SmsOptions = TwilioSmsOptions
export type EmailOptions = SendgridEmailOptions
export type DirectMessageOptions = SlackDirectMessageOptions

/***
 * Logger definitions exported from nestjs
 */
interface LogBufferRecord {
  /**
   * Method to execute.
   */
  methodRef: Function
  /**
   * Arguments to pass to the method.
   */
  arguments: unknown[]
}
export declare type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose'
export interface LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]): any
  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]): any
  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]): any
  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]): any
  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]): any
  /**
   * Set log levels.
   * @param levels log levels
   */
  setLogLevels?(levels: LogLevel[]): any
}

export declare class Logger implements LoggerService {
  protected context?: string
  protected options: {
    timestamp?: boolean
  }
  protected static logBuffer: LogBufferRecord[]
  protected static staticInstanceRef?: LoggerService
  protected static logLevels?: LogLevel[]
  private static isBufferAttached
  protected localInstanceRef?: LoggerService
  private static WrapBuffer
  constructor()
  constructor(context: string)
  constructor(
    context: string,
    options?: {
      timestamp?: boolean
    }
  )
  get localInstance(): LoggerService
  /**
   * Write an 'error' level log.
   */
  error(message: any, stack?: string, context?: string): void
  error(message: any, ...optionalParams: [...any, string?, string?]): void
  /**
   * Write a 'log' level log.
   */
  log(message: any, context?: string): void
  log(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'warn' level log.
   */
  warn(message: any, context?: string): void
  warn(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'debug' level log.
   */
  debug(message: any, context?: string): void
  debug(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, context?: string): void
  verbose(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write an 'error' level log.
   */
  static error(message: any, context?: string): void
  static error(message: any, stack?: string, context?: string): void
  static error(message: any, ...optionalParams: [...any, string?, string?]): void
  /**
   * Write a 'log' level log.
   */
  static log(message: any, context?: string): void
  static log(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'warn' level log.
   */
  static warn(message: any, context?: string): void
  static warn(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'debug' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  static debug(message: any, context?: string): void
  static debug(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Write a 'verbose' level log.
   */
  static verbose(message: any, context?: string): void
  static verbose(message: any, ...optionalParams: [...any, string?]): void
  /**
   * Print buffered logs and detach buffer.
   */
  static flush(): void
  /**
   * Attach buffer.
   * Turns on initialisation logs buffering.
   */
  static attachBuffer(): void
  /**
   * Detach buffer.
   * Turns off initialisation logs buffering.
   */
  static detachBuffer(): void
  static getTimestamp(): string
  static overrideLogger(logger: LoggerService | LogLevel[] | boolean): any
  static isLevelEnabled(level: LogLevel): boolean
  private registerLocalInstanceRef
}
