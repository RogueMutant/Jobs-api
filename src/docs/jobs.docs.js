/**
 * @swagger
 * /api/v1/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: A list of jobs
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A job object
 *       404:
 *         description: Job not found
 */
/**
 * @swagger
 * /api/v1/jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - company
 *               - location
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Bad request
 */
/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */
/**
 * @swagger
 * /api/v1/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: A list of jobs
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A job object
 *       404:
 *         description: Job not found
 */
