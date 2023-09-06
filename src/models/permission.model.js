const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongoose;

const PermissionSchema = new Schema({
  _id: {
    type: Schema.Types.UUID,
    required: true,
    default: uuidv4()
  },
  name: {
    type: Schema.Types.String,
    required: [true, "Name of permission is required"]
  }
  // createdBy: {
  //   type: Schema.Types.UUID,
  //   ref: "User",
  //   required: [true, "Created by detail of the permission is required"]
  // },
  // modifiedBy: {
  //   type: Schema.Types.UUID,
  //   ref: "User",
  //   required: [true, "Modified by detail of the permission is required"]
  // }
});

const Permission = mongoose.model("Permission", PermissionSchema);

module.exports = Permission;
