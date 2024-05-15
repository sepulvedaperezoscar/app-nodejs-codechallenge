import { LoggerService } from "@nestjs/common";

import { Injectable } from "@shared/di/domain/injectable";
import { Logger, LoggerLevel } from "@shared/logger/domain/logger";

type CustomLoggerMessage = any;
type CustomLoggerOptionalParams = any[];

@Injectable()
export class CustomLoggerService implements LoggerService {
  constructor(private readonly logger: Logger) {}

  verbose(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams
  ) {
    this.call("debug", message, ...optionalParams);
  }

  debug(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    this.call("debug", message, ...optionalParams);
  }

  log(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    this.call("info", message, ...optionalParams);
  }

  warn(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    this.call("warn", message, ...optionalParams);
  }

  error(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    this.call("error", message, ...optionalParams);
  }

  fatal(
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    this.call("fatal", message, ...optionalParams);
  }

  private call(
    level: LoggerLevel,
    message: CustomLoggerMessage,
    ...optionalParams: CustomLoggerOptionalParams[]
  ) {
    const loggerMessage = {
      message: typeof message === "string" ? message : message?.message,
      attributes: {
        ...(optionalParams.length > 0
          ? { context: optionalParams.at(-1) }
          : {}),
        ...(optionalParams.length > 0 ? optionalParams.slice(0, -1) : {}),
      },
    };

    this.logger[level](loggerMessage.message, {
      attributes: loggerMessage.attributes,
    });
  }
}