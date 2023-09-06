const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: Schema.Types.UUID,
    required: true,
    default: uuidv4()
  },
  email: {
    type: Schema.Types.String,
    required: [true, "Email of user is required"],
    unique: true
  },
  password: {
    type: Schema.Types.String,
    required: [true, "Password of user is required"]
  },
  firstName: {
    type: Schema.Types.String,
    required: [true, "First name of user is required"]
  },
  lastName: {
    type: Schema.Types.String
  },
  gender: {
    type: Schema.Types.String,
    enum: ["MALE", "FEMALE"]
  },
  roles: {
    type: []
  },
  isActive: {
    type: Schema.Types.Boolean,
    default: true
  }
});

UserSchema.set("timestamps", true);

UserSchema.index({ email: 1 });

const User = mongoose.model("User", UserSchema);

module.exports = User;
