// package: test
// file: api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class TestInput extends jspb.Message { 
    getFieldalpha(): string;
    setFieldalpha(value: string): void;

    getFieldbeta(): string;
    setFieldbeta(value: string): void;

    getFieldgamma(): string;
    setFieldgamma(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestInput.AsObject;
    static toObject(includeInstance: boolean, msg: TestInput): TestInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestInput;
    static deserializeBinaryFromReader(message: TestInput, reader: jspb.BinaryReader): TestInput;
}

export namespace TestInput {
    export type AsObject = {
        fieldalpha: string,
        fieldbeta: string,
        fieldgamma: string,
    }
}

export class TestOutput extends jspb.Message { 
    getFielddelta(): string;
    setFielddelta(value: string): void;

    getFieldepsilon(): string;
    setFieldepsilon(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestOutput.AsObject;
    static toObject(includeInstance: boolean, msg: TestOutput): TestOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestOutput;
    static deserializeBinaryFromReader(message: TestOutput, reader: jspb.BinaryReader): TestOutput;
}

export namespace TestOutput {
    export type AsObject = {
        fielddelta: string,
        fieldepsilon: string,
    }
}
