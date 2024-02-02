const User = require('../Models/UserModels')

async function viewUser(req, res) {
    try {
     const userId = req.user._id;
     const currentUser = await User.findOne({_id: userId})
     
     res.status(200).json({ message: 'User Found' , succes: true, currentUser})
     }

    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
} 

async function deleteUser(req, res){
    try {
        const userId = req.user._id;
        const currentUser = await User.findOne({_id: userId});
    
        if (req.user._id.toString() !== currentUser._id.toString()) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const deletedUser = await User.findOneAndDelete({_id: userId});

        res.status(200).json({ message: 'User Deleted' , succes: true});
        }
   
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
       }
}

async function updateUser(req, res){
    try {
        const userId = req.user._id;

        const { name, password } = req.body

        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { name, password }
        )

        res.status(200).json({ message: 'User Updated' , succes: true});
        }
   
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
       }
}

async function allUsers(req, res){
    try {
  
      const users = await User.find();
      res.status(200).json({message: "All blogs", success: true ,users});
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete the blog' });
    }
}


async function deleteUserAdmin(req, res){
    try {
        const { userId } = req.params;
        const currentUser = await User.findOne({_id: userId});
    
        if (req.user.role !== "admin") {
            return res.status(401).json({message: 'Unauthorized'});
        }

        const deletedUser = await User.findOneAndDelete({_id: userId});

        res.status(200).json({ message: 'User Deleted' , succes: true});
        }
   
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
       }
}


module.exports = {
    deleteUser, viewUser, updateUser, allUsers, deleteUserAdmin
};
 