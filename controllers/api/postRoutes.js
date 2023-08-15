const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      content: req.session.content,
      date_created: req.session.date_created,
      post_id: req.session.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const DeletedData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!DeletedData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(DeletedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
