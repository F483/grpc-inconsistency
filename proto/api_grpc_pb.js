// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_pb = require('./api_pb.js');

function serialize_test_TestInput(arg) {
  if (!(arg instanceof api_pb.TestInput)) {
    throw new Error('Expected argument of type test.TestInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_TestInput(buffer_arg) {
  return api_pb.TestInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_TestOutput(arg) {
  if (!(arg instanceof api_pb.TestOutput)) {
    throw new Error('Expected argument of type test.TestOutput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_TestOutput(buffer_arg) {
  return api_pb.TestOutput.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestApiService = exports.TestApiService = {
  testCall: {
    path: '/test.TestApi/TestCall',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TestInput,
    responseType: api_pb.TestOutput,
    requestSerialize: serialize_test_TestInput,
    requestDeserialize: deserialize_test_TestInput,
    responseSerialize: serialize_test_TestOutput,
    responseDeserialize: deserialize_test_TestOutput,
  },
};

exports.TestApiClient = grpc.makeGenericClientConstructor(TestApiService);
