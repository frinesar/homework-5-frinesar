class Warrior{
    constructor(){
        this.warriorLevel = 1;
        this.warriorExperience  = 100;
        this.warriorAchievements = [];
    }

    rank(){
        return ['Pushover', 'Novice', 'Fighter', 'Warrior', 'Veteran', 'Sage', 'Elite', 'Conqueror', 'Champion', 'Master', 'Greatest'][Math.floor(this.warriorLevel / 10)];
    }

    level(){
        return this.warriorLevel;
    }

    experience(){
        return this.warriorExperience ;
    }

    achievements(){
        return this.warriorAchievements;
    }

    battle(level){
        if (level < 1 || level > 100){
            return 'Invalid level';
        }
        else if(level >= this.warriorLevel + 5 && Math.floor(this.warriorLevel / 10) !== Math.floor(level / 10)){
            return 'You\'ve been defeated';
        }
        else if (level === this.warriorLevel ){
            this.warriorExperience  = this.warriorExperience  + 10;
            return 'A good fight';
        }
        else if (level === this.warriorLevel - 1){
            this.warriorExperience  = this.warriorExperience  + 5;
            return 'A good fight';
        }
        else if (level <= this.warriorLevel - 2){
            return 'Easy fight';
        }
        else if (level > this.warriorLevel){
            this.warriorExperience  = this.warriorExperience  + 20 * (level - this.warriorLevel) ** 2;
            return 'An intense fight'; 
        }
    }

    training(trainingInfo){
        if (trainingInfo[2] > this.warriorLevel){
            return 'Not strong enough';
        }
        else {
            this.warriorAchievements = trainingInfo[0];
            this.warriorExperience  = this.warriorExperience  + trainingInfo[1];
            return trainingInfo[0]; 
        }
    }

    get warriorLevel(){
        return this._level;
    }

    set warriorLevel(value){
        if (value <= 100){
            this._level = value;
        }
    }

    get warriorExperience (){
        return this._expierence;
    }

    set warriorExperience (value){
        if(value <= 10000){
            this._expierence = value;
            this.warriorLevel = Math.floor(this.warriorExperience  / 100);
        }
        else {
            this._expierence = 10000;
            this.warriorLevel = 100;
        }
    }

    get warriorAchievements(){
        return this._warriorAchievements;
    }

    set warriorAchievements(value){
        if (Array.isArray(value)){
            this._warriorAchievements = [];
        }
        else {
            this._warriorAchievements.push(value);
        }
    }
}
