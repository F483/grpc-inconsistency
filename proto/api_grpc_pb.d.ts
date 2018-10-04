// package: test
// file: api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as api_pb from "./api_pb";

interface ITestApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    testCall: ITestApiService_ITestCall;
}

interface ITestApiService_ITestCall extends grpc.MethodDefinition<api_pb.TestInput, api_pb.TestOutput> {
    path: string; // "/test.TestApi/TestCall"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<api_pb.TestInput>;
    requestDeserialize: grpc.deserialize<api_pb.TestInput>;
    responseSerialize: grpc.serialize<api_pb.TestOutput>;
    responseDeserialize: grpc.deserialize<api_pb.TestOutput>;
}

export const TestApiService: ITestApiService;

export interface ITestApiServer {
    testCall: grpc.handleUnaryCall<api_pb.TestInput, api_pb.TestOutput>;
}

export interface ITestApiClient {
    testCall(request: api_pb.TestInput, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
    testCall(request: api_pb.TestInput, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
    testCall(request: api_pb.TestInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
}

export class TestApiClient extends grpc.Client implements ITestApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public testCall(request: api_pb.TestInput, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
    public testCall(request: api_pb.TestInput, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
    public testCall(request: api_pb.TestInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: api_pb.TestOutput) => void): grpc.ClientUnaryCall;
}
