CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255),
    other_team_details TEXT
);

CREATE TABLE judges (
    judge_id SERIAL PRIMARY KEY,
    judge_name VARCHAR(255),
    judge_password VARCHAR(255)
);

CREATE TABLE parameters (
    parameter_id SERIAL PRIMARY KEY,
    parameter_name VARCHAR(255),
    parameter_description TEXT
);

CREATE TABLE scores (
    score_id SERIAL PRIMARY KEY,
    judge_id INTEGER,
    team_id INTEGER,
    parameter_id INTEGER,
    score_value INTEGER,
    FOREIGN KEY (judge_id) REFERENCES judges(judge_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    FOREIGN KEY (parameter_id) REFERENCES parameters(parameter_id)   
);

CREATE TABLE competitions (
    competition_id SERIAL PRIMARY KEY,
    competition_name VARCHAR(255),
    competition_password VARCHAR(255)
);

ALTER TABLE teams ADD COLUMN competition_id INTEGER;
ALTER TABLE judges ADD COLUMN competition_id INTEGER;
ALTER TABLE parameters ADD COLUMN competition_id INTEGER;
ALTER TABLE scores ADD COLUMN competition_id INTEGER;

ALTER TABLE teams ADD CONSTRAINT fk_teams_competition FOREIGN KEY (competition_id) REFERENCES competitions(competition_id);
ALTER TABLE judges ADD CONSTRAINT fk_judges_competition FOREIGN KEY (competition_id) REFERENCES competitions(competition_id);
ALTER TABLE parameters ADD CONSTRAINT fk_parameters_competition FOREIGN KEY (competition_id) REFERENCES competitions(competition_id);
ALTER TABLE scores ADD CONSTRAINT fk_scores_competition FOREIGN KEY (competition_id) REFERENCES competitions(competition_id);
