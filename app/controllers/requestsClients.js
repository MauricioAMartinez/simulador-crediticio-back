const requestsClientsModel = require("../models/requestsClients");

const createRequestClient = async (req, res) => {
  try {
    const requestClient = new requestsClientsModel(req.body);
    await requestClient.save();
    res.status(201).send(requestClient);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getRequestClients = async (req, res) => {
  try {
    const requestClients = await requestsClientsModel.find({});
    res.status(200).send(requestClients);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getRequestClientById = async (req, res) => {
  try {
    const requestClient = await requestsClientsModel.findById(req.params.id);
    if (!requestClient) {
      return res.status(404).send("Request Client not found");
    }
    res.status(200).send(requestClient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateRequestClient = async (req, res) => {};

const deleteRequestClient = async (req, res) => {
  try {
    const requestClient = await requestsClientsModel.findByIdAndDelete(
      req.params.id
    );
    if (!requestClient) {
      return res.status(404).send("Request Client not found");
    }
    res.status(200).send(requestClient);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createRequestClient,
  getRequestClients,
  getRequestClientById,
  updateRequestClient,
  deleteRequestClient,
};
