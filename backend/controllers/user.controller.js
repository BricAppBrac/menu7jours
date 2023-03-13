const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

// fonction pour enregistrer de nouveaux utilisateurs
// SIGNUP
module.exports.signup = (req, res) => {
  // crypter le mot de passe
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new UserModel({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé!" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// fonction pour connecter des utilisateurs existants
// SIGNIN

module.exports.signin = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Identifiant et/ou Mot de passe incorrects" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "Identifiant et/ou Mot de passe incorrects" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { userId: user._id },
                  // Puisque cette chaîne sert de clé pour le chiffrement et le déchiffrement du token, elle doit être difficile à deviner, sinon n’importe qui pourrait générer un token en se faisant passer pour notre serveur :
                  "RANDOM_TOKEN_SECRET",
                  {
                    expiresIn: "24h",
                  }
                ),
              });
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
