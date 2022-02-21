/**
 * @swagger
 * /boards:
 *     get:
 *         summary: 게시글 가져오기
 *         tags: [Board]
 *         parameters:
 *             - in: query
 *               name: number
 *               type: int
 *         response:
 *             200:
 *                 description: 성공
 *                 content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           properties:
 *                               number:
 *                                   type: int
 *                                   example: 1
 *                               writer:
 *                                   type: string
 *                                   example: 철수
 *                               title:
 *                                   type: string
 *                                   example: 제목
 *                               contents:
 *                                   type: string
 *                                   example: 내용
 */

/**
 * @swagger
 * /board:
 *     post:
 *         summary: 게시글 등록하기
 *         tags: [Board]
 *         parameters:
 *             - in: query
 *               name: writer
 *               type: string
 *             - in: query
 *               name: password
 *               type: string
 *             - in: query
 *               name: title
 *               type: string
 *             - in: query
 *               name: contents
 *               type: string
 *         response:
 *             200:
 *                 description: 성공
 *                 content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               message:
 *                                   type: string
 *                                   example: 게시글이 정상적으로 등록되었습니다
 */