import User from "../models/user.model";

const register = async (req: any, res: any)=>{
  console.log(req.body)
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
} 

const login = async (req: any, res: any)=>{ 
	try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: 'Unable to login' });
  }
}

const me = async (req: any, res: any)=>{ 
	try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).send();
    }
    res.send(users[0]);
  } catch (error) {
    res.status(500).send(error);
  } 
}

export { 
	register, 
	login,
  me 
}
