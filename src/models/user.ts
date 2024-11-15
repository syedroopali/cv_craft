import mongoose, { Schema } from "mongoose";

const cvSchema: Schema = new Schema({
  name: String,
  fatherName: String,
  cnic: String,
  dob: String,
  religion: String,
  meritalStatus: String,
  nationality: String,
  phone: String,
  email: String,
  address: String,
  organization: String,
  years: String,
  designation: String,
  metric: {
    institute: String,
    passingYear: String,
    certificate: String,
  },
  inter: {
    institute: String,
    passingYear: String,
    certificate: String,
  },
  graduation: {
    institute: String,
    passingYear: String,
    certificate: String,
  },
  masters: {
    institute: String,
    passingYear: String,
    certificate: String,
  },
});

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

  cvData: {
    type: cvSchema,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
});

export const User = mongoose.models.user || mongoose.model("user", userSchema);
