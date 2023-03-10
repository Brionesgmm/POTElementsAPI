const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const unknown = "?"

let elements = {
    "hydrogen": {
        "atomicNumber": 1,
        "symbol": "H",
        "atomicMass": 1.008,
        "meltingPoint": -259.14,
        "boilingPoint": -252.87,
        "chemicalGroup": "Nonmetal"
    },
    "helium": {
        "atomicNumber": 2,
        "symbol": "He",
        "atomicMass": 4.003,
        "meltingPoint": -272.2,
        "boilingPoint": -268.93,
        "chemicalGroup": "Noble gas"
    },
    "lithium": {
        "atomicNumber": 3,
        "symbol": "Li",
        "atomicMass": 6.94,
        "meltingPoint": 180.54,
        "boilingPoint": 1342,
        "chemicalGroup": "Alkali metal"
    },
    "beryllium": {
        "atomicNumber": 4,
        "symbol": "Be",
        "atomicMass": 9.012,
        "meltingPoint": 1278,
        "boilingPoint": 2970,
        "chemicalGroup": "Alkaline earth metal"
    },
    "boron": {
        "atomicNumber": 5,
        "symbol": "B",
        "atomicMass": 10.81,
        "meltingPoint": 2075,
        "boilingPoint": 3927,
        "chemicalGroup": "Metalloid"
    },
    "carbon": {
        "atomicNumber": 6,
        "symbol": "C",
        "atomicMass": 12.011,
        "meltingPoint": 3500,
        "boilingPoint": 4827,
        "chemicalGroup": "Nonmetal"
    },
    "nitrogen": {
        "atomicNumber": 7,
        "symbol": "N",
        "atomicMass": 14.007,
        "meltingPoint": -210.01,
        "boilingPoint": -195.79,
        "chemicalGroup": "Nonmetal"
    },
    "oxygen": {
        "atomicNumber": 8,
        "symbol": "O",
        "atomicMass": 15.999,
        "meltingPoint": -218.79,
        "boilingPoint": -183.0,
        "chemicalGroup": "Nonmetal"
    },
    "fluorine": {
        "atomicNumber": 9,
        "symbol": "F",
        "atomicMass": 18.998,
        "meltingPoint": -219.62,
        "boilingPoint": -188.14,
        "chemicalGroup": "Halogen"
    },
    "neon": {
        "atomicNumber": 10,
        "symbol": "Ne",
        "atomicMass": 20.18,
        "meltingPoint": -248.59,
        "boilingPoint": -246.08,
        "chemicalGroup": "Noble gas"
    },
    "sodium": {
        "atomicNumber": 11,
        "symbol": "Na",
        "atomicMass": 22.99,
        "meltingPoint": 97.72,
        "boilingPoint": 883,
        "chemicalGroup": "Alkali metal"
    },
    "magnesium": {
        "atomicNumber": 12,
        "symbol": "Mg",
        "atomicMass": 24.305,
        "meltingPoint": 650,
        "boilingPoint": 1090,
        "chemicalGroup": "Alkaline earth metal"
    },
    "aluminum": {
        "atomicNumber": 13,
        "symbol": "Al",
        "atomicMass": 26.982,
        "meltingPoint": 660.37,
        "boilingPoint": 2467,
        "chemicalGroup": "Post-transition metal"
    },
    "silicon": {
        "atomicNumber": 14,
        "symbol": "Si",
        "atomicMass": 28.085,
        "meltingPoint": 1414,
        "boilingPoint": 3265,
        "chemicalGroup": "Metalloid"
    },
    "phosphorus": {
        "atomicNumber": 15,
        "symbol": "P",
        "atomicMass": 30.974,
        "meltingPoint": 317.3,
        "boilingPoint": 553.6,
        "chemicalGroup": "Nonmetal"
    },
    "sulfur": {
        "atomicNumber": 16,
        "symbol": "S",
        "atomicMass": 32.06,
        "meltingPoint": 115.21,
        "boilingPoint": 444.6,
        "chemicalGroup": "Nonmetal"
    },
    "chlorine": {
        "atomicNumber": 17,
        "symbol": "Cl",
        "atomicMass": 35.45,
        "meltingPoint": -101.5,
        "boilingPoint": -34.04,
        "chemicalGroup": "Halogen"
    },
    "argon": {
        "atomicNumber": 18,
        "symbol": "Ar",
        "atomicMass": 39.948,
        "meltingPoint": -189.34,
        "boilingPoint": -185.86,
        "chemicalGroup": "Noble gas"
    },
    "potassium": {
        "atomicNumber": 19,
        "symbol": "K",
        "atomicMass": 39.098,
        "meltingPoint": 63.65,
        "boilingPoint": 759,
        "chemicalGroup": "Alkali metal"
    },
    "calcium": {
        "atomicNumber": 20,
        "symbol": "Ca",
        "atomicMass": 40.078,
        "meltingPoint": 839,
        "boilingPoint": 1484,
        "chemicalGroup": "Alkaline earth metal"
    },
    "scandium": {
        "atomicNumber": 21,
        "symbol": "Sc",
        "atomicMass": 44.956,
        "meltingPoint": 1539,
        "boilingPoint": 2832,
        "chemicalGroup": "Transition metal"
    },
    "titanium": {
        "atomicNumber": 22,
        "symbol": "Ti",
        "atomicMass": 47.867,
        "meltingPoint": 1668,
        "boilingPoint": 3287,
        "chemicalGroup": "Transition metal"
    },
    "vanadium": {
        "atomicNumber": 23,
        "symbol": "V",
        "atomicMass": 50.942,
        "meltingPoint": 1910,
        "boilingPoint": 3407,
        "chemicalGroup": "Transition metal"
    },
    "chromium": {
        "atomicNumber": 24,
        "symbol": "Cr",
        "atomicMass": 51.996,
        "meltingPoint": 1907,
        "boilingPoint": 2671,
        "chemicalGroup": "Transition metal"
    },
    "manganese": {
        "atomicNumber": 25,
        "symbol": "Mn",
        "atomicMass": 54.938,
        "meltingPoint": 1246,
        "boilingPoint": 1962,
        "chemicalGroup": "Transition metal"
    },
    "iron": {
        "atomicNumber": 26,
        "symbol": "Fe",
        "atomicMass": 55.845,
        "meltingPoint": 1811,
        "boilingPoint": 3134,
        "chemicalGroup": "Transition metal"
    },
    "cobalt": {
        "atomicNumber": 27,
        "symbol": "Co",
        "atomicMass": 58.933,
        "meltingPoint": 1768,
        "boilingPoint": 3200,
        "chemicalGroup": "Transition metal"
    },
    "nickel": {
        "atomicNumber": 28,
        "symbol": "Ni",
        "atomicMass": 58.693,
        "meltingPoint": 1728,
        "boilingPoint": 3186,
        "chemicalGroup": "Transition metal"
    },
    "copper": {
        "atomicNumber": 29,
        "symbol": "Cu",
        "atomicMass": 63.546,
        "meltingPoint": 1084.62,
        "boilingPoint": 2562,
        "chemicalGroup": "Transition metal"
    },
    "zinc": {
        "atomicNumber": 30,
        "symbol": "Zn",
        "atomicMass": 65.38,
        "meltingPoint": 419.53,
        "boilingPoint": 907,
        "chemicalGroup": "Transition metal"
    },
    "gallium": {
        "atomicNumber": 31,
        "symbol": "Ga",
        "atomicMass": 69.723,
        "meltingPoint": 29.76,
        "boilingPoint": 2403,
        "chemicalGroup": "Post-transition metal"
    },
    "germanium": {
        "atomicNumber": 32,
        "symbol": "Ge",
        "atomicMass": 72.63,
        "meltingPoint": 937.4,
        "boilingPoint": 2830,
        "chemicalGroup": "Metalloid"
    },
    "arsenic": {
        "atomicNumber": 33,
        "symbol": "As",
        "atomicMass": 74.921,
        "meltingPoint": 817,
        "boilingPoint": 613,
        "chemicalGroup": "Metalloid"
    },
    "selenium": {
        "atomicNumber": 34,
        "symbol": "Se",
        "atomicMass": 78.971,
        "meltingPoint": 217,
        "boilingPoint": 685,
        "chemicalGroup": "Nonmetal"
    },
    "bromine": {
        "atomicNumber": 35,
        "symbol": "Br",
        "atomicMass": 79.904,
        "meltingPoint": -7.2,
        "boilingPoint": 58.78,
        "chemicalGroup": "Halogen"
    },
    "krypton": {
        "atomicNumber": 36,
        "symbol": "Kr",
        "atomicMass": 83.798,
        "meltingPoint": -157.36,
        "boilingPoint": -153.22,
        "chemicalGroup": "Noble gas"
    },
    "rubidium": {
        "atomicNumber": 37,
        "symbol": "Rb",
        "atomicMass": 85.468,
        "meltingPoint": 39.31,
        "boilingPoint": 688,
        "chemicalGroup": "Alkali metal"
    },
    "strontium": {
        "atomicNumber": 38,
        "symbol": "Sr",
        "atomicMass": 87.62,
        "meltingPoint": 777,
        "boilingPoint": 1384,
        "chemicalGroup": "Alkaline earth metal"
    },
    "yttrium": {
        "atomicNumber": 39,
        "symbol": "Y",
        "atomicMass": 88.906,
        "meltingPoint": 1523,
        "boilingPoint": 3337,
        "chemicalGroup": "Transition metal"
    },
    "zirconium": {
        "atomicNumber": 40,
        "symbol": "Zr",
        "atomicMass": 91.224,
        "meltingPoint": 1852,
        "boilingPoint": 4377,
        "chemicalGroup": "Transition metal"
    },
    "niobium": {
        "atomicNumber": 41,
        "symbol": "Nb",
        "atomicMass": 92.906,
        "meltingPoint": 2468,
        "boilingPoint": 5017,
        "chemicalGroup": "Transition metal"
    },
    "molybdenum": {
        "atomicNumber": 42,
        "symbol": "Mo",
        "atomicMass": 95.95,
        "meltingPoint": 2617,
        "boilingPoint": 5560,
        "chemicalGroup": "Transition metal"
    },
    "technetium": {
        "atomicNumber": 43,
        "symbol": "Tc",
        "atomicMass": 98,
        "meltingPoint": 2200,
        "boilingPoint": 4877,
        "chemicalGroup": "Transition metal"
    },
    "ruthenium": {
        "atomicNumber": 44,
        "symbol": "Ru",
        "atomicMass": 101.1,
        "meltingPoint": 2607,
        "boilingPoint": 4423,
        "chemicalGroup": "Transition metal"
    },
    "rhodium": {
        "atomicNumber": 45,
        "symbol": "Rh",
        "atomicMass": 102.906,
        "meltingPoint": 2237,
        "boilingPoint": 3968,
        "chemicalGroup": "Transition metal"
    },
    "palladium": {
        "atomicNumber": 46,
        "symbol": "Pd",
        "atomicMass": 106.42,
        "meltingPoint": 1828.05,
        "boilingPoint": 3236,
        "chemicalGroup": "Transition metal"
    },
    "silver": {
        "atomicNumber": 47,
        "symbol": "Ag",
        "atomicMass": 107.868,
        "meltingPoint": 961.78,
        "boilingPoint": 2162,
        "chemicalGroup": "Transition metal"
    },
    "cadmium": {
        "atomicNumber": 48,
        "symbol": "Cd",
        "atomicMass": 112.411,
        "meltingPoint": 321.07,
        "boilingPoint": 765,
        "chemicalGroup": "Transition metal"
    },
    "indium": {
        "atomicNumber": 49,
        "symbol": "In",
        "atomicMass": 114.818,
        "meltingPoint": 156.61,
        "boilingPoint": 2072,
        "chemicalGroup": "Post-transition metal"
    },
    "tin": {
        "atomicNumber": 50,
        "symbol": "Sn",
        "atomicMass": 118.71,
        "meltingPoint": 231.93,
        "boilingPoint": 2270,
        "chemicalGroup": "Post-transition metal"
    },
    "antimony": {
        "atomicNumber": 51,
        "symbol": "Sb",
        "atomicMass": 121.76,
        "meltingPoint": 630.63,
        "boilingPoint": 1587,
        "chemicalGroup": "Metalloid"
    },
    "tellurium": {
        "atomicNumber": 52,
        "symbol": "Te",
        "atomicMass": 127.6,
        "meltingPoint": 449.51,
        "boilingPoint": 990,
        "chemicalGroup": "Metalloid"
    },
    "iodine": {
        "atomicNumber": 53,
        "symbol": "I",
        "atomicMass": 126.904,
        "meltingPoint": 386.85,
        "boilingPoint": 457.4,
        "chemicalGroup": "Halogen"
    },
    "xenon": {
        "atomicNumber": 54,
        "symbol": "Xe",
        "atomicMass": 131.293,
        "meltingPoint": 161.4,
        "boilingPoint": 165.03,
        "chemicalGroup": "Noble gas"
    },
    "cesium": {
        "atomicNumber": 55,
        "symbol": "Cs",
        "atomicMass": 132.905,
        "meltingPoint": 28.44,
        "boilingPoint": 678.4,
        "chemicalGroup": "Alkali metal"
    },
    "barium": {
        "atomicNumber": 56,
        "symbol": "Ba",
        "atomicMass": 137.327,
        "meltingPoint": 725,
        "boilingPoint": 1140,
        "chemicalGroup": "Alkaline earth metal"
    },
    "lanthanum": {
        "atomicNumber": 57,
        "symbol": "La",
        "atomicMass": 138.906,
        "meltingPoint": 920,
        "boilingPoint": 3469,
        "chemicalGroup": "Lanthanoid"
    },
    "cerium": {
        "atomicNumber": 58,
        "symbol": "Ce",
        "atomicMass": 140.116,
        "meltingPoint": 795,
        "boilingPoint": 3257,
        "chemicalGroup": "Lanthanoid"
    },
    "praseodymium": {
        "atomicNumber": 59,
        "symbol": "Pr",
        "atomicMass": 140.908,
        "meltingPoint": 935,
        "boilingPoint": 3127,
        "chemicalGroup": "Lanthanoid"
    },
    "neodymium": {
        "atomicNumber": 60,
        "symbol": "Nd",
        "atomicMass": 144.242,
        "meltingPoint": 1010,
        "boilingPoint": 3127,
        "chemicalGroup": "Lanthanoid"
    },
    "promethium": {
        "atomicNumber": 61,
        "symbol": "Pm",
        "atomicMass": 145,
        "meltingPoint": 1100,
        "boilingPoint": 3000,
        "chemicalGroup": "Lanthanoid"
    },
    "samarium": {
        "atomicNumber": 62,
        "symbol": "Sm",
        "atomicMass": 150.36,
        "meltingPoint": 1072,
        "boilingPoint": 1803,
        "chemicalGroup": "Lanthanoid"
    },
    "europium": {
        "atomicNumber": 63,
        "symbol": "Eu",
        "atomicMass": 152.932,
        "meltingPoint": 822,
        "boilingPoint": 1527,
        "chemicalGroup": "Lanthanoid"
    },
    "gadolinium": {
        "atomicNumber": 64,
        "symbol": "Gd",
        "atomicMass": 157.25,
        "meltingPoint": 1311,
        "boilingPoint": 3233,
        "chemicalGroup": "Lanthanoid"
    },
    "terbium": {
        "atomicNumber": 65,
        "symbol": "Tb",
        "atomicMass": 158.925,
        "meltingPoint": 1356,
        "boilingPoint": 3396,
        "chemicalGroup": "Lanthanoid"
    },
    "dysprosium": {
        "atomicNumber": 66,
        "symbol": "Dy",
        "atomicMass": 162.5,
        "meltingPoint": 1407,
        "boilingPoint": 2840,
        "chemicalGroup": "Lanthanoid"
    },
    "holmium": {
        "atomicNumber": 67,
        "symbol": "Ho",
        "atomicMass": 164.93,
        "meltingPoint": 1474,
        "boilingPoint": 2720,
        "chemicalGroup": "Lanthanoid"
    },
    "erbium": {
        "atomicNumber": 68,
        "symbol": "Er",
        "atomicMass": 167.259,
        "meltingPoint": 1522,
        "boilingPoint": 2510,
        "chemicalGroup": "Lanthanoid"
    },
    "thulium": {
        "atomicNumber": 69,
        "symbol": "Tm",
        "atomicMass": 168.934,
        "meltingPoint": 1545,
        "boilingPoint": 1727,
        "chemicalGroup": "Lanthanoid"
    },
    "ytterbium": {
        "atomicNumber": 70,
        "symbol": "Yb",
        "atomicMass": 173.054,
        "meltingPoint": 824,
        "boilingPoint": 1466,
        "chemicalGroup": "Lanthanoid"
    },
    "lutetium": {
        "atomicNumber": 71,
        "symbol": "Lu",
        "atomicMass": 175.08,
        "meltingPoint": 1656,
        "boilingPoint": 3315,
        "chemicalGroup": "Lanthanoid"
    },
    "hafnium": {
        "atomicNumber": 72,
        "symbol": "Hf",
        "atomicMass": 178.49,
        "meltingPoint": 2227,
        "boilingPoint": 4603,
        "chemicalGroup": "Transition metal"
    },
    "tantalum": {
        "atomicNumber": 73,
        "symbol": "Ta",
        "atomicMass": 180.948,
        "meltingPoint": 2996,
        "boilingPoint": 5425,
        "chemicalGroup": "Transition metal"
    },
    "tungsten": {
        "atomicNumber": 74,
        "symbol": "W",
        "atomicMass": 183.84,
        "meltingPoint": 3695,
        "boilingPoint": 5828,
        "chemicalGroup": "Transition metal"
    },
    "rhenium": {
        "atomicNumber": 75,
        "symbol": "Re",
        "atomicMass": 186.207,
        "meltingPoint": 3459,
        "boilingPoint": 5869,
        "chemicalGroup": "Transition metal"
    },
    "osmium": {
        "atomicNumber": 76,
        "symbol": "Os",
        "atomicMass": 190.23,
        "meltingPoint": 3306,
        "boilingPoint": 5285,
        "chemicalGroup": "Transition metal"
    },
    "iridium": {
        "atomicNumber": 77,
        "symbol": "Ir",
        "atomicMass": 192.217,
        "meltingPoint": 2716,
        "boilingPoint": 4701,
        "chemicalGroup": "Transition metal"
    },
    "platinum": {
        "atomicNumber": 78,
        "symbol": "Pt",
        "atomicMass": 195.084,
        "meltingPoint": 2041.4,
        "boilingPoint": 4098,
        "chemicalGroup": "Transition metal"
    },
    "gold": {
        "atomicNumber": 79,
        "symbol": "Au",
        "atomicMass": 196.967,
        "meltingPoint": 1064.43,
        "boilingPoint": 2807,
        "chemicalGroup": "Transition metal"
    },
    "mercury": {
        "atomicNumber": 80,
        "symbol": "Hg",
        "atomicMass": 200.59,
        "meltingPoint": -38.83,
        "boilingPoint": 356.73,
        "chemicalGroup": "Transition metal"
    },
    "thallium": {
        "atomicNumber": 81,
        "symbol": "Tl",
        "atomicMass": 204.38,
        "meltingPoint": 303,
        "boilingPoint": 1457,
        "chemicalGroup": "Post-transition metal"
    },
    "lead": {
        "atomicNumber": 82,
        "symbol": "Pb",
        "atomicMass": 207.2,
        "meltingPoint": 327.5,
        "boilingPoint": 1740,
        "chemicalGroup": "Post-transition metal"
    },
    "bismuth": {
        "atomicNumber": 83,
        "symbol": "Bi",
        "atomicMass": 209,
        "meltingPoint": 271.3,
        "boilingPoint": 1560,
        "chemicalGroup": "Post-transition metal"
    },
    "polonium": {
        "atomicNumber": 84,
        "symbol": "Po",
        "atomicMass": 209,
        "meltingPoint": 254,
        "boilingPoint": 962,
        "chemicalGroup": "Post-transition metal"
    },
    "astatine": {
        "atomicNumber": 85,
        "symbol": "At",
        "atomicMass": 210,
        "meltingPoint": 302,
        "boilingPoint": 337,
        "chemicalGroup": "Metalloid"
    },
    "radon": {
        "atomicNumber": 86,
        "symbol": "Rn",
        "atomicMass": 222,
        "meltingPoint": -71,
        "boilingPoint": -61.7,
        "chemicalGroup": "Noble gas"
    },
    "francium": {
        "atomicNumber": 87,
        "symbol": "Fr",
        "atomicMass": 223,
        "meltingPoint": 27,
        "boilingPoint": 677,
        "chemicalGroup": "Alkali metal"
    },
    "radium": {
        "atomicNumber": 88,
        "symbol": "Ra",
        "atomicMass": 226,
        "meltingPoint": 700,
        "boilingPoint": 1737,
        "chemicalGroup": "Alkaline earth metal"
    },
    "actinium": {
        "atomicNumber": 89,
        "symbol": "Ac",
        "atomicMass": 227,
        "meltingPoint": 1050,
        "boilingPoint": 3200,
        "chemicalGroup": "Actinoid"
    },
    "thorium": {
        "atomicNumber": 90,
        "symbol": "Th",
        "atomicMass": 232.038,
        "meltingPoint": 1750,
        "boilingPoint": 4790,
        "chemicalGroup": "Actinoid"
    },
    "protactinium": {
        "atomicNumber": 91,
        "symbol": "Pa",
        "atomicMass": 231.036,
        "meltingPoint": 1568,
        "boilingPoint": 4000,
        "chemicalGroup": "Actinoid"
    },
    "uranium": {
        "atomicNumber": 92,
        "symbol": "U",
        "atomicMass": 238.029,
        "meltingPoint": 1132,
        "boilingPoint": 4131,
        "chemicalGroup": "Actinoid"
    },
    "neptunium": {
        "atomicNumber": 93,
        "symbol": "Np",
        "atomicMass": 237,
        "meltingPoint": 639,
        "boilingPoint": 3902,
        "chemicalGroup": "Actinoid"
    },
    "plutonium": {
        "atomicNumber": 94,
        "symbol": "Pu",
        "atomicMass": 244,
        "meltingPoint": 640,
        "boilingPoint": 3232,
        "chemicalGroup": "Actinoid"
    },
    "americium": {
        "atomicNumber": 95,
        "symbol": "Am",
        "atomicMass": 243,
        "meltingPoint": 994,
        "boilingPoint": 2607,
        "chemicalGroup": "Actinoid"
    },
    "curium": {
        "atomicNumber": 96,
        "symbol": "Cm",
        "atomicMass": 247,
        "meltingPoint": 1345,
        "boilingPoint": 3110,
        "chemicalGroup": "Actinoid"
    },
    "berkelium": {
        "atomicNumber": 97,
        "symbol": "Bk",
        "atomicMass": 247,
        "meltingPoint": 986,
        "boilingPoint": 2900,
        "chemicalGroup": "Actinoid"
    },
    "californium": {
        "atomicNumber": 98,
        "symbol": "Cf",
        "atomicMass": 251,
        "meltingPoint": 900,
        "boilingPoint": 1470,
        "chemicalGroup": "Actinoid"
    },
    "einsteinium": {
        "atomicNumber": 99,
        "symbol": "Es",
        "atomicMass": 252,
        "meltingPoint": 860,
        "boilingPoint": 1269,
        "chemicalGroup": "Actinoid"
    },
    "fermium": {
        "atomicNumber": 100,
        "symbol": "Fm",
        "atomicMass": 257,
        "meltingPoint": 1527,
        "boilingPoint": unknown,
        "chemicalGroup": "Actinoid"
    },
    "mendelevium": {
        "atomicNumber": 101,
        "symbol": "Md",
        "atomicMass": 258,
        "meltingPoint": 1100,
        "boilingPoint": unknown,
        "chemicalGroup": "Actinoid"
    },
    "nobelium": {
        "atomicNumber": 102,
        "symbol": "No",
        "atomicMass": 259,
        "meltingPoint": 1100,
        "boilingPoint": unknown,
        "chemicalGroup": "Actinoid"
    },
    "lawrencium": {
        "atomicNumber": 103,
        "symbol": "Lr",
        "atomicMass": 262,
        "meltingPoint": 1916,
        "boilingPoint": unknown,
        "chemicalGroup": "Actinoid"
    },
    "rutherfordium": {
        "atomicNumber": 104,
        "symbol": "Rf",
        "atomicMass": 261,
        "meltingPoint": 2100,
        "boilingPoint": 5800,
        "chemicalGroup": "Transition metal"
    },
    "dubnium": {
        "atomicNumber": 105,
        "symbol": "Db",
        "atomicMass": 262,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "seaborgium": {
        "atomicNumber": 106,
        "symbol": "Sg",
        "atomicMass": 266,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "bohrium": {
        "atomicNumber": 107,
        "symbol": "Bh",
        "atomicMass": 264,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "hassium": {
        "atomicNumber": 108,
        "symbol": "Hs",
        "atomicMass": 277,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "meitnerium": {
        "atomicNumber": 109,
        "symbol": "Mt",
        "atomicMass": 278,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "darmstadtium": {
        "atomicNumber": 110,
        "symbol": "Ds",
        "atomicMass": 281,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "roentgenium": {
        "atomicNumber": 111,
        "symbol": "Rg",
        "atomicMass": 280,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "copernicium": {
        "atomicNumber": 112,
        "symbol": "Cn",
        "atomicMass": 285,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Transition metal"
    },
    "nihonium": {
        "atomicNumber": 113,
        "symbol": "Nh",
        "atomicMass": 286,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    },
    "flerovium": {
        "atomicNumber": 114,
        "symbol": "Fl",
        "atomicMass": 289,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    },
    "moscovium": {
        "atomicNumber": 115,
        "symbol": "Mc",
        "atomicMass": 289,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    },
    "livermorium": {
        "atomicNumber": 116,
        "symbol": "Lv",
        "atomicMass": 293,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    },
    "tennessine": {
        "atomicNumber": 117,
        "symbol": "Ts",
        "atomicMass": 294,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    },
    "oganesson": {
        "atomicNumber": 118,
        "symbol": "Og",
        "atomicMass": 294,
        "meltingPoint": unknown,
        "boilingPoint": unknown,
        "chemicalGroup": "Unknown chemical properties"
    }
}

let arrayElements = [{
    "elementName": "hydrogen",
    "atomicNumber": 1,
    "symbol": "H",
    "atomicMass": 1.008,
    "meltingPoint": -259.14,
    "boilingPoint": -252.87,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "helium",
    "atomicNumber": 2,
    "symbol": "He",
    "atomicMass": 4.003,
    "meltingPoint": -272.2,
    "boilingPoint": -268.93,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "lithium",
    "atomicNumber": 3,
    "symbol": "Li",
    "atomicMass": 6.94,
    "meltingPoint": 180.54,
    "boilingPoint": 1342,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "beryllium",
    "atomicNumber": 4,
    "symbol": "Be",
    "atomicMass": 9.012,
    "meltingPoint": 1278,
    "boilingPoint": 2970,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "boron",
    "atomicNumber": 5,
    "symbol": "B",
    "atomicMass": 10.81,
    "meltingPoint": 2075,
    "boilingPoint": 3927,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "carbon",
    "atomicNumber": 6,
    "symbol": "C",
    "atomicMass": 12.011,
    "meltingPoint": 3500,
    "boilingPoint": 4827,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "nitrogen",
    "atomicNumber": 7,
    "symbol": "N",
    "atomicMass": 14.007,
    "meltingPoint": -210.01,
    "boilingPoint": -195.79,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "oxygen",
    "atomicNumber": 8,
    "symbol": "O",
    "atomicMass": 15.999,
    "meltingPoint": -218.79,
    "boilingPoint": -183,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "fluorine",
    "atomicNumber": 9,
    "symbol": "F",
    "atomicMass": 18.998,
    "meltingPoint": -219.62,
    "boilingPoint": -188.14,
    "chemicalGroup": "Halogen"
}, {
    "elementName": "neon",
    "atomicNumber": 10,
    "symbol": "Ne",
    "atomicMass": 20.18,
    "meltingPoint": -248.59,
    "boilingPoint": -246.08,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "sodium",
    "atomicNumber": 11,
    "symbol": "Na",
    "atomicMass": 22.99,
    "meltingPoint": 97.72,
    "boilingPoint": 883,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "magnesium",
    "atomicNumber": 12,
    "symbol": "Mg",
    "atomicMass": 24.305,
    "meltingPoint": 650,
    "boilingPoint": 1090,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "aluminum",
    "atomicNumber": 13,
    "symbol": "Al",
    "atomicMass": 26.982,
    "meltingPoint": 660.37,
    "boilingPoint": 2467,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "silicon",
    "atomicNumber": 14,
    "symbol": "Si",
    "atomicMass": 28.085,
    "meltingPoint": 1414,
    "boilingPoint": 3265,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "phosphorus",
    "atomicNumber": 15,
    "symbol": "P",
    "atomicMass": 30.974,
    "meltingPoint": 317.3,
    "boilingPoint": 553.6,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "sulfur",
    "atomicNumber": 16,
    "symbol": "S",
    "atomicMass": 32.06,
    "meltingPoint": 115.21,
    "boilingPoint": 444.6,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "chlorine",
    "atomicNumber": 17,
    "symbol": "Cl",
    "atomicMass": 35.45,
    "meltingPoint": -101.5,
    "boilingPoint": -34.04,
    "chemicalGroup": "Halogen"
}, {
    "elementName": "argon",
    "atomicNumber": 18,
    "symbol": "Ar",
    "atomicMass": 39.948,
    "meltingPoint": -189.34,
    "boilingPoint": -185.86,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "potassium",
    "atomicNumber": 19,
    "symbol": "K",
    "atomicMass": 39.098,
    "meltingPoint": 63.65,
    "boilingPoint": 759,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "calcium",
    "atomicNumber": 20,
    "symbol": "Ca",
    "atomicMass": 40.078,
    "meltingPoint": 839,
    "boilingPoint": 1484,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "scandium",
    "atomicNumber": 21,
    "symbol": "Sc",
    "atomicMass": 44.956,
    "meltingPoint": 1539,
    "boilingPoint": 2832,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "titanium",
    "atomicNumber": 22,
    "symbol": "Ti",
    "atomicMass": 47.867,
    "meltingPoint": 1668,
    "boilingPoint": 3287,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "vanadium",
    "atomicNumber": 23,
    "symbol": "V",
    "atomicMass": 50.942,
    "meltingPoint": 1910,
    "boilingPoint": 3407,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "chromium",
    "atomicNumber": 24,
    "symbol": "Cr",
    "atomicMass": 51.996,
    "meltingPoint": 1907,
    "boilingPoint": 2671,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "manganese",
    "atomicNumber": 25,
    "symbol": "Mn",
    "atomicMass": 54.938,
    "meltingPoint": 1246,
    "boilingPoint": 1962,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "iron",
    "atomicNumber": 26,
    "symbol": "Fe",
    "atomicMass": 55.845,
    "meltingPoint": 1811,
    "boilingPoint": 3134,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "cobalt",
    "atomicNumber": 27,
    "symbol": "Co",
    "atomicMass": 58.933,
    "meltingPoint": 1768,
    "boilingPoint": 3200,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "nickel",
    "atomicNumber": 28,
    "symbol": "Ni",
    "atomicMass": 58.693,
    "meltingPoint": 1728,
    "boilingPoint": 3186,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "copper",
    "atomicNumber": 29,
    "symbol": "Cu",
    "atomicMass": 63.546,
    "meltingPoint": 1084.62,
    "boilingPoint": 2562,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "zinc",
    "atomicNumber": 30,
    "symbol": "Zn",
    "atomicMass": 65.38,
    "meltingPoint": 419.53,
    "boilingPoint": 907,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "gallium",
    "atomicNumber": 31,
    "symbol": "Ga",
    "atomicMass": 69.723,
    "meltingPoint": 29.76,
    "boilingPoint": 2403,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "germanium",
    "atomicNumber": 32,
    "symbol": "Ge",
    "atomicMass": 72.63,
    "meltingPoint": 937.4,
    "boilingPoint": 2830,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "arsenic",
    "atomicNumber": 33,
    "symbol": "As",
    "atomicMass": 74.921,
    "meltingPoint": 817,
    "boilingPoint": 613,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "selenium",
    "atomicNumber": 34,
    "symbol": "Se",
    "atomicMass": 78.971,
    "meltingPoint": 217,
    "boilingPoint": 685,
    "chemicalGroup": "Nonmetal"
}, {
    "elementName": "bromine",
    "atomicNumber": 35,
    "symbol": "Br",
    "atomicMass": 79.904,
    "meltingPoint": -7.2,
    "boilingPoint": 58.78,
    "chemicalGroup": "Halogen"
}, {
    "elementName": "krypton",
    "atomicNumber": 36,
    "symbol": "Kr",
    "atomicMass": 83.798,
    "meltingPoint": -157.36,
    "boilingPoint": -153.22,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "rubidium",
    "atomicNumber": 37,
    "symbol": "Rb",
    "atomicMass": 85.468,
    "meltingPoint": 39.31,
    "boilingPoint": 688,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "strontium",
    "atomicNumber": 38,
    "symbol": "Sr",
    "atomicMass": 87.62,
    "meltingPoint": 777,
    "boilingPoint": 1384,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "yttrium",
    "atomicNumber": 39,
    "symbol": "Y",
    "atomicMass": 88.906,
    "meltingPoint": 1523,
    "boilingPoint": 3337,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "zirconium",
    "atomicNumber": 40,
    "symbol": "Zr",
    "atomicMass": 91.224,
    "meltingPoint": 1852,
    "boilingPoint": 4377,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "niobium",
    "atomicNumber": 41,
    "symbol": "Nb",
    "atomicMass": 92.906,
    "meltingPoint": 2468,
    "boilingPoint": 5017,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "molybdenum",
    "atomicNumber": 42,
    "symbol": "Mo",
    "atomicMass": 95.95,
    "meltingPoint": 2617,
    "boilingPoint": 5560,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "technetium",
    "atomicNumber": 43,
    "symbol": "Tc",
    "atomicMass": 98,
    "meltingPoint": 2200,
    "boilingPoint": 4877,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "ruthenium",
    "atomicNumber": 44,
    "symbol": "Ru",
    "atomicMass": 101.1,
    "meltingPoint": 2607,
    "boilingPoint": 4423,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "rhodium",
    "atomicNumber": 45,
    "symbol": "Rh",
    "atomicMass": 102.906,
    "meltingPoint": 2237,
    "boilingPoint": 3968,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "palladium",
    "atomicNumber": 46,
    "symbol": "Pd",
    "atomicMass": 106.42,
    "meltingPoint": 1828.05,
    "boilingPoint": 3236,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "silver",
    "atomicNumber": 47,
    "symbol": "Ag",
    "atomicMass": 107.868,
    "meltingPoint": 961.78,
    "boilingPoint": 2162,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "cadmium",
    "atomicNumber": 48,
    "symbol": "Cd",
    "atomicMass": 112.411,
    "meltingPoint": 321.07,
    "boilingPoint": 765,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "indium",
    "atomicNumber": 49,
    "symbol": "In",
    "atomicMass": 114.818,
    "meltingPoint": 156.61,
    "boilingPoint": 2072,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "tin",
    "atomicNumber": 50,
    "symbol": "Sn",
    "atomicMass": 118.71,
    "meltingPoint": 231.93,
    "boilingPoint": 2270,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "antimony",
    "atomicNumber": 51,
    "symbol": "Sb",
    "atomicMass": 121.76,
    "meltingPoint": 630.63,
    "boilingPoint": 1587,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "tellurium",
    "atomicNumber": 52,
    "symbol": "Te",
    "atomicMass": 127.6,
    "meltingPoint": 449.51,
    "boilingPoint": 990,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "iodine",
    "atomicNumber": 53,
    "symbol": "I",
    "atomicMass": 126.904,
    "meltingPoint": 386.85,
    "boilingPoint": 457.4,
    "chemicalGroup": "Halogen"
}, {
    "elementName": "xenon",
    "atomicNumber": 54,
    "symbol": "Xe",
    "atomicMass": 131.293,
    "meltingPoint": 161.4,
    "boilingPoint": 165.03,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "cesium",
    "atomicNumber": 55,
    "symbol": "Cs",
    "atomicMass": 132.905,
    "meltingPoint": 28.44,
    "boilingPoint": 678.4,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "barium",
    "atomicNumber": 56,
    "symbol": "Ba",
    "atomicMass": 137.327,
    "meltingPoint": 725,
    "boilingPoint": 1140,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "lanthanum",
    "atomicNumber": 57,
    "symbol": "La",
    "atomicMass": 138.906,
    "meltingPoint": 920,
    "boilingPoint": 3469,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "cerium",
    "atomicNumber": 58,
    "symbol": "Ce",
    "atomicMass": 140.116,
    "meltingPoint": 795,
    "boilingPoint": 3257,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "praseodymium",
    "atomicNumber": 59,
    "symbol": "Pr",
    "atomicMass": 140.908,
    "meltingPoint": 935,
    "boilingPoint": 3127,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "neodymium",
    "atomicNumber": 60,
    "symbol": "Nd",
    "atomicMass": 144.242,
    "meltingPoint": 1010,
    "boilingPoint": 3127,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "promethium",
    "atomicNumber": 61,
    "symbol": "Pm",
    "atomicMass": 145,
    "meltingPoint": 1100,
    "boilingPoint": 3000,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "samarium",
    "atomicNumber": 62,
    "symbol": "Sm",
    "atomicMass": 150.36,
    "meltingPoint": 1072,
    "boilingPoint": 1803,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "europium",
    "atomicNumber": 63,
    "symbol": "Eu",
    "atomicMass": 152.932,
    "meltingPoint": 822,
    "boilingPoint": 1527,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "gadolinium",
    "atomicNumber": 64,
    "symbol": "Gd",
    "atomicMass": 157.25,
    "meltingPoint": 1311,
    "boilingPoint": 3233,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "terbium",
    "atomicNumber": 65,
    "symbol": "Tb",
    "atomicMass": 158.925,
    "meltingPoint": 1356,
    "boilingPoint": 3396,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "dysprosium",
    "atomicNumber": 66,
    "symbol": "Dy",
    "atomicMass": 162.5,
    "meltingPoint": 1407,
    "boilingPoint": 2840,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "holmium",
    "atomicNumber": 67,
    "symbol": "Ho",
    "atomicMass": 164.93,
    "meltingPoint": 1474,
    "boilingPoint": 2720,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "erbium",
    "atomicNumber": 68,
    "symbol": "Er",
    "atomicMass": 167.259,
    "meltingPoint": 1522,
    "boilingPoint": 2510,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "thulium",
    "atomicNumber": 69,
    "symbol": "Tm",
    "atomicMass": 168.934,
    "meltingPoint": 1545,
    "boilingPoint": 1727,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "ytterbium",
    "atomicNumber": 70,
    "symbol": "Yb",
    "atomicMass": 173.054,
    "meltingPoint": 824,
    "boilingPoint": 1466,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "lutetium",
    "atomicNumber": 71,
    "symbol": "Lu",
    "atomicMass": 175.08,
    "meltingPoint": 1656,
    "boilingPoint": 3315,
    "chemicalGroup": "Lanthanoid"
}, {
    "elementName": "hafnium",
    "atomicNumber": 72,
    "symbol": "Hf",
    "atomicMass": 178.49,
    "meltingPoint": 2227,
    "boilingPoint": 4603,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "tantalum",
    "atomicNumber": 73,
    "symbol": "Ta",
    "atomicMass": 180.948,
    "meltingPoint": 2996,
    "boilingPoint": 5425,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "tungsten",
    "atomicNumber": 74,
    "symbol": "W",
    "atomicMass": 183.84,
    "meltingPoint": 3695,
    "boilingPoint": 5828,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "rhenium",
    "atomicNumber": 75,
    "symbol": "Re",
    "atomicMass": 186.207,
    "meltingPoint": 3459,
    "boilingPoint": 5869,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "osmium",
    "atomicNumber": 76,
    "symbol": "Os",
    "atomicMass": 190.23,
    "meltingPoint": 3306,
    "boilingPoint": 5285,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "iridium",
    "atomicNumber": 77,
    "symbol": "Ir",
    "atomicMass": 192.217,
    "meltingPoint": 2716,
    "boilingPoint": 4701,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "platinum",
    "atomicNumber": 78,
    "symbol": "Pt",
    "atomicMass": 195.084,
    "meltingPoint": 2041.4,
    "boilingPoint": 4098,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "gold",
    "atomicNumber": 79,
    "symbol": "Au",
    "atomicMass": 196.967,
    "meltingPoint": 1064.43,
    "boilingPoint": 2807,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "mercury",
    "atomicNumber": 80,
    "symbol": "Hg",
    "atomicMass": 200.59,
    "meltingPoint": -38.83,
    "boilingPoint": 356.73,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "thallium",
    "atomicNumber": 81,
    "symbol": "Tl",
    "atomicMass": 204.38,
    "meltingPoint": 303,
    "boilingPoint": 1457,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "lead",
    "atomicNumber": 82,
    "symbol": "Pb",
    "atomicMass": 207.2,
    "meltingPoint": 327.5,
    "boilingPoint": 1740,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "bismuth",
    "atomicNumber": 83,
    "symbol": "Bi",
    "atomicMass": 209,
    "meltingPoint": 271.3,
    "boilingPoint": 1560,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "polonium",
    "atomicNumber": 84,
    "symbol": "Po",
    "atomicMass": 209,
    "meltingPoint": 254,
    "boilingPoint": 962,
    "chemicalGroup": "Post-transition metal"
}, {
    "elementName": "astatine",
    "atomicNumber": 85,
    "symbol": "At",
    "atomicMass": 210,
    "meltingPoint": 302,
    "boilingPoint": 337,
    "chemicalGroup": "Metalloid"
}, {
    "elementName": "radon",
    "atomicNumber": 86,
    "symbol": "Rn",
    "atomicMass": 222,
    "meltingPoint": -71,
    "boilingPoint": -61.7,
    "chemicalGroup": "Noble gas"
}, {
    "elementName": "francium",
    "atomicNumber": 87,
    "symbol": "Fr",
    "atomicMass": 223,
    "meltingPoint": 27,
    "boilingPoint": 677,
    "chemicalGroup": "Alkali metal"
}, {
    "elementName": "radium",
    "atomicNumber": 88,
    "symbol": "Ra",
    "atomicMass": 226,
    "meltingPoint": 700,
    "boilingPoint": 1737,
    "chemicalGroup": "Alkaline earth metal"
}, {
    "elementName": "actinium",
    "atomicNumber": 89,
    "symbol": "Ac",
    "atomicMass": 227,
    "meltingPoint": 1050,
    "boilingPoint": 3200,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "thorium",
    "atomicNumber": 90,
    "symbol": "Th",
    "atomicMass": 232.038,
    "meltingPoint": 1750,
    "boilingPoint": 4790,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "protactinium",
    "atomicNumber": 91,
    "symbol": "Pa",
    "atomicMass": 231.036,
    "meltingPoint": 1568,
    "boilingPoint": 4000,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "uranium",
    "atomicNumber": 92,
    "symbol": "U",
    "atomicMass": 238.029,
    "meltingPoint": 1132,
    "boilingPoint": 4131,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "neptunium",
    "atomicNumber": 93,
    "symbol": "Np",
    "atomicMass": 237,
    "meltingPoint": 639,
    "boilingPoint": 3902,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "plutonium",
    "atomicNumber": 94,
    "symbol": "Pu",
    "atomicMass": 244,
    "meltingPoint": 640,
    "boilingPoint": 3232,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "americium",
    "atomicNumber": 95,
    "symbol": "Am",
    "atomicMass": 243,
    "meltingPoint": 994,
    "boilingPoint": 2607,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "curium",
    "atomicNumber": 96,
    "symbol": "Cm",
    "atomicMass": 247,
    "meltingPoint": 1345,
    "boilingPoint": 3110,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "berkelium",
    "atomicNumber": 97,
    "symbol": "Bk",
    "atomicMass": 247,
    "meltingPoint": 986,
    "boilingPoint": 2900,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "californium",
    "atomicNumber": 98,
    "symbol": "Cf",
    "atomicMass": 251,
    "meltingPoint": 900,
    "boilingPoint": 1470,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "einsteinium",
    "atomicNumber": 99,
    "symbol": "Es",
    "atomicMass": 252,
    "meltingPoint": 860,
    "boilingPoint": 1269,
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "fermium",
    "atomicNumber": 100,
    "symbol": "Fm",
    "atomicMass": 257,
    "meltingPoint": 1527,
    "boilingPoint": "?",
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "mendelevium",
    "atomicNumber": 101,
    "symbol": "Md",
    "atomicMass": 258,
    "meltingPoint": 1100,
    "boilingPoint": "?",
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "nobelium",
    "atomicNumber": 102,
    "symbol": "No",
    "atomicMass": 259,
    "meltingPoint": 1100,
    "boilingPoint": "?",
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "lawrencium",
    "atomicNumber": 103,
    "symbol": "Lr",
    "atomicMass": 262,
    "meltingPoint": 1916,
    "boilingPoint": "?",
    "chemicalGroup": "Actinoid"
}, {
    "elementName": "rutherfordium",
    "atomicNumber": 104,
    "symbol": "Rf",
    "atomicMass": 261,
    "meltingPoint": 2100,
    "boilingPoint": 5800,
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "dubnium",
    "atomicNumber": 105,
    "symbol": "Db",
    "atomicMass": 262,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "seaborgium",
    "atomicNumber": 106,
    "symbol": "Sg",
    "atomicMass": 266,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "bohrium",
    "atomicNumber": 107,
    "symbol": "Bh",
    "atomicMass": 264,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "hassium",
    "atomicNumber": 108,
    "symbol": "Hs",
    "atomicMass": 277,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "meitnerium",
    "atomicNumber": 109,
    "symbol": "Mt",
    "atomicMass": 278,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "darmstadtium",
    "atomicNumber": 110,
    "symbol": "Ds",
    "atomicMass": 281,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "roentgenium",
    "atomicNumber": 111,
    "symbol": "Rg",
    "atomicMass": 280,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "copernicium",
    "atomicNumber": 112,
    "symbol": "Cn",
    "atomicMass": 285,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Transition metal"
}, {
    "elementName": "nihonium",
    "atomicNumber": 113,
    "symbol": "Nh",
    "atomicMass": 286,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}, {
    "elementName": "flerovium",
    "atomicNumber": 114,
    "symbol": "Fl",
    "atomicMass": 289,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}, {
    "elementName": "moscovium",
    "atomicNumber": 115,
    "symbol": "Mc",
    "atomicMass": 289,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}, {
    "elementName": "livermorium",
    "atomicNumber": 116,
    "symbol": "Lv",
    "atomicMass": 293,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}, {
    "elementName": "tennessine",
    "atomicNumber": 117,
    "symbol": "Ts",
    "atomicMass": 294,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}, {
    "elementName": "oganesson",
    "atomicNumber": 118,
    "symbol": "Og",
    "atomicMass": 294,
    "meltingPoint": "?",
    "boilingPoint": "?",
    "chemicalGroup": "Unknown chemical properties"
}]

app.use(cors())

app.get('/api', (req, res) => {
    // const elementName = req.params.element.toLowerCase()
    res.json(elements)
    // if (elements[elementName]) {
    //     res.json(elements[elementName])
    // }
})

app.get('/api/elementArray', (req, res) => {
    res.json(arrayElements)
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})