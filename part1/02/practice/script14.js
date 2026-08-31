"use strict"

function Player() {
    this.status = "alive";
    this.healthPoint = 100;
    this.experience = 0;

    this.getDamage = function (damage) {
        this.healthPoint -= damage;

        if(this.healthPoint < 1) {
            this.status = "dead";
            alert(this.showStatus());
        } else {
            return this.healthPoint;
        }
    };

    this.getMedicine = function (health) {
        if(this.isDead()) {
            return `Sorry but you're already dead...`;
        }

        this.healthPoint += health;
        return this.healthPoint;
    };

    this.getExperience = function (experience) {
        if(this.isDead()) {
            return `Sorry but you're already dead...`;
        }

        this.experience += experience;
        return this.experience;
    }

    this.showStatus = function () {
        return this.status;
    };

    this.isDead = function () {
        return this.status === "dead";
    }
}