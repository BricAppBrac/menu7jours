const MenuModel = require("../models/menu.model");

// fonction pour récupérer tous les menus
module.exports.getMenus = async (req, res) => {
  const menus = await MenuModel.find();
  res.status(200).json(menus);
};

// fonction pour créer un menu (index, type, dayOne, meal1Id, meal1Title, meal2Id, meal2Title)
module.exports.setMenu = async (req, res) => {
  const menu = await MenuModel.create({
    prefNbJ: req.body.prefNbJ,
    prefNbMeal: req.body.prefNbMeal,
    prefDayOne: req.body.prefDayOne,
    menuJ: req.body.menuJ,
  });
  res.status(200).json(menu);
};

// fonction pour modifier un menu
module.exports.editMenu = async (req, res) => {
  const menu = await MenuModel.findById(req.params.id);
  console.log("editMenu controller");
  console.log("req.params.id : " + req.params.id);
  console.log("menu : ");
  console.log(menu);
  if (!menu) {
    res
      .status(400)
      .json({ message: "Modification impossible. Ce menu n'existe pas" });
  }

  const updateMenu = await MenuModel.findByIdAndUpdate(menu, req.body, {
    new: true,
  });
  console.log("updateMenu : " + updateMenu);
  res.status(200).json(updateMenu);
  console.log("status : " + res.statusCode);
};

// fonction pour supprimer un menu
module.exports.deleteMenu = async (req, res) => {
  const menu = await MenuModel.findById(req.params.id);

  if (!menu) {
    res
      .status(400)
      .json({ message: "Suppression impossible. Ce menu n'existe pas" });
  }

  await MenuModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Menu supprimé " + req.params.id });
};
