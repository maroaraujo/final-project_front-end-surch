![Logo](/reconnect/public/images/logo.png)

# Final Project - Reconnect by Team SURCH

## Index

- [Project Description](#project-description)

* [Team Manifesto]()

* [User Manual]()

---

Who we are

[Steven Cheung](https://github.com/StevenCK1)

[Leigh Eastell](https://github.com/Leigh-Eastell),

[Wanteng](https://github.com/ten-hub),

[Ismail Ali](https://githttps://github.com/),

[Maria Roberta AEMoller](https://github.com/maroaraujo),
Team Manifesto

Brief
The brief was to create an app that will solve a real world
problem people are facing and how technology could be used to solve it.

How to start locally

How to download as an app

Project description

Skills and retrospect

Colour and Font references

Testing

Future Vision

## API Reference

#### OUr API is hosted on [API URL](https://reconnect-surch.herokuapp.com/)

#### Mood

| Method | Path            | Additional Info                                                                           | Result                                    | Response                                                                 |
| ------ | --------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| GET    | /mood           |                                                                                           | Daily log of the user's mood              | { success: True, payload: User's mood array }                            |
| POST   | /mood           | { date: YYYY-MM-DD, mood: String, whatmakesfeel: String, notes: String , userId: Number } | Create a new entry of the user's mood     | { success: True, payload: User's mood entry object }                     |
| DELETE | /mood/<mood_id> |                                                                                           | Delete the user's mood entry at <mood_id> | { success: True, payload: The mood with id: <mood_id> has been deleted } |

#### Gratitude

| Method | Path                      | Additional Info                                        | Result                           | Response                                                                     |
| ------ | ------------------------- | ------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| GET    | /gratitude                |                                                        | Log of the user's gratitude wall | { success: True, payload: Skills array }                                     |
| POST   | /gratitude                | [{ userId: String, complete: Boolean, notes: String }] | create a new skill               | { success: True, payload: new skills was added to database }                 |
| DELETE | /gratitude/<gratitude_id> |                                                        | delete skill by ID               | { success: True, payload: The skills with id: <skills_id> has been deleted } |

| Method | Path              | Additional Info                                  | Result             | Response                                                                  |
| ------ | ----------------- | ------------------------------------------------ | ------------------ | ------------------------------------------------------------------------- |
| GET    | /goals            |                                                  | all goals          | { success: True, payload: Goals array }                                   |
| POST   | /goals            | [{ title: String, star: Number, notes: String }] | create a new goal  | { success: True, payload: new goals was added to database }               |
| PUT    | /goals/<goals_id> | { title: String, star: Number, notes: String }   | updated goal by ID | { success: True, message: You've updated a goal, payload: Updated goal }  |
| DELETE | /goals/<goals_id> |                                                  | delete goal by ID  | { success: True, payload: The goal with id: <goals_id> has been deleted } |
