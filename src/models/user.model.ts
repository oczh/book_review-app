import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

interface IUserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): Promise<IUser>;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Jelszó hashelése mentés előtt
UserSchema.pre<IUser>('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Felhasználó keresése email és jelszó alapján
UserSchema.statics.findByCredentials = async function (email: string, password: string) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

const User = mongoose.model<IUser, IUserModel>('User', UserSchema);

export default User;