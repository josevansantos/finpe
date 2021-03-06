const { TransactionModel, UserModel } = require('../database/models');

class TransactionController {
  async index(req, res) {
    try {
      const transactions = await TransactionModel.findAll({
        where: {
          userId: req.userId,
        },
        order: [['date', 'DESC']],
      });
      return res
        .status(200)
        .json({ transactions, userId: req.userId, admin: req.isAdmin });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const transaction = await TransactionModel.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: UserModel,
          as: 'user',
        },
      });
      return res.status(200).json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const tra = {
        ...req.body,
        userId: req.userId,
      };
      const transaction = await TransactionModel.create(tra);
      return res.status(200).json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const transaction = await TransactionModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const transaction = await TransactionModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();
