const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// POST (Create a new contact)
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('cse341').collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response.insertedId); // Requirement: Return new ID
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

// PUT (Update a contact)
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  if (response.modifiedCount > 0) {
    res.status(204).send(); // Requirement: Return success status (No Content)
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

// DELETE (Remove a contact)
const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('cse341').collection('contacts').deleteOne({ _id: userId }, true);
  if (response.deletedCount > 0) {
    res.status(200).send(); // Requirement: Return success status
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };