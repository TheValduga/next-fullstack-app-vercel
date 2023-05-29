// pages/api/post/index.ts

import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, userid  } = req.body;
  const result = await prisma.post.create({
    
    data: {
      title: title,
      content: content,
      author: { connect: { id: userid } },
    },
  });
  res.json(result);
}