const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllLinks } = require('../domain/links');

const getAllLinks = async (req, res) => {
  console.log('getAllLinks');

  try {
    const allLinks = await findAllLinks();
    console.log('allLinks', allLinks);

    if (!allLinks) {
      return res
        .status(404)
        .json({ error: error.message, message: `No links found` });
    }
    return res.status(201).json({
      message: `Found ${allLinks.length} links`,
      code: `201`,
      data: allLinks,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      code: `500`,
      error: error.message,
    });
  }
};

// const getPosts = async (req, res) => {
//   const { category } = req.query;

//   try {
//     //
//     if (!category) {
//       const foundPosts = await findAllPosts();

//     if (!foundPosts) {
//       return res
//         .status(404)
//         .json({ error: error.message, message: `No posts found` });
//     }
//     //
//     return res.status(200).json({
//       message: `Found ${foundPosts.length} posts`,
//       code: `201`,
//       data: foundPosts,
//     });
//     }

//     // Else return find post by category
//     const foundPosts = await findPostsByCategory(category);

//     if (!foundPosts) {
//       return res
//         .status(404)
//         .json({ error: `Posts not found or don't exist`, code: `404` });
//     }
//     //
//     return res.status(201).json({
//       message: `Found ${foundPosts.length} posts found for category: ${category}`,
//       code: `201`,
//       data: foundPosts,
//     });

//   } catch (error) {
//     //
//     return res.status(500).json({
//       message: `Internal server error`,
//       code: `500`,
//       error: error.message,
//     });
//   }
// };

module.exports = {
  getAllLinks,
};
