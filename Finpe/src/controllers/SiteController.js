const { Transactions } = require("../../app/controllers/TransactionController");
// const { Users } = require("../../app/controllers/UserController");

class SiteController {
  static home(req, res) {
    res.render("index", { title: "Finpe" });
  }

  static login(req, res) {
    res.render("login");
  }

  static async main(req, res) {
    const transactions = await Transactions.findAll();
    res.render("main", { transactions });
  }
}

module.exports = SiteController;
