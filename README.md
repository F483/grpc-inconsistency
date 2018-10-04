# GRPC Inconsistency

Generated api does not preserve case of message fields!

Based on [static code gen example](https://github.com/grpc/grpc/tree/master/examples/node/static_codegen)

See package.json for how it was compiled (based on the above example).

Code below from gererated proto/api_pb.js


    proto.test.TestInput.toObject = function(includeInstance, msg) {
      var f, obj = {
        fieldalpha: jspb.Message.getFieldWithDefault(msg, 1, ""),
        fieldbeta: jspb.Message.getFieldWithDefault(msg, 2, ""),
        fieldgamma: jspb.Message.getFieldWithDefault(msg, 3, "")
      };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
    }
