![Logo](/reconnect/public/images/logo.png)

# Final Project - Reconnect by Team SURCH

## Index

- [Project Description](#project-description)

* [User Manual]()

---

Who we are

[Steven Cheung](https://github.com/StevenCK1)

[Leigh Eastell](https://github.com/Leigh-Eastell),

[Wanteng](https://github.com/ten-hub),

[Ismail Ali](https://githttps://github.com/Ismailali99),

[Maria Roberta AEMoller](https://github.com/maroaraujo),

Brief
The brief was to create an app that will solve a real world
problem people are facing and how technology could be used to solve it.

How to start locally

How to download as an app

Project description

Skills and retrospect

Colour and Font references
(maria writting)
Testing

Future Vision

## API Reference

#### Our API is hosted on [API URL](https://reconnect-surch.herokuapp.com/)

#### Mood

| Method | Path            | Additional Info                                                                           | Result                                    | Response                                                                 |
| ------ | --------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| GET    | /mood           |                                                                                           | Daily log of the user's mood              | { success: True, payload: User's mood array }                            |
| POST   | /mood           | { date: YYYY-MM-DD, mood: String, whatmakesfeel: String, notes: String , userId: Number } | Create a new entry of the user's mood     | { success: True, payload: User's mood entry object }                     |
| DELETE | /mood/<mood_id> |                                                                                           | Delete the user's mood entry at <mood_id> | { success: True, payload: The mood with id: <mood_id> has been deleted } |

#### Gratitude

| Method | Path                      | Additional Info                                         | Result                                              | Response                                                                           |
| ------ | ------------------------- | ------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| GET    | /gratitude                |                                                         | Log of the user's gratitude wall                    | { success: True, payload: User's gratitude array }                                 |
| POST   | /gratitude                | { gratitude: String, date: YYYY-MM-DD, userId: Number } | Create a new entry for the user's gratitude wall    | { success: True, payload: User's gratitude entry object }                          |
| DELETE | /gratitude/<gratitude_id> |                                                         | Delete the user's gratitude entry at <gratitude_id> | { success: True, payload: The gratitude with id: <gratitude_id> has been deleted } |

#### Achievement

| Method | Path                          | Additional Info                                              | Result                                 | Response                                                                           |
| ------ | ----------------------------- | ------------------------------------------------------------ | -------------------------------------- | ---------------------------------------------------------------------------------- |
| GET    | /achievement                  |                                                              | All achievement of the week            | { success: True, payload: achievement array }                                      |
| PUT    | /achievement/<achievement_id> | { achievement: String, completion: Boolean, userId: Number } | Update achievement by <achievement_id> | { success: True, payload: You have updated achievement with id: <achievement_id> } |
