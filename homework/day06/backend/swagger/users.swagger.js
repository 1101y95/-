/**
 * @swagger
 * /users:
 *      get:
 *          summary: 철수의 프로필
 *          tags: [Board]
 *          parameters:
 *              - in: query
 *                name: number
 *                type: int
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *          
 *                                type: object
 *                                & properties:
 *                                     
 *                                      
 *                                        email:
 *                                          type: string
 *                                          example: aaa@gmail.com
 *                                        name:
 *                                          type: string
 *                                          example: 철수
 *                                        phone:
 *                                          type: string
 *                                          example: 01012345678
 *                                        personal:
 *                                          type: string
 *                                          example: 220110-2222222
 *                                        prefer:
 *                                          type: string
 *                                          example: http://naver.com       
 *                                * properties: 
 *                                      
 *                                        email:
 *                                          type: string
 *                                          example: aaa@gmail.com
 *                                        name:
 *                                          type: string
 *                                          example: 철수
 *                                        phone:
 *                                          type: string
 *                                          example: 01012345678
 *                                        personal:
 *                                          type: string
 *                                          example: 220110-2222222
 *                                        prefer:
 *                                          type: string
 *                                          example: http://naver.com  
 * 
 * 
 * 
 * 
 * 
 */

/**
 * @swagger
 * /boards:
 *       post:
 *          summary: 게시글 등록하기
 *          tags: [Board]
 *          parameters:
 *              - in: query
 *                name: writer
 *                type: string
 *              - in: query
 *                name: password
 *                type: string
 *              - in: query
 *                name: title
 *                type: string
 *              - in: query
 *                name: contents
 *                type: string
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties: 
 *                                  a: 
 *                                    example:
 *                                      email : "aaa@gmail.com" 
 *                                      name : "철수"
 *                                      phone : "01012345678"
 *                                      personal : "220110-2222222"
 *                                      prefer : "https://naver.com"
 *                                  b: 
 *                                    example:
 *                                      email : "aaa@gmail.com" 
 *                                      name : "철수"
 *                                      phone : "01012345678"
 *                                      personal : "220110-2222222"
 *                                      prefer : "https://naver.com"
 *                                  c:
 *                                    example: 
 *                                      email : "aaa@gmail.com" 
 *                                      name : "철수"
 *                                      phone : "01012345678"
 *                                      personal : "220110-2222222"
 *                                      prefer : "https://naver.com" 
 *                                  d: 
 *                                    example:
 *                                      email : "aaa@gmail.com" 
 *                                      name : "철수"
 *                                      phone : "01012345678"
 *                                      personal : "220110-2222222"
 *                                      prefer : "https://naver.com"   
 *                                  e: 
 *                                    example:
 *                                      email : "aaa@gmail.com" 
 *                                      name : "철수"
 *                                      phone : "01012345678"
 *                                      personal : "220110-2222222"
 *                                      prefer : "https://naver.com"         
 */