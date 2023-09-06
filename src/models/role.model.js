const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongoose;

const RoleSchema = new Schema({
  _id: {
    type: Schema.Types.UUID,
    required: true,
    default: uuidv4()
  },
  name: {
    type: Schema.Types.String,
    required: [true, "Name of role is required"]
  },
  permissions: {
    type: []
  }
});

RoleSchema.set("timestamps", true);

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
