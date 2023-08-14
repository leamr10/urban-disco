const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPostedProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPostedProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;