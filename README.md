# final-project_front-end

hello

## API Reference

#### OUr API is hosted on [API URL](https://reconnect-surch.herokuapp.com/)


#### Mood

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /mood                |                 | Daily log of the user's mood              | { success: True, payload: User's mood array }      |

#### Gratitude

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /skills              |                 | all skills                                | { success: True, payload: Skills array }    |
| POST   | /skills              | [{ details: String, complete: Boolean, notes: String }]        | create a new skill                        | { success: True, payload: new skills was added to database  } |
| PUT    | /skills/<skills_id>  | { details: String, complete: Boolean, notes: String }        | updated skill by ID                       | { success: True, message: You've updated a skill, payload: Updated skill  }       |
| DELETE | /skills/<skills_id>  |                 | delete skill by ID                            | { success: True, payload: The skills with id: <skills_id> has been deleted }       |

#### Achievement

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /goals              |                 | all goals                                | { success: True, payload: Goals array }    |
| POST   | /goals              | [{ title: String, star: Number, notes: String }]        | create a new goal                        | { success: True, payload: new goals was added to database  } |
| PUT    | /goals/<goals_id>  | { title: String, star: Number, notes: String }        | updated goal by ID                       | { success: True, message: You've updated a goal, payload: Updated goal  }       |
| DELETE | /goals/<goals_id>  |                 | delete goal by ID                            | { success: True, payload: The goal with id: <goals_id> has been deleted }       |
