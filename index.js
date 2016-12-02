'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(logger('dev'))
server.use(express.static('public'))
server.use('/bower_components', express.static('bower_components'))

const models = require('./models/index')

server.get('/ping', (request, response) => response.json({ response: 'PONG' }))

server.post('/users', (request, response) => models.User.create({
  email: request.body.email,
  password: request.body.password
}).then(data => response.send(data)).catch(err => response.send(err)))

server.get('/users', (request, response) => {
  models.User.findAll({})
    .then(users => response.json(users))
    .catch(err => response.send(err))
})

server.post('/questions', (request, response) => models.Question.create({
  // UserId: request.body.UserId,
  begin: request.body.begin,
  end: request.body.end,
  prompt: request.body.prompt,
  summary: request.body.summary
}).then(data => response.send(data)).catch(err => response.send(err)))

server.delete('/questions/:questionId', (request, response) => models.Question.destroy({
  where: {
    id: request.params.questionId
  }
}).then(question => response.json(question)).catch(err => response.send(err)))

// server.delete('/questions', (request, response) => {
//   console.log(request.body)
// })

server.get('/questions', (request, response) => models.Question.findAll({})
  .then(questions => response.json(questions))
  .catch(err => response.send(err)))

server.get('/questions/:questionId', (request, response) => models.Question.findOne({
  where: {
    id: request.params.questionId
  }
}).then(question => response.json(question)).catch(err => response.json(err)))

server.get('/users/:userId/questions', (request, response) => models.Question.findAll({
  where: {
    UserId: request.params.userId
  }
}).then(questions => response.json(questions)).catch(err => response.send(err)))

// DEV ONLY
server.get('/decisions', (request, response) => models.Decision.findAll({})
  .then(decisions => response.json(decisions))
  .catch(err => response.send(err)))

server.get('/questions/:questionId/decisions', (request, response) => models.Decision.findAll({
  where: {
    QuestionId: request.params.questionId
  }
}).then(decisions => response.json(decisions)).catch(err => response.send(err)))

server.post('/questions/:questionId/decisions', (request, response) => models.Decision.create({
  QuestionId: request.params.questionId,
  title: request.body.title,
  // summary: request.body.summary
}).then(decision => response.json(decision))
  .catch(err => response.send(err)))

server.delete('/questions/:questionId/decisions/:decisionId', (request, response) => models.Decision.destroy({
  where: {
    id: request.params.decisionId,
    QuestionId: request.params.questionId
  }
}).then(decision => response.json(decision).catch(err => response.send(err))))

// DEV ONLY
server.get('/votes', (request, response) => models.Vote.findAll({})
  .then(votes => response.json(votes))
  .catch(err => response.send(err)))

server.get('/questions/:questionId/votes/', (request, response) => models.Vote.findAll({
  QuestionId: questionId
}).then(votes => response.json(votes))
  .catch(err => response.send(err)))

server.post('/questions/:questionId/votes', (request, response) => models.Vote.create({
  QuestionId: questionId,
  UserId: request.body.user_id,
  DecisionId: request.body.decision_id
}).then(vote => response.json(vote))
  .catch(err => response.send(err)))

const PORT = 4000
server.listen(PORT, console.log(`Server running on port ${PORT}`))
