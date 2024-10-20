import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User extends  Document {
  @Prop({ required: true })
  name: string;

  @Prop({unique:true, required: true })
  email: string;
  
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre('save', async function (next) {
  const user = this as UserDocument;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  next();
});