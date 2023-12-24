const { PrismaClient } = require('@prisma/client');
const express = require('express');

const prisma = new PrismaClient();
const router = express.Router();

// get
router.get('/', async (req, res) => {
  const data = await prisma.book.findMany();

  res.send(data);
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    const reqId = req.params.id;

    const product = await prisma.book.findUnique({
      where: {
        id: reqId,
      },
    });

    res.send({
      message: 'Data berhasil ditemukan',
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      message: 'ID tidak ditemukan',
      data: error,
    });
  }
});

// post data
router.post('/', async (req, res) => {
  const reqBody = req.body;

  const product = await prisma.book.create({
    data: {
      authorName: reqBody.authorName,
      imgUrl: reqBody.imgUrl,
      category: reqBody.category,
      bookDescription: reqBody.bookDescription,
      bookTitle: reqBody.bookTitle,
      bookPdfUrl: reqBody.bookPdfUrl,
    },
  });

  res.send({
    message: 'Data berhasil ditambahkan!',
    data: product,
  });
});

// delete data
router.delete('/:id', async (req, res) => {
  try {
    const reqId = req.params.id;

    const product = await prisma.book.delete({
      where: {
        id: reqId,
      },
    });

    res.send({
      message: 'Data berhasil dihapus',
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      message: 'Data gagal dihapus',
      data: error,
    });
  }
});

// edit data using patch method
router.patch('/:id', async (req, res) => {
  const reqId = req.params.id;
  const reqBody = req.body;

  const product = await prisma.book.update({
    where: {
      id: reqId,
    },
    data: {
      authorName: reqBody.authorName,
      imgUrl: reqBody.imgUrl,
      category: reqBody.category,
      bookDescription: reqBody.bookDescription,
      bookTitle: reqBody.bookTitle,
      bookPdfUrl: reqBody.bookPdfUrl,
    },
  });

  res.send({
    message: 'Data berhasil diedit',
    data: product,
  });
});

module.exports = router;
