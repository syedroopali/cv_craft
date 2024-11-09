import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requried: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
});

export const User = mongoose.models.user || mongoose.model("user", userSchema);
