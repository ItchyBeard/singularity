const killer = {
    "Double Killer": {
        "tiers": {
            "t1": "5",
            "t2": "25",
            "t3": "50",
        },
        "description": "Earn ${amount} Double Kill Medals (2 rapid Kills)"
    },
    "Triple Killer": {
        "tiers": {
            "t1": "5",
            "t2": "25",
            "t3": "50",
        },
        "description": "Earn ${amount} Triple Kill Medals (3 rapid Kills)"
    },
    "Fury Killer": {
        "description": "Earn a Fury Kill Medal (4 rapid Kills)"
    },
    "Bloodthirsty Killer": {
        "tiers": {
            "t1": "10",
            "t2": "25",
            "t3": "50",
        },
        "description": "Earn ${amount} Bloodthirsty Medals (5 Kills without dying)"
    },
    "Merciless Killer": {
        "tiers": {
            "t1": "1",
            "t2": "3",
            "t3": "5",
        },
        "description": "Earn ${amount} Merciless Medal(s) (10 Kills without dying)"
    },
    "Ruthless Killer": {
        "description": "Earn a Ruthless Medal (15 Kills without dying)"
    },
}
const goingHam = {
    "Finders Keepers": {
        "tiers": {
            "t1": "1",
            "t2": "2",
            "t3": "3",
        },
        "description": "Get a Triple Kill with an enemy Weapon you've picked up ${amount} time(s)"
    },
    "Slice & Dice": {
        "description": "Get a Triple Kill with a Melee Weapon"
    },
    "Power Tools": {
        "description": "Get a Triple Kill using a Weapon Scorestreak"
    },
    "Full Auto Mayhem": {
        "description": "Get 3 Kills with an LMG without releasing the trigger"
    },
    "Saving Ammo": {
        "description": "Earn a Collateral Medal (Killed multiple uninjured enemies with the same shot)"
    },
    "Four Piece Dinner": {
        "description": "Earn a Quad Feed Medal (4 uninterrupted Kills in the Kill Feed)"
    },
}
const humiliation = {
    "Sneak Attack": {
        "tiers": {
            "t1": "5",
            "t2": "10",
            "t3": "15",
        },
        "description": "Earn ${amount} Back Stabber Medals (Kill an enemy from behind with a Melee Weapon)"
    },
    "From the Grave": {
        "tiers": {
            "t1": "5",
            "t2": "10",
            "t3": "15",
        },
        "description": "Earn ${amount} Afterlife Medals (Killed an enemy after you died)"
    },
    "Unforgiving": {
        "tiers": {
            "t1": "5",
            "t2": "10",
            "t3": "30",
        },
        "description": "Earn ${amount} Revenge Medals (Kill the enemy who killed you)"
    },
    "Sticky Bomber": {
        "tiers": {
            "t1": "1",
            "t2": "10",
            "t3": "25",
        },
        "description": "Earn ${amount} Stuck Medals (Stick an enemy with Semtex)"   
    },
    "Silent Assassin": {
        "description": "Get a Kill with a Melee Weapon from behind while cloaked by your Active Camo Field Upgrade"
    },
}

export default {killer, goingHam, humiliation}