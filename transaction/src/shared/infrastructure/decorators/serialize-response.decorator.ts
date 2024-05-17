import { UseInterceptors } from '@nestjs/common';
import {ResponseBaseDto} from "@shared/infrastructure/response-base-dto.abstract";
import {SerializeInterceptor} from "@shared/infrastructure/interceptors/serialize.interceptor";

export function SerializeResponseDto(dto: ResponseBaseDto): MethodDecorator & ClassDecorator {
    return UseInterceptors(new SerializeInterceptor(dto));
}