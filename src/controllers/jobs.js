const { NotFoundError, BadRequestError } = require("../errors");
const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  console.log(req.user);
  const job = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ job, count: job.length });
};
const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`No such id ${userId}`);
  }
  res.status(StatusCodes.OK).json(job);
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
    body: { company, position },
  } = req;
  if (company === "" || position === "") {
    throw new BadRequestError("company and position must be provided");
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!job) {
    throw new NotFoundError(`No job with id: ${userId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};
const deleteJob = async (req, res) => {
  const {
    params: { id: jobId },
    user: { createdBy: userId },
  } = req;
  const job = await Job.findByIdAndDelete({ _id: jobId, createdBy: userId });
  if (!jobId) {
    throw new NotFoundError(`No job with such id: ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ Deleted: { job } });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
