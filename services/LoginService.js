const userDAO = require('../dao/UserDAO');

module.exports = {

    login : (email, password) => {
        return userDAO.findUserByEmailAndPassword(email, password);

    },

    register : (user) => {
        if(!user.email){
            throw new Error('Données invalides');
        }
        user.registered = new Date().toISOString();
        user.isActive = true;
        return userDAO.create(user);
    }


}
