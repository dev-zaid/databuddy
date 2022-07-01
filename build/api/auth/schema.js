"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationSchema = exports.getProfileSchema = exports.signUpSchema = exports.loginSchema = void 0;
const yup = __importStar(require("yup"));
const login = {
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
};
const signUp = {
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    phone: yup.number().required(),
};
const getProfile = {
    authorization: yup.string().required(),
};
const verify = {
    phone: yup.number().required(),
    status: yup.boolean().required(),
};
exports.loginSchema = new yup.ObjectSchema(login);
exports.signUpSchema = new yup.ObjectSchema(signUp);
exports.getProfileSchema = new yup.ObjectSchema(getProfile);
exports.verificationSchema = new yup.ObjectSchema(verify);
//# sourceMappingURL=schema.js.map