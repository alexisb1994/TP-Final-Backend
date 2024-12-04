import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, // Elimina los espacios antes y después del nombre de usuario
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // Valida el formato del correo electrónico
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("users", userSchema);

const register = async (dataUser) => {
  try {
    const { username, password, email } = dataUser;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return null; 
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return null; 
    }

    const alg = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, alg);

    const newUser = new User({ username, password: hashedPass, email });
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    console.error("Error during registration:", error);
    throw new Error("Registration failed");
  }
};

const login = async (dataUser) => {
  try {
    const { username, password } = dataUser;

    const user = await User.findOne({ username });
    if (!user) {
      return null; 
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

export default { register, login };